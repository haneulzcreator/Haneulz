# HANEULZ — Fan Site PRD

## Original Problem Statement
A fan website focused on HANEULZ, the fandom of the HANEZ ship (JL Gaspar × Park Han of AHOF). Include the "AU's" of them and a corner for AHOF variety shows they appeared in. Theme: pastel pink and blue.

## Context
- AHOF: 9-member global K-pop group (SBS Universe League, debuted July 2025).
- HANEZ = ship of JL Gaspar (#1 ranked) & Park Han (Team Groove MVP). HANEULZ = the ship's fandom. FOHA = AHOF fandom.

## Architecture
- Frontend: React 19 + Tailwind, framer-motion (kinetic hero, scroll reveals), lenis smooth scroll, react-fast-marquee. Fonts: Cormorant Garamond / Outfit / Instrument Serif.
- Backend: FastAPI + MongoDB (motor). JWT bearer auth (localStorage) for single admin.
- Design: pastel pink/blue, glassmorphism, grain overlay, editorial layout per /app/design_guidelines.json.

## User Personas
- Fan (visitor): browses AUs, reads full stories, likes, comments, submits AUs.
- Admin: moderates fan-submitted AUs and comments.

## Core Requirements (static)
- AU Library (stories + headcanons) with cards -> full readable story pages.
- Submit-an-AU form (moderated).
- Variety Corner (show name, episode, photo, YouTube clip).
- Comments on AUs (moderated).
- Admin dashboard: approve/reject/delete AUs & comments.

## Implemented (2026-07-19)
- Full public site: kinetic hero, marquee, numbered manifesto, feature strip, latest AUs.
- AU Library with filters; AU detail with full story, likes, comments.
- Submit form; Variety Corner; Admin login + moderation dashboard.
- Backend: auth, AUs, comments, likes, variety, admin moderation. Seeded admin + 4 AUs + 3 shows.
- Tested: 17/17 backend pass, all frontend flows pass.

## Admin
- admin@haneulz.com / haneulz2025 (see /app/memory/test_credentials.md)

## Backlog / Next
- P1: Real JL & Han photos + real variety clip URLs (user to upload).
- P2: Rate limiting/captcha on public submissions; image upload for AU covers (object storage).
- P2: Admin ability to add/delete variety shows from the UI (API exists, no UI yet).
- P2: Search & tag filtering in AU Library.
