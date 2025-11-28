# Phase 0 — Intro + Repo Setup (Cleaned & Polished Version)

## Project Overview

Ever open an app and immediately wonder what the developer was thinking? Yeah, me too. That’s one of the big reasons this project exists.

I genuinely enjoy Bluesky. Sure, it has the same echo-chamber energy that X (it will always be Twitter to me) has on the opposite end of the spectrum — and that’s as political as this article gets, promise. But the *official* app has some rough edges. I realized this the moment I opened it on my tablet and saw… this:

> *[Screenshot of the app stuck in portrait mode]*

I mean, I can read sideways, but I’d prefer not to. It turns out this is more of a hardware quirk than a software one — but still, there’s no reason an app can’t detect orientation or at least offer an override.

So I dug around a bit.  
Turns out, I’m not the only one running into oddities with the Bluesky app.

My daughter calls me a tinkerer — I like fixing broken things and improving clunky ones. And as a firm believer that “knowledge confers responsibility,” I decided to see whether I could build a better version myself. Without access to the official codebase, this means constructing the whole thing from scratch.

Along the way, I’ll be digging deeper into technologies I’ve only skimmed before and doing it with minimal hardware. Why? Because sometimes the struggle matters more than the destination. And if I can show someone how to build meaningful things on a tight budget, or spark a discussion about development process along the way, that’s a win.

## Phase Overview

Normally, starting a project like this would involve a bunch of planning, then firing up VS Code on my aging Windows laptop, and settling in. But life is moving at a blistering pace right now, and my schedule isn’t playing nice. I can’t depend on having long stretches at a desk.

I need something I can pick up and work on whenever I have a few minutes.  
So, with about $350 to spare, I pieced together this setup:

> *[Screenshot of new dev system]*

It includes:

- A Lenovo Idea Tab 11" (8GB RAM, 128GB storage, Android OS)
- A Logitech K480 wireless multi-device keyboard
- A universal case/stand

Not my first choice — a cheaper refurbished Acer tablet was tempting, but it shipped from Hong Kong and I wanted to get started before next winter. I mention this because $350 is still a chunk of money, and part of doing this project publicly is showing that you don’t need a $2,000 setup to build something real.

As developers, we sometimes get dependent on our tools and freeze the moment things aren’t perfect. I’ve mentored enough new devs to see that pattern repeat. You don’t need the “perfect setup.” You need a working one — and the willingness to try.

## Problem or Motivation

The spark for this project came when I installed the Bluesky app on a secondary tablet I use for drawing and handwritten notes. It’s not a powerhouse device (if you haven’t guessed yet, I’m a pretty cheap bastard), but it works. Unfortunately, the Bluesky app refused to rotate — every other app gladly flipped to landscape, but not this one.

After some digging, I discovered the tablet was partly to blame.  
But here’s the thing:

**Software can compensate for hardware limitations.**  
And when I read through user reviews, it became clear others were hitting different issues too.

So at some point I stopped grumbling and decided to put my coding skills where my complaints were. Can I build an app that works as well as — or better than — the official one?  
We’re about to find out.

## Goals for This Phase

**What I want to accomplish in Part 1:**

1. Choose what I’m going to use to build this  
2. Set up a development environment  
3. Lock in the tech stack  
4. Build the GitHub repo skeleton  

**By the end of this article, I should have:**

1. A defined development setup (hardware I’ll use moving forward)  
2. Essential software & tools installed  
3. A GitHub repo configured and connected to my environment  
4. A starter folder structure for the application  
5. A clear plan from skeleton → full product  

## Technical Choices

So what are we building this would-be masterpiece with?

**Hardware:**  
- Lenovo Idea Tab 11"  
- Logitech K480 keyboard  
- Universal case  

And that’s it. If nothing else, this proves the barrier to starting a real project has never been lower. A tablet, a keyboard, and an internet connection are enough.

**Software & Stack:**

- React + TypeScript for the UI  
- Bluesky / AT Protocol API for data  
- GitHub Codespaces for development — straight from the tablet  

Why React + TypeScript?  
Because I need the practice, and I need a solid example of my frontend work in my portfolio.

Why the AT Protocol?  
If we’re building a Bluesky app, we might as well speak its language.

Why Codespaces?  
Running a full IDE on Android is possible, but let’s not torture the tablet. Codespaces gives me a consistent, cloud-based dev environment that works whether I’m home, at work, or sitting in a parking lot waiting for life to calm down.

## Implementation Details

I could have recorded a video showing each setup step, but honestly? No one needs to watch me poke at a tablet for 15 minutes. Everything is now configured, and the current folder structure matches what’s committed to the repo.

This structure will evolve as the project grows, and I’ll show updates in future articles so readers can track how and why the layout changes.

```
bsky-client/
├─ app/
│  ├─ src/
│
├─ docs/
│  ├─ roadmap.md
│  ├─ dev-notes.md
│  ├─ api-notes.md
│  ├─ articles/
│  │  ├─ 01-intro.md
│  │  └─ images/
│
├─ .github/
│  └─ workflows/
│
├─ .editorconfig
├─ .gitignore
└─ README.md
```

## Ready for Article 2

And that wraps Phase 0.  
Hardware chosen.  
Stack chosen.  
Repo created.  
Environment ready.

Now comes the fun part:  
**Actually building the thing.**
