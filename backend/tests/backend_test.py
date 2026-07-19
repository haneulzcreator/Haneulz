"""
Backend API tests for HANEULZ.
Covers: public AUs, comments, likes, submissions, variety, auth, admin moderation.
"""
import os
import pytest
import requests

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL", "https://haneulz-corner.preview.emergentagent.com").rstrip("/")
API = f"{BASE_URL}/api"

ADMIN_EMAIL = "admin@haneulz.com"
ADMIN_PASSWORD = "haneulz2025"


@pytest.fixture(scope="session")
def session():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


@pytest.fixture(scope="session")
def admin_token(session):
    r = session.post(f"{API}/auth/login", json={"email": ADMIN_EMAIL, "password": ADMIN_PASSWORD})
    assert r.status_code == 200, f"Login failed: {r.status_code} {r.text}"
    data = r.json()
    assert "token" in data and "user" in data
    assert data["user"]["email"] == ADMIN_EMAIL
    return data["token"]


@pytest.fixture()
def admin_headers(admin_token):
    return {"Authorization": f"Bearer {admin_token}", "Content-Type": "application/json"}


# ---------------- Public endpoints ----------------
class TestPublic:
    def test_root(self, session):
        r = session.get(f"{API}/")
        assert r.status_code == 200

    def test_list_aus_approved_only(self, session):
        r = session.get(f"{API}/aus")
        assert r.status_code == 200
        data = r.json()
        assert isinstance(data, list)
        assert len(data) >= 4
        for au in data:
            assert au["status"] == "approved"
            assert "_id" not in au

    def test_get_au_single(self, session):
        aus = session.get(f"{API}/aus").json()
        au_id = aus[0]["id"]
        r = session.get(f"{API}/aus/{au_id}")
        assert r.status_code == 200
        assert r.json()["id"] == au_id

    def test_get_au_404(self, session):
        r = session.get(f"{API}/aus/nonexistent-id-xxx")
        assert r.status_code == 404

    def test_variety_list(self, session):
        r = session.get(f"{API}/variety")
        assert r.status_code == 200
        data = r.json()
        assert len(data) >= 3
        for v in data:
            assert "show_name" in v and "episode" in v

    def test_like_au_increments(self, session):
        aus = session.get(f"{API}/aus").json()
        au_id = aus[0]["id"]
        before = aus[0]["likes"]
        r = session.post(f"{API}/aus/{au_id}/like")
        assert r.status_code == 200
        assert r.json()["likes"] == before + 1

    def test_like_nonexistent(self, session):
        r = session.post(f"{API}/aus/does-not-exist/like")
        assert r.status_code == 404


# ---------------- Submissions (pending) ----------------
class TestSubmissions:
    def test_submit_au_pending_hidden(self, session):
        payload = {
            "title": "TEST_Pending AU",
            "author_name": "TEST_author",
            "short_description": "TEST short",
            "full_story": "TEST full story",
            "au_type": "story",
            "tags": ["test"],
        }
        r = session.post(f"{API}/aus", json=payload)
        assert r.status_code == 200
        au = r.json()
        assert au["status"] == "pending"
        assert au["title"] == "TEST_Pending AU"
        # Should not be in public list
        public = session.get(f"{API}/aus").json()
        ids = [a["id"] for a in public]
        assert au["id"] not in ids
        # Single GET on pending returns 404
        r2 = session.get(f"{API}/aus/{au['id']}")
        assert r2.status_code == 404

    def test_comment_pending_hidden(self, session):
        aus = session.get(f"{API}/aus").json()
        au_id = aus[0]["id"]
        r = session.post(f"{API}/aus/{au_id}/comments", json={"author_name": "TEST_user", "text": "TEST comment"})
        assert r.status_code == 200
        c = r.json()
        assert c["status"] == "pending"
        # Not visible in public comments list
        listed = session.get(f"{API}/aus/{au_id}/comments").json()
        assert c["id"] not in [x["id"] for x in listed]

    def test_comment_on_nonexistent(self, session):
        r = session.post(f"{API}/aus/nope/comments", json={"author_name": "a", "text": "b"})
        assert r.status_code == 404


# ---------------- Auth ----------------
class TestAuth:
    def test_login_wrong_password(self, session):
        r = session.post(f"{API}/auth/login", json={"email": ADMIN_EMAIL, "password": "wrong"})
        assert r.status_code == 401

    def test_me_no_token(self, session):
        r = requests.get(f"{API}/auth/me")
        assert r.status_code == 401

    def test_me_valid_token(self, session, admin_headers):
        r = requests.get(f"{API}/auth/me", headers=admin_headers)
        assert r.status_code == 200
        data = r.json()
        assert data["email"] == ADMIN_EMAIL
        assert "password_hash" not in data

    def test_admin_endpoint_requires_auth(self, session):
        r = requests.get(f"{API}/admin/aus")
        assert r.status_code == 401


# ---------------- Admin moderation ----------------
class TestAdminModeration:
    def test_full_moderation_flow(self, session, admin_headers):
        # Submit pending AU
        payload = {
            "title": "TEST_Mod flow AU",
            "author_name": "TEST_mod",
            "short_description": "TEST",
            "full_story": "TEST story text",
            "au_type": "story",
        }
        au = session.post(f"{API}/aus", json=payload).json()
        au_id = au["id"]

        # Admin list all
        r = requests.get(f"{API}/admin/aus", headers=admin_headers)
        assert r.status_code == 200
        assert au_id in [x["id"] for x in r.json()]

        # Approve
        r = requests.patch(f"{API}/admin/aus/{au_id}", json={"status": "approved"}, headers=admin_headers)
        assert r.status_code == 200
        assert r.json()["status"] == "approved"

        # Now visible publicly
        public = requests.get(f"{API}/aus").json()
        assert au_id in [a["id"] for a in public]

        # Delete cleanup
        r = requests.delete(f"{API}/admin/aus/{au_id}", headers=admin_headers)
        assert r.status_code == 200

        # Verify removed
        r = requests.get(f"{API}/aus/{au_id}")
        assert r.status_code == 404

    def test_invalid_status(self, session, admin_headers):
        aus = requests.get(f"{API}/admin/aus", headers=admin_headers).json()
        au_id = aus[0]["id"]
        r = requests.patch(f"{API}/admin/aus/{au_id}", json={"status": "garbage"}, headers=admin_headers)
        assert r.status_code == 400

    def test_comment_moderation_flow(self, session, admin_headers):
        aus = session.get(f"{API}/aus").json()
        au_id = aus[0]["id"]
        c = session.post(f"{API}/aus/{au_id}/comments", json={"author_name": "TEST_c", "text": "TEST_moderation"}).json()
        cid = c["id"]

        # Approve
        r = requests.patch(f"{API}/admin/comments/{cid}", json={"status": "approved"}, headers=admin_headers)
        assert r.status_code == 200

        # Visible publicly
        listed = session.get(f"{API}/aus/{au_id}/comments").json()
        assert cid in [x["id"] for x in listed]

        # Delete
        r = requests.delete(f"{API}/admin/comments/{cid}", headers=admin_headers)
        assert r.status_code == 200
