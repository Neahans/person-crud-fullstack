<div align="center">

# 👩🏻‍💻 Person CRUD Full-Stack App

<img src="https://readme-typing-svg.demolab.com?font=Poppins&weight=600&size=30&pause=900&color=6C63FF&center=true&vCenter=true&width=850&lines=Welcome+to+my+Full-Stack+CRUD+Project+%F0%9F%8C%B8;Django+REST+Framework+%2B+React+%E2%9A%9B%EF%B8%8F;Create+%E2%80%A2+Read+%E2%80%A2+Update+%E2%80%A2+Delete+%F0%9F%9A%80;Image+Upload+%7C+REST+API+%7C+Axios" alt="Typing Animation" />

<br>

<img src="https://media.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif" width="380" alt="Girl coding animation">

<br><br>

<img src="https://img.shields.io/badge/React-Frontend-61DAFB?style=for-the-badge&logo=react&logoColor=black">
<img src="https://img.shields.io/badge/Django-Backend-092E20?style=for-the-badge&logo=django&logoColor=white">
<img src="https://img.shields.io/badge/DRF-API-A30000?style=for-the-badge">
<img src="https://img.shields.io/badge/Axios-HTTP-5A29E4?style=for-the-badge&logo=axios&logoColor=white">
<img src="https://img.shields.io/badge/Bootstrap-UI-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white">

<br><br>

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:6C63FF,50:A78BFA,100:F9A8D4&height=170&section=header&text=PERSON%20MANAGEMENT&fontSize=38&fontColor=ffffff&animation=fadeIn&fontAlignY=55" width="100%">

</div>

---

## 🌸 About The Project

**Person CRUD Full-Stack App** is a simple full-stack web application that allows users to create, view, edit, and delete person records.

Each person contains:

```text
👤 Name
🎂 Age
📍 Place
🖼️ Image
```

The application uses **Django REST Framework as the backend** and **React as the frontend**, with Axios handling communication between them.

---

# ✨ Features

### 📝 Create

Add a new person with:

* Name
* Age
* Place
* Image upload

### 👀 Read

View all stored person records in a clean card-based interface.

### ✏️ Update

Edit an existing person's:

```text
Name
Age
Place
Image
```

### 🗑️ Delete

Remove person records directly from the React interface.

### 🖼️ Image Upload

Images are uploaded from React using `FormData` and stored through Django's media system.

---

# 🧰 Tech Stack

<div align="center">

| Technology               | Purpose           |
| ------------------------ | ----------------- |
| ⚛️ React                 | Frontend          |
| 🐍 Django                | Backend           |
| 🔗 Django REST Framework | REST API          |
| 📡 Axios                 | API communication |
| 🎨 Bootstrap             | UI styling        |
| 🎯 Bootstrap Icons       | Interface icons   |
| 🗄️ SQLite               | Database          |

</div>

---

# 🔄 Application Flow

<div align="center">

```text
                 👩🏻‍💻 React Frontend
                         │
                         ▼
                    📡 Axios
                         │
                         ▼
            🔗 Django REST Framework
                         │
                         ▼
                  🐍 Django Backend
                         │
                         ▼
                    🗄️ Database
                         │
                         ▼
                    🖼️ Media
```

</div>

---

# 📸 Screenshots

<div align="center">

<img src="https://readme-typing-svg.demolab.com?font=Poppins&weight=500&size=23&pause=900&color=6C63FF&center=true&vCenter=true&width=650&lines=%F0%9F%93%B8+Project+Screenshots;%E2%9C%A8+Simple+%26+Clean+UI;%F0%9F%8C%B8+CRUD+Made+Easy" alt="Screenshot Animation">

</div>

---

## 🔐 Login / Home

<div align="center">

<img src="src/screenshots/login.png" width="90%" alt="Login Screenshot">

</div>

---

## 👥 Person List

<div align="center">

<img src="src/screenshots/person-list.png" width="90%" alt="Person List Screenshot">

</div>

---

## ➕ Add Person

<div align="center">

<img src="src/screenshots/add-person.png" width="90%" alt="Add Person Screenshot">

</div>

---

## ✏️ Edit Person

<div align="center">

<img src="src/screenshots/edit-person.png" width="90%" alt="Edit Person Screenshot">

</div>

---

## 🗑️ Delete Person

<div align="center">

<img src="src/screenshots/delete-person.png" width="90%" alt="Delete Person Screenshot">

</div>

---

# 📂 Project Structure

```text
person-crud-fullstack/
│
├── backend/
│
│   └── person/
│       ├── manage.py
│       │
│       ├── person/
│       │   ├── settings.py
│       │   ├── urls.py
│       │   ├── asgi.py
│       │   └── wsgi.py
│       │
│       └── persona/
│           ├── models.py
│           ├── serializers.py
│           ├── views.py
│           ├── admin.py
│           └── migrations/
│
├── frontend/
│
│   └── person-frontend/
│       ├── public/
│       │
│       └── src/
│           ├── components/
│           │   ├── PersonCard.js
│           │   ├── PersonCard.css
│           │   ├── PersonForm.js
│           │   └── PersonForm.css
│           │
│           ├── services/
│           │   └── api.js
│           │
│           ├── screenshots/
│           │
│           ├── App.js
│           ├── App.css
│           └── index.js
│
└── README.md
```

---

# 🔗 REST API Endpoints

```text
GET      /api/persona/
POST     /api/persona/
GET      /api/persona/<id>/
PATCH    /api/persona/<id>/
DELETE   /api/persona/<id>/
```

These endpoints provide the CRUD operations used by the React frontend.

---

# 🖥️ Frontend

The React frontend provides:

```text
🏠 Person Management
   │
   ├── ➕ Add Person
   │
   ├── 👀 View Persons
   │
   ├── ✏️ Edit Person
   │
   └── 🗑️ Delete Person
```

Axios connects the frontend to the Django REST API.

---

# 🐍 Backend

The backend is built with Django and Django REST Framework.

### Person Model

```python
class Person(models.Model):
    name = models.CharField(max_length=100)
    age = models.IntegerField()
    place = models.CharField(max_length=100)
    image = models.ImageField(upload_to="persons/")
```

---

# 🚀 Getting Started

## Backend

Navigate to the Django project:

```bash
cd person
```

Activate your virtual environment:

```bash
venv\Scripts\activate
```

Install dependencies:

```bash
pip install django djangorestframework django-cors-headers pillow
```

Run migrations:

```bash
python manage.py makemigrations
python manage.py migrate
```

Start Django:

```bash
python manage.py runserver
```

Backend:

```text
http://127.0.0.1:8000
```

API:

```text
http://127.0.0.1:8000/api/persona/
```

---

## Frontend

Open another terminal:

```bash
cd person-frontend
```

Install dependencies:

```bash
npm install
```

Start React:

```bash
npm start
```

Frontend:

```text
http://localhost:3000
```

---

# 🧪 CRUD Demo

```text
➕ CREATE
   ↓
Enter person details
   ↓
Upload image
   ↓
POST → Django API
   ↓
Person created


👀 READ
   ↓
GET → Django API
   ↓
Display person cards


✏️ UPDATE
   ↓
Edit person
   ↓
PATCH → Django API
   ↓
Updated information displayed


🗑️ DELETE
   ↓
Delete person
   ↓
DELETE → Django API
   ↓
Person removed
```

---

# 🌱 What I Learned

Through this project, I practiced:

```text
⚛️ React Components
🔄 React State Management
📡 Axios API Calls
🧩 FormData
🖼️ Image Uploads
🔗 REST APIs
🐍 Django REST Framework
🗄️ CRUD Operations
🌐 Frontend–Backend Integration
```

---

# 🎯 Future Improvements

```text
🔐 User Authentication
👥 Multiple User Roles
🔎 Search & Filtering
📄 Pagination
✅ Better Form Validation
☁️ Cloud Image Storage
🚀 Deployment
```

---

# 👩🏻‍💻 Author

<div align="center">

## Neaha N S

💻 Computer Science Graduate
🐍 Python & Django Developer
⚛️ React Developer / Learner
🔐 Cybersecurity Enthusiast

<br>

<a href="https://github.com/Neahans">

<img src="https://img.shields.io/badge/GitHub-Neahans-181717?style=for-the-badge&logo=github">

</a>

</div>

---

<div align="center">

<img src="https://readme-typing-svg.demolab.com?font=Poppins&weight=600&size=21&pause=1100&color=6C63FF&center=true&vCenter=true&width=700&lines=Keep+Learning+%F0%9F%8C%B8;Keep+Building+%F0%9F%9A%80;Keep+Growing+%E2%9C%A8;One+Project+At+A+Time+%F0%9F%92%9C" alt="Footer Animation">

<br><br>

⭐ **Thanks for visiting!**

<br>

Made with 💜 using **Django + React**

</div>

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:6C63FF,50:A78BFA,100:F9A8D4&height=120&section=footer&animation=fadeIn" width="100%">


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
