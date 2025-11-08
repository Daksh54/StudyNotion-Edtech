# 🎓 StudyNotion — MERN Stack Ed-Tech Platform

**StudyNotion** is a fully functional **Ed-Tech Platform** designed to enable users to **create, consume, and rate educational content**.  
Built using the **MERN stack (MongoDB, Express.js, React.js, Node.js)**, it provides a seamless and interactive learning experience for students while allowing instructors to showcase and monetize their expertise.

---

## 🧠 Overview

StudyNotion bridges the gap between learners and instructors by offering:
- A **responsive, intuitive interface** for students to explore and enroll in courses.
- A **powerful content management system** for instructors to upload and manage learning materials.
- A **secure backend** for authentication, payments, and analytics.

---

## 🏗️ System Architecture

The platform follows a **client–server architecture** with three main components:

### **Frontend**
- Built using **ReactJS** for dynamic, component-based UI.
- Uses **Redux** for global state management.
- Styled with **Tailwind CSS** for responsive design.
- Communicates with backend via **RESTful APIs**.

### **Backend**
- Developed using **Node.js** and **Express.js**.
- Implements **monolithic architecture** for better control and performance.
- Handles business logic, authentication, and media management.
- Integrates **Razorpay** for secure payment processing.

### **Database**
- Powered by **MongoDB (NoSQL)** for flexible and scalable data storage.
- Managed using **Mongoose** ODM.
- Stores users, courses, ratings, and media metadata.

---

## 🧩 Features

### 👩‍🎓 For Students
- Browse, purchase, and enroll in courses.  
- Access video content and materials.  
- Maintain a personalized **wishlist** and **cart**.  
- Rate and review completed courses.  
- Manage account details and learning progress.  

### 👨‍🏫 For Instructors
- Create, update, or delete courses.  
- Upload content with **Cloudinary integration** (videos, images, docs).  
- Track course analytics and engagement insights.  
- Manage pricing and feedback.  

### 🧑‍💼 For Admin (Future Scope)
- Oversee platform metrics and financials.  
- Manage instructors, students, and content.  
- Generate revenue and engagement reports.  

---

## 🔧 Backend Features

- **Authentication & Authorization** — via JWT & bcrypt.  
- **OTP verification** and **password recovery** for added security.  
- **Course CRUD operations** for instructors.  
- **Payment integration** using Razorpay.  
- **Cloud-based media storage** with Cloudinary.  
- **Markdown support** for course content formatting.  
- **RESTful API** endpoints for scalable frontend communication.

---

## 🧱 API Design

StudyNotion follows RESTful architecture with clean and consistent routes.

| Method | Endpoint | Description |
|--------|-----------|-------------|
| `POST` | `/api/auth/signup` | Create a new student/instructor account |
| `POST` | `/api/auth/login` | Log in with credentials |
| `POST` | `/api/auth/verify-otp` | Verify email with OTP |
| `POST` | `/api/auth/forgot-password` | Send password reset link |
| `GET` | `/api/courses` | Retrieve all courses |
| `GET` | `/api/courses/:id` | Fetch specific course details |
| `POST` | `/api/courses` | Create a new course |
| `PUT` | `/api/courses/:id` | Update existing course |
| `DELETE` | `/api/courses/:id` | Delete a course |
| `POST` | `/api/courses/:id/rate` | Add a rating to a course |

---

## 🗃️ Database Models

### **Student Schema**
- name  
- email  
- password (hashed)  
- enrolledCourses  

### **Instructor Schema**
- name  
- email  
- password  
- coursesCreated  

### **Course Schema**
- title  
- description  
- instructor  
- media (Cloudinary links)  
- rating  
- price  

---

## ☁️ Deployment

| Component | Service Used |
|------------|--------------|
| **Frontend** | Vercel |
| **Backend** | Render / Railway |
| **Database** | MongoDB Atlas |
| **Media Storage** | Cloudinary |

This setup ensures global accessibility, auto-scaling, and security across all services.

---

## 🧪 Testing

- **Unit Testing:** Jest  
- **Integration Testing:** Postman  
- **Frontend Testing:** Manual & Cypress-based component validation  

---

## 🚀 Future Enhancements

| Feature | Description | Priority |
|----------|--------------|----------|
| **Gamification** | Add badges, points & leaderboards | Medium |
| **Personalized Learning Paths** | Adaptive course recommendations | High |
| **Social Learning** | Peer discussion & collaboration features | Medium |
| **Mobile App** | Android/iOS app for on-the-go learning | High |
| **AI Course Recommendation** | ML-driven suggestions for users | High |
| **AR/VR Integration** | Immersive course experiences | Medium |

---

## 💻 Tech Stack

| Layer | Technologies |
|-------|---------------|
| **Frontend** | React, Redux, Tailwind CSS |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB, Mongoose |
| **Payments** | Razorpay |
| **Media** | Cloudinary |
| **Hosting** | Vercel, Render, MongoDB Atlas |
| **Testing** | Jest, Postman |

---

## 🧠 Learning Focus (Personal)

Currently enhancing my expertise in:
- **AI & ML integration** within full-stack systems  
- **Cloud Deployment** with AWS / GCP  
- **DevOps workflows** using Docker & Kubernetes  

---

## 👨‍💻 Author

**Daksh Sharma**  
Full Stack Web Developer | MERN | FastAPI | AI & Cloud Enthusiast  
📧 [dakshsharma5454871@gmail.com](mailto:dakshsharma5454871@gmail.com)  
🔗 [GitHub](https://github.com/Daksh54) | [LinkedIn](https://www.linkedin.com/in/daksh-sharma)

---

## 🪪 License

This project is licensed under the **MIT License**.  
See the [LICENSE](./LICENSE) file for more details.

---

### 🌟 “Study smart. Build smarter.”  
*An interactive and scalable learning platform powered by MERN.*

