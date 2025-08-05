# Basti ki Pathshala - Application Management System

This is a web-based application management system for **Basti ki Pathshala**, designed to streamline the handling of volunteer applications, admin approvals, resume access, and communication via email.

# Screenshots

## Home Page

<img width="1919" height="1017" alt="Screenshot 2025-08-05 184143" src="https://github.com/user-attachments/assets/98c84082-8cb1-43ed-94d7-c1bbd5df8e24" />

## Appy form

<img width="1910" height="1012" alt="Screenshot 2025-08-05 184209" src="https://github.com/user-attachments/assets/3feb3060-edad-4afd-91d5-bedfdff987a8" />

## About us Page

<img width="1919" height="1012" alt="Screenshot 2025-08-05 184226" src="https://github.com/user-attachments/assets/6335a79e-9127-4f2d-af2c-77bd97caaf65" />

## Admin Login Page

<img width="1919" height="1000" alt="Screenshot 2025-08-05 184244" src="https://github.com/user-attachments/assets/5fb81b35-a193-4f44-80ef-47c648be0446" />

## Pending Request Page

<img width="1919" height="1017" alt="Screenshot 2025-08-05 184356" src="https://github.com/user-attachments/assets/b2d519b4-788b-42ee-975c-3cd13fd95579" />

## Approved Request Page

<img width="1918" height="1012" alt="Screenshot 2025-08-05 184411" src="https://github.com/user-attachments/assets/f138eada-7830-4828-a956-ae136581e120" />

## In-touch Request Page

<img width="1919" height="1014" alt="Screenshot 2025-08-05 184425" src="https://github.com/user-attachments/assets/037aadd6-e060-41cb-95d9-17c7ea6da211" />





## 🌐 Live Features

- Volunteer application form submission
- Admin dashboard for reviewing and managing applications
- Resume viewing and email communication
- Skill tracking and tagging
- Clean UI with Material UI components

## 🛠️ Tech Stack

### Frontend
- React.js
- React Router DOM
- Axios
- Material UI (MUI)

### Backend (expected or for future scope)
- Node.js / Express.js
- MongoDB (as evident from usage like resume URLs and skills)

> Note: The current codebase appears to be frontend-only and communicates with an API via environment variable `REACT_APP_URL`.

## 📁 Folder Structure

```
├── public/
├── src/
│   ├── component/
│   │   └── AdminNavBar.js
│   ├── pages/
│   │   └── In_touchRequests.js
│   ├── App.js
│   └── index.js
├── .env (set REACT_APP_URL)
├── package.json
```

## 🔧 Setup Instructions

1. **Clone the repository**

```bash
git clone https://github.com/ROCKYSOUP/Basti-ki-Pathshala-Application-management.git
cd Basti-ki-Pathshala-Application-management
```

2. **Install dependencies**

```bash
npm install
```

3. **Set environment variables**

Create a `.env` file and add your backend URL:

```
REACT_APP_URL=https://your-api-endpoint.com
```

4. **Run the project**

```bash
npm start
```

## 📬 Email Integration

The application allows direct email communication via the `mailto:` protocol, so no backend email service is needed.

## 📄 License

This project is for educational and non-commercial purposes under the community initiative **Basti ki Pathshala**.

---

Developed by Dev Agarwal
