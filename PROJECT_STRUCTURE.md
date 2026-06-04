# Project Structure

```
E:\react_project\travelling_web\
│
├── frontend/                          ← Next.js 15 (React)
│   ├── public/
│   │   ├── images/                    ← All static images
│   │   └── logo.png
│   │
│   ├── src/
│   │   ├── app/                       ← Next.js App Router pages
│   │   │   ├── about/
│   │   │   │   └── page.tsx
│   │   │   ├── booking/
│   │   │   │   └── page.tsx
│   │   │   ├── contact/
│   │   │   │   └── page.tsx
│   │   │   ├── experiences/
│   │   │   │   └── page.tsx
│   │   │   ├── packages/
│   │   │   │   ├── [id]/
│   │   │   │   │   └── page.tsx       ← Dynamic package detail page
│   │   │   │   └── page.tsx
│   │   │   ├── globals.css
│   │   │   ├── layout.tsx             ← Root layout (Navbar + Footer)
│   │   │   └── page.tsx               ← Home page
│   │   │
│   │   ├── components/
│   │   │   ├── experiences/
│   │   │   │   ├── ExperienceCategories.tsx
│   │   │   │   ├── FeaturedExperiences.tsx
│   │   │   │   └── WhatYouGet.tsx
│   │   │   ├── home/
│   │   │   │   ├── BookTrip.tsx
│   │   │   │   ├── ChooseTripNova.tsx
│   │   │   │   ├── DestinationCard.tsx
│   │   │   │   ├── HeroSection.tsx
│   │   │   │   ├── LastTestimonial.tsx
│   │   │   │   ├── OneCard.tsx
│   │   │   │   ├── PopularDestination.tsx
│   │   │   │   └── TestimonialCard.tsx
│   │   │   ├── layout/
│   │   │   │   ├── Navbar.tsx         ← Responsive Navbar
│   │   │   │   └── Footer.tsx
│   │   │   ├── ui/
│   │   │   │   ├── Form.tsx           ← Contact form
│   │   │   │   ├── layout-grid.tsx    ← Experience grid
│   │   │   │   └── photo_tooltip.tsx
│   │   │   ├── LayoutGridSection.tsx
│   │   │   └── toolfit.tsx
│   │   │
│   │   ├── data/
│   │   │   └── packages.ts            ← Static packages data
│   │   │
│   │   └── lib/
│   │       └── utils.ts               ← Utility functions (cn)
│   │
│   ├── .gitignore
│   ├── eslint.config.mjs
│   ├── next-env.d.ts
│   ├── next.config.ts
│   ├── package.json
│   ├── postcss.config.mjs
│   └── tsconfig.json
│
└── backend/                           ← Django 6 + DRF
    ├── config/                        ← Django project config
    │   ├── __init__.py
    │   ├── asgi.py
    │   ├── settings.py                ← Main settings (dotenv)
    │   ├── urls.py                    ← Root URL config
    │   └── wsgi.py
    │
    ├── travel/                        ← Main Django app
    │   ├── migrations/
    │   ├── __init__.py
    │   ├── admin.py
    │   ├── apps.py
    │   ├── models.py
    │   ├── tests.py
    │   └── views.py
    │
    ├── .venv/                         ← uv managed virtual environment
    ├── .env                           ← Environment variables (SECRET_KEY etc.)
    ├── .gitignore
    ├── .python-version
    ├── manage.py
    ├── pyproject.toml                 ← uv dependencies
    └── uv.lock
```

## Tech Stack

| Layer     | Technology                        |
|-----------|-----------------------------------|
| Frontend  | Next.js 15, React, TypeScript     |
| Styling   | Tailwind CSS                      |
| Animation | Framer Motion                     |
| Icons     | Lucide React                      |
| Backend   | Django 6, Django REST Framework   |
| Database  | SQLite (dev)                      |
| Env Mgmt  | python-dotenv                     |
| Pkg Mgmt  | uv (backend), npm (frontend)      |
