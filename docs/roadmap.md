# Project Roadmap – Bluesky Client

This document tracks the high-level phases and milestones of the project.

## Phase 0 – Setup & Planning

- [ ] Create GitHub repository and base folder structure
- [ ] Add core documentation files (`roadmap.md`, `dev-notes.md`, `api-notes.md`)
- [ ] Set up development environment in GitHub Codespaces (on the tablet)
- [ ] Define initial goals and constraints (tablet-first, responsive, laptop-friendly)

## Phase 1 – Auth & Profile

- [ ] Initialize React + TypeScript app under `app/`
- [ ] Integrate Bluesky / AT Protocol client library
- [ ] Implement login using app password (dev-only)
- [ ] Display logged-in user profile (handle, display name, avatar)

## Phase 2 – Timeline UI

- [ ] Render home feed in a mobile-first layout
- [ ] Ensure layout supports portrait + landscape on tablet
- [ ] Make it usable on laptop/desktop screens

## Phase 3 – Posting & Replies

- [ ] Add composer for new posts
- [ ] Support replies to existing posts
- [ ] Handle errors and UI feedback gracefully

## Phase 4 – UX Fixes vs Official App

- [ ] Identify real user pain points in existing clients
- [ ] Design improvements targeting those issues (starting with rotation/orientation)
- [ ] Implement and document the changes

## Phase 5 – PWA & Deployment

- [ ] Add PWA manifest and service worker
- [ ] Deploy to a public host (e.g., Vercel)
- [ ] Verify installable experience on mobile

## Phase 6 – Wrap-Up & Lessons Learned

- [ ] Summarize architecture and major decisions
- [ ] Document what worked, what didn’t, and why
- [ ] Capture possible future directions