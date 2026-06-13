# Travel Booking Website

A full-stack travel booking platform built with **Next.js, Django REST Framework, MySQL, JWT Authentication, and Tailwind CSS**.

The platform allows users to explore travel destinations, view travel packages, make bookings, and manage their travel experience through a secure authentication system.

 Features

### Authentication

* User Registration
* User Login
* User Logout
* JWT Authentication
* Protected Routes
* Forgot Password (Planned)

### Travel Packages

* View All Packages
* Package Details Page
* Secure Package Access
* Dynamic Package Data from API

### Booking System

* Create Booking
* Store Booking Information
* User-specific Booking Records

### Responsive UI

* Mobile Friendly Design
* Modern Navbar
* Hero Section
* Travel Package Cards
* Tailwind CSS Styling

Tech Stack

### Frontend

* Next.js
* React.js
* TypeScript
* Tailwind CSS
* Axios

### Backend

* Django
* Django REST Framework
* JWT Authentication

### Database

* MySQL

### Version Control

* Git
* GitHub

 Project Structure

traveling_web/

├── frontend/

│ ├── src/

│ ├── app/

│ ├── components/

│ └── public/

│

├── backend/

│ ├── accounts/

│ ├── packages/

│ ├── booking/

│ ├── contact/

│ └── config/

│

└── README.md

 Installation

### Clone Repository

git clone https://github.com/your-username/traveling_web.git

cd traveling_web

---

### Backend Setup

cd backend

python -m venv .venv

source .venv/bin/activate

pip install -r requirements.txt

python manage.py migrate

python manage.py runserver

---

### Frontend Setup

cd frontend

npm install

npm run dev

 Authentication Flow

1. User registers an account.
2. User logs in using credentials.
3. Backend generates JWT access token.
4. Token is stored in browser localStorage.
5. Protected APIs verify the token before providing data.
6. Logout removes token from browser storage.

API Endpoints

### Authentication

POST /api/accounts/register/

POST /api/accounts/login/

POST /api/accounts/logout/

### Packages

GET /api/packages/

GET /api/packages/<id>/

### Booking

POST /api/bookings/

Future Improvements

* Google Authentication
* Email Verification
* Payment Gateway Integration
* Booking Cancellation
* User Dashboard
* Admin Dashboard
* Reviews and Ratings
* Wishlist System
* AI Travel Recommendation System

 Screenshots



Example:

* Home Page
* Login Page
* Register Page
* Package Page
* Booking Page

 Author

Aditi Kushwah

MCA INTEGRATED final year Student

Frontend: Next.js, React, Tailwind CSS

Backend:Django,  Django REST Framework

Database: MySQL , postgres 

