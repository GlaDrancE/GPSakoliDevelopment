# Government Polytechnic Sakoli - Official Website

<div align="center">
  
  ![Government Polytechnic Sakoli](https://res.cloudinary.com/dduj1ln0v/image/upload/v1765611173/gpsakoli.ac.in__zfyzh5.png)
  <img src="https://res.cloudinary.com/dduj1ln0v/image/upload/v1765611694/318f9e8a-8fdc-4e96-97d9-f3b1a7a4d128.png" />
  ![React](https://img.shields.io/badge/React-18.x-61DAFB?logo=react)
  ![PHP](https://img.shields.io/badge/PHP-Core-777BB4?logo=php)
  ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.x-38B2AC?logo=tailwind-css)
  ![License](https://img.shields.io/badge/License-MIT-green)

  **A modern, responsive, and feature-rich institutional website with comprehensive admin dashboard**

  [Live Website](https://gpsakoli.ac.in/) • [Report Bug](https://github.com/GlaDrancE/GPSakoliDevelopment/issues) • [Request Feature](https://github.com/GlaDrancE/GPSakoliDevelopment/issues)

</div>

---

## Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Screenshots](#-screenshots)
- [Architecture](#-architecture)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Admin Dashboard](#-admin-dashboard)
- [API Documentation](#-api-documentation)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

---

## Overview

The **Government Polytechnic Sakoli Official Website** is a comprehensive web platform designed to serve students, faculty, and stakeholders of Government Polytechnic Sakoli. This project combines a modern React-based frontend with a robust PHP backend, providing an intuitive user experience alongside powerful administrative capabilities.

The platform manages extensive institutional content including academic information, faculty details, student resources, downloadable documents (PDFs), image galleries, announcements, and much more. The integrated admin dashboard enables authorized personnel to efficiently manage all website content without requiring technical expertise.

### About Government Polytechnic Sakoli

Government Polytechnic Sakoli is a premier technical education institution committed to providing quality education and fostering innovation. This website serves as the primary digital interface for the institution, facilitating communication and information dissemination.

---

## Features

### 🌐 Public Website
- **Responsive Design** - Seamless experience across desktop, tablet, and mobile devices
- **Dynamic Content Management** - Real-time updates from admin dashboard
- **Multi-page Architecture** - Comprehensive information architecture with multiple sections
- **Interactive Carousels** - Engaging image and content sliders using Swiper.js
- **Document Repository** - Organized access to PDFs, circulars, and academic resources
- **Image Galleries** - High-quality photo galleries of campus events and facilities
- **News & Announcements** - Latest updates and important notices
- **Faculty Directory** - Detailed faculty profiles and contact information
- **Course Information** - Complete details about programs and curricula
- **Admission Portal** - Information about admission procedures and requirements
- **Contact Forms** - Easy communication channels for inquiries

### Admin Dashboard
- **Secure Authentication** - Role-based access control system
- **Content Management System** - Easy-to-use interface for updating website content
- **Media Management** - Upload, organize, and manage images and PDFs
- **User Management** - Control admin access and permissions
- **Analytics Dashboard** - Track website performance and visitor statistics
- **Announcement Management** - Create, edit, and schedule announcements
- **Faculty Management** - Add/edit faculty profiles and information
- **Course Management** - Update course details and academic information
- **Gallery Management** - Upload and organize photo galleries
- **Form Submissions** - View and manage contact form entries

---

## Tech Stack

### Frontend
- **React.js** - Modern JavaScript library for building user interfaces
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **Swiper.js** - Modern mobile touch slider for carousels
- **React Router** - Declarative routing for React applications
- **Axios** - Promise-based HTTP client for API requests
- **React Icons** - Popular icon library
- **Framer Motion** - Production-ready motion library for React
- **React Helmet** - Document head manager for SEO optimization

### Backend
- **Core PHP** - Server-side scripting for robust backend logic
- **MySQL** - Relational database management system
- **RESTful API** - Clean API architecture for frontend-backend communication
- **JWT Authentication** - Secure token-based authentication
- **PDO** - PHP Data Objects for secure database operations

### Development Tools
- **Vite** - Next-generation frontend build tool
- **Git** - Version control system
- **npm** - Package manager
- **Postman** - API development and testing

---

## Screenshots

### Homepage
![Homepage Screenshot](https://res.cloudinary.com/dduj1ln0v/image/upload/v1765611173/gpsakoli.ac.in__zfyzh5.png)
*Modern and welcoming homepage showcasing institution highlights*

### About Page
![About Page Screenshot]((https://res.cloudinary.com/dduj1ln0v/image/upload/v1765611931/gpsakoli.ac.in_about-institute_about-institute_ejstzc.png))
*Comprehensive information about the institution*

### Course Description
![Courses Screenshot](https://res.cloudinary.com/dduj1ln0v/image/upload/v1765611944/gpsakoli.ac.in_about-institute_about-institute_1_qos5by.png)
*Detailed course information*

### Faculty Directory
![Faculty Screenshot](https://res.cloudinary.com/dduj1ln0v/image/upload/v1765612062/gpsakoli.ac.in_about-institute_about-institute_2_yvq2x0.png)
*Professional faculty profiles with contact details*

### Admin Dashboard
![Admin Dashboard Screenshot]((https://res.cloudinary.com/dduj1ln0v/image/upload/v1765611694/318f9e8a-8fdc-4e96-97d9-f3b1a7a4d128.png))
*Intuitive admin interface for content management*
---

## 🏗 Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                        Client Layer                         │
│  ┌──────────────────────────────────────────────────────┐   │
│  │              React SPA (Frontend)                    │  │
│  │  - Components  - Routes  - State Management          │  │
│  └──────────────────────────────────────────────────────┘  │
└────────────────────────┬────────────────────────────────────┘
                         │ REST API (JSON)
                         ↓
┌─────────────────────────────────────────────────────────────┐
│                     Application Layer                        │
│  ┌──────────────────────────────────────────────────────┐  │
│  │              PHP Backend (Core PHP)                   │  │
│  │  - Controllers  - Business Logic  - Authentication   │  │
│  └──────────────────────────────────────────────────────┘  │
└────────────────────────┬────────────────────────────────────┘
                         │ PDO/SQL Queries
                         ↓
┌─────────────────────────────────────────────────────────────┐
│                       Data Layer                             │
│  ┌──────────────────────────────────────────────────────┐  │
│  │                  MySQL Database                       │  │
│  │  - Users  - Content  - Media  - Logs                 │  │
│  └──────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your system:

- **Node.js** (v16.x or higher)
- **npm** or **yarn**
- **PHP** (v7.4 or higher)
- **MySQL** (v5.7 or higher)
- **Apache/Nginx** web server
- **Composer** (for PHP dependencies)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/GlaDrancE/GPSakoliDevelopment.git
   cd GPSakoliDevelopment
   ```

2. **Frontend Setup**
   ```bash
   # Navigate to frontend directory
   cd frontend
   
   # Install dependencies
   npm install
   
   # Create environment file
   cp .env.example .env
   
   # Update .env with your API endpoint
   # VITE_API_URL=http://localhost/gpsakoli/api
   
   # Start development server
   npm run dev
   ```

3. **Backend Setup**
   ```bash
   # Navigate to backend directory
   cd backend
   
   # Copy configuration file
   cp config.example.php config.php
   
   # Update config.php with your database credentials
   # DB_HOST, DB_NAME, DB_USER, DB_PASS
   
   # Import database
   mysql -u your_username -p your_database < database/schema.sql
   ```

4. **Web Server Configuration**
   
   For **Apache**, ensure `.htaccess` is configured:
   ```apache
   RewriteEngine On
   RewriteCond %{REQUEST_FILENAME} !-f
   RewriteCond %{REQUEST_FILENAME} !-d
   RewriteRule ^(.*)$ index.php/$1 [L]
   ```
   
   For **Nginx**, add to your server block:
   ```nginx
   location /api {
       try_files $uri $uri/ /index.php?$query_string;
   }
   ```

5. **Access the Application**
   - Frontend: `http://localhost:5173` (Vite dev server)
   - Backend API: `http://localhost/gpsakoli/api`
   - Admin Dashboard: `http://localhost:5173/admin`

### Default Admin Credentials
```
Username: admin
Password: admin123
```
**⚠️ Important:** Change these credentials immediately after first login!

---

## 📁 Project Structure

```
GPSakoliDevelopment/
├── frontend/                     # React frontend application
│   ├── public/                   # Static assets
│   ├── src/
│   │   ├── assets/               # Images, fonts, etc.
│   │   ├── components/
│   │   │   ├── common/           # Shared components
│   │   │   ├── layout/           # Layout components
│   │   │   └── pages/            # Page-specific components
│   │   ├── pages/                # Routes
│   │   ├── services/             # API service functions
│   │   ├── utils/                # Utilities
│   │   ├── styles/               # CSS/tailwind/global styles
│   │   ├── App.jsx               # Main app component
│   │   └── main.jsx              # Entry point
│   ├── .env.example              # Template env file
│   ├── package.json              # Frontend dependencies
│   ├── vite.config.js            # Vite config
│   └── tailwind.config.js        # Tailwind config
│
├── backend/                      # PHP backend API
│   ├── api/                      # API endpoint groups
│   │   ├── auth/                 # Authentication endpoints
│   │   ├── content/              # Content management endpoints
│   │   ├── media/                # Media upload/management
│   │   └── public/               # Public API endpoints
│   │
│   ├── config/                   # Configuration files
│   │   ├── database.php          # DB connection
│   │   └── config.php            # General config
│   │
│   ├── includes/                 # Shared PHP includes
│   │   ├── functions.php         # Utility functions
│   │   └── auth.php              # Authentication helpers
│   │
│   ├── models/                   # Database model classes
│   │
│   ├── uploads/                  # Uploaded files
│   │   ├── images/               # Image uploads
│   │   └── documents/            # PDF/document uploads
│   │
│   └── database/                 # Database SQL files
│       ├── schema.sql            # Schema for DB
│       └── seeds.sql             # Sample data
│
├── docs/                         # Documentation
│   ├── API.md                    # API documentation
│   ├── DEPLOYMENT.md             # Deployment guide
│   └── CONTRIBUTING.md           # Contributing guidelines
│
├── .gitignore                    # Git ignore rules
├── LICENSE                       # MIT License
└── README.md                     # Project overview + this directory structure
```

---

## 🎛 Admin Dashboard

The admin dashboard provides comprehensive content management capabilities:

### Key Modules

1. **Dashboard Overview**
   - Website statistics and analytics
   - Recent activities and updates
   - Quick action buttons

2. **Content Management**
   - Page content editor with rich text support
   - SEO metadata management
   - Content scheduling and versioning

3. **Media Library**
   - Drag-and-drop file upload
   - Image optimization and resizing
   - PDF document management
   - Organized folder structure

4. **User Management**
   - Create and manage admin users
   - Role-based permissions
   - Activity logs and audit trails

5. **Announcements**
   - Create news and announcements
   - Schedule publication dates
   - Priority and category management

6. **Faculty Management**
   - Add/edit faculty profiles
   - Upload profile pictures
   - Manage qualifications and achievements

7. **Gallery Manager**
   - Create and organize photo albums
   - Batch upload support
   - Image captions and descriptions

8. **Settings**
   - Site configuration
   - Email settings
   - Backup and restore

### Access Levels
- **Super Admin** - Full system access
- **Admin** - Content management and media
- **Editor** - Content editing only

---

## 📚 API Documentation

### Base URL
```
Production: https://gpsakoli.ac.in/api
Development: http://localhost/gpsakoli/api
```
---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 📞 Contact

**Government Polytechnic Sakoli**
- Website: [gpsakoli.ac.in](https://gpsakoli.ac.in/)
- Email: principal@gpsakoli.ac.in

**Development Team**
- GitHub: [@GlaDrancE](https://github.com/GlaDrancE)
- Project Link: [https://github.com/GlaDrancE/GPSakoliDevelopment](https://github.com/GlaDrancE/GPSakoliDevelopment)
- Phone: +91 9049606217

---

## 🙏 Acknowledgments

- Government Polytechnic Sakoli administration and staff
- All contributors who have helped improve this project

---

<div align="center">

**⭐ If you find this project useful, please consider giving it a star!**

Made with ❤️ for Government Polytechnic Sakoli

</div>
