import React, { useState, useEffect } from 'react';

export default function AboutWebsite() {
  const [settings, setSettings] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/settings')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch settings');
        return res.json();
      })
      .then((data) => {
        setSettings(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error loading site settings:', err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="about-container" style={{
      maxWidth: '800px',
      margin: '40px auto',
      padding: '30px 20px',
      fontFamily: "'Quicksand', 'Nunito', sans-serif",
      color: '#4A4A4A'
    }}>
      {/* Journal / Scrapbook Container */}
      <div style={{
        background: 'rgba(255, 255, 255, 0.85)',
        backdropFilter: 'blur(10px)',
        borderRadius: '24px',
        padding: '40px 30px',
        boxShadow: '0 10px 30px rgba(182, 213, 240, 0.3)',
        border: '2px solid #E3F2FD',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Floating Aesthetic Headers */}
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <span style={{ fontSize: '2rem' }}>☁️</span>
          <h1 style={{
            fontSize: '2.2rem',
            color: '#5C9CE6',
            marginTop: '10px',
            marginBottom: '5px',
            fontWeight: '700'
          }}>
            {settings?.about_title || 'Our Little Corner'}
          </h1>
          <p style={{ color: '#F48FB1', fontWeight: '600', fontSize: '1.1rem' }}>
            {settings?.about_subtitle || 'Welcome to Haneulz Corner ☁️💗'}
          </p>
        </div>

        {/* Welcome Section */}
        <div style={{ lineHeight: '1.8', fontSize: '1.05rem', marginBottom: '35px' }}>
          {settings?.about_letter ? (
            <div style={{ whiteSpace: 'pre-line' }}>{settings.about_letter}</div>
          ) : (
            <>
              <p>
                Haneulz Corner started as a simple idea from one Hansum who just wanted a place where everything about <strong>HANEULZ</strong> could be found a little more easily.
              </p>
              <p>
                Like many fans, I often found myself scrolling through old bookmarks, searching for a specific AU, trying to remember where I had saved a variety clip, or looking for that one post I loved but couldn’t find again. Eventually, I thought, <em>why not create a little corner where I can keep everything together?</em>
              </p>
              <p>
                What began as a personal collection slowly grew into a space that I wanted to share with fellow fans. This website was never meant to be anything official—it’s simply a passion project made with love for the HANEULZ community.
              </p>
              <p>
                Whether you’re here to discover a new AU, revisit an old favorite, catch up on variety appearances, or simply spend a little time enjoying the creativity of fellow Hansums, I hope this little corner makes your visit a little easier and a little happier.
              </p>
              <p>
                Thank you for stopping by, and I hope Haneulz Corner becomes a place you’ll always enjoy coming back to.
              </p>
            </>
          )}

          {/* Personal Handwritten Sign-off */}
          <div style={{
            marginTop: '25px',
            textAlign: 'right',
            fontStyle: 'italic',
            color: '#7C4DFF',
            fontWeight: '600'
          }}>
            <p style={{ margin: 0 }}>
              {settings?.about_signoff_text || 'Made with lots of love, late-night ideas, and a few too many bookmarks.'}
            </p>
            <p style={{ margin: '5px 0 0 0', fontSize: '1.2rem', fontWeight: '700' }}>
              {settings?.about_signoff_author || '— K ☁️💗'}
            </p>
          </div>
        </div>

        {/* Decorative Divider */}
        <div style={{
          textAlign: 'center',
          margin: '30px 0',
          color: '#BBDEFB',
          letterSpacing: '8px'
        }}>
          ✦ ☁️ ✦ 🌸 ✦ ☁️ ✦
        </div>

        {/* Community Notice Section */}
        <div style={{
          background: '#F0F7FF',
          padding: '25px',
          borderRadius: '16px',
          borderLeft: '4px solid #90CAF9',
          fontSize: '0.95rem',
          lineHeight: '1.7',
          color: '#555'
        }}>
          <h3 style={{ color: '#42A5F5', marginTop: 0, marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span>📜</span> Community Notice
          </h3>
          <p>
            Haneulz Corner is a fan-made directory created to help organize and appreciate the amazing creativity within the HANEULZ community.
          </p>
          <p>
            All AUs, fan edits, playlists, videos, artwork, and other featured content belong entirely to their respective creators. This website does not claim ownership of any linked content unless otherwise stated. Its purpose is simply to help fans discover, revisit, and support the wonderful works shared by the community.
          </p>
          <p>
            Since many entries link to publicly shared posts, some may eventually become unavailable, deleted, or set to private. If you notice a broken link or missing content, please feel free to let us know so it can be updated.
          </p>
          <p style={{ marginBottom: 0 }}>
            If any creator would like their work removed from Haneulz Corner, they are always welcome to contact us, and their request will be handled respectfully.
          </p>
        </div>

        {/* Footer Note */}
        <p style={{
          textAlign: 'center',
          marginTop: '25px',
          fontSize: '0.9rem',
          color: '#9E9E9E'
        }}>
          Thank you for being part of our little corner. ☁️
        </p>
      </div>
    </div>
  );
}
