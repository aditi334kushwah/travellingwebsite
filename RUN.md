# How to Run the Project

## Prerequisites

Make sure you have these installed:
- Node.js (v18+)
- Python (v3.11+)
- uv → `pip install uv`

---

## Frontend (Next.js)

```bash
# Step 1 — Go to frontend folder
cd frontend

# Step 2 — Install dependencies (first time only)
npm install

# Step 3 — Start dev server
npm run dev
```

Frontend runs at → http://localhost:3000

---

## Backend (Django)

```bash
# Step 1 — Go to backend folder
cd backend

# Step 2 — Create virtual environment (first time only)
uv venv

# Step 3 — Install dependencies (first time only)
uv add django djangorestframework django-cors-headers python-dotenv

# Step 4 — Run migrations (first time only)
uv run python manage.py migrate

# Step 5 — Create superuser (optional)
uv run python manage.py createsuperuser

# Step 6 — Start dev server
uv run python manage.py runserver
```

Backend runs at → http://localhost:8000

Admin panel at → http://localhost:8000/admin

---

## Run Both Together

Open two terminals:

**Terminal 1 — Frontend**
```bash
cd E:\react_project\travelling_web\frontend
npm run dev
```

**Terminal 2 — Backend**
```bash
cd E:\react_project\travelling_web\backend
uv run python manage.py runserver
```

---

## Environment Variables (backend/.env)

```env
SECRET_KEY=django-insecure-change-me-in-production
DEBUG=True
ALLOWED_HOSTS=localhost,127.0.0.1
```

> Never commit `.env` to git. It is already in `.gitignore`.

---

## Useful Commands

| Task                        | Command                                      |
|-----------------------------|----------------------------------------------|
| Frontend dev server         | `npm run dev`                                |
| Frontend production build   | `npm run build`                              |
| Backend dev server          | `uv run python manage.py runserver`          |
| Make migrations             | `uv run python manage.py makemigrations`     |
| Apply migrations            | `uv run python manage.py migrate`            |
| Create superuser            | `uv run python manage.py createsuperuser`    |
| Add new package (backend)   | `uv add <package-name>`                      |
| Add new package (frontend)  | `npm install <package-name>`                 |
