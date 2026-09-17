<div align="center">

# 🌸 Person CRUD Full-Stack Application

<img src="https://readme-typing-svg.demolab.com?font=Poppins&weight=600&size=30&pause=900&color=7C3AED&center=true&vCenter=true&width=850&lines=Welcome+to+my+CRUD+Project+%F0%9F%8C%B8;Django+%2B+React+%E2%9A%9B%EF%B8%8F;Create+%E2%80%A2+Read+%E2%80%A2+Update+%E2%80%A2+Delete+%F0%9F%9A%80;With+Image+Upload+%F0%9F%96%BC%EF%B8%8F" alt="Typing Animation"/>

<br>

<img src="https://media.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif" width="380" alt="Girl coding"/>

<br><br>

<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black"/>
<img src="https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white"/>
<img src="https://img.shields.io/badge/DRF-A30000?style=for-the-badge"/>
<img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white"/>
<img src="https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white"/>

<br><br>

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:7C3AED,50:A78BFA,100:F9A8D4&height=170&section=header&text=PERSON%20CRUD&fontSize=40&fontColor=ffffff&animation=fadeIn&fontAlignY=55" width="100%"/>

</div>

---

## 🌷 About The Project

This is a **full-stack Person Management application** built using **Django REST Framework and React**.

The application allows users to create, view, update, and delete person records while also supporting image uploads.

Each person record contains:

```text
👤 Name
🎂 Age
📍 Place
🖼️ Image
```

The React frontend communicates with the Django backend through REST APIs using Axios.

---

# ✨ Features

<div align="center">

| Feature                 | Status |
| ----------------------- | ------ |
| ➕ Create Person         | ✅      |
| 👀 View Persons         | ✅      |
| ✏️ Edit Person          | ✅      |
| 🗑️ Delete Person       | ✅      |
| 🖼️ Image Upload        | ✅      |
| 🔗 REST API Integration | ✅      |
| 📡 Axios Communication  | ✅      |
| 📱 Responsive UI        | ✅      |

</div>

---

# 🛠️ Technologies Used

<div align="center">

### Frontend

<img src="https://skillicons.dev/icons?i=react,js,html,css,bootstrap"/>

### Backend

<img src="https://skillicons.dev/icons?i=python,django"/>

### Tools

<img src="https://skillicons.dev/icons?i=git,github,vscode"/>

</div>

---

# 🔄 How It Works

```text
                 🌸 React Frontend
                        │
                        ▼
                    📡 Axios
                        │
                        ▼
              🔗 Django REST API
                        │
                        ▼
                🐍 Django Backend
                        │
                        ▼
                   🗄️ Database
                        │
                        ▼
                 🖼️ Media Files
```

---

# 📸 Project Screenshots

<div align="center">

<img src="https://readme-typing-svg.demolab.com?font=Poppins&weight=500&size=23&pause=900&color=7C3AED&center=true&vCenter=true&width=700&lines=Create+%E2%9C%A8;View+%F0%9F%91%80;Edit+%E2%9C%8F%EF%B8%8F;Update+%F0%9F%94%84;Delete+%F0%9F%97%91%EF%B8%8F" alt="CRUD Animation"/>

</div>

---

## ➕ Add Person

<p align="center">
  <img src="src/screenshots/add%20person.png" width="90%" alt="Add Person"/>
</p>

This screen allows the user to enter:

```text
👤 Name
🎂 Age
📍 Place
🖼️ Image
```

---

## ✅ Person Added

<p align="center">
  <img src="src/screenshots/person%20added.png" width="90%" alt="Person Added"/>
</p>

After submitting the form, the newly created person appears in the application.

---

## 🎉 Person Added Successfully

<p align="center">
  <img src="src/screenshots/person%20added%20alert.png" width="90%" alt="Person Added Alert"/>
</p>

A success alert confirms that the person has been created successfully.

---

## ✏️ Edit Person Details

<p align="center">
  <img src="src/screenshots/edit%20details.png" width="90%" alt="Edit Person"/>
</p>

Existing person information can be loaded into the form and modified.

---

## ✅ Update Success

<p align="center">
  <img src="src/screenshots/update%20success.png" width="90%" alt="Update Success"/>
</p>

The updated information is reflected in the application after the API request completes.

---

# 🔗 API Endpoints

```text
GET      /api/persona/
POST     /api/persona/
GET      /api/persona/<id>/
PATCH    /api/persona/<id>/
DELETE   /api/persona/<id>/
```

### CRUD Flow

```text
➕ CREATE
POST /api/persona/

       ↓

👀 READ
GET /api/persona/

       ↓

✏️ UPDATE
PATCH /api/persona/<id>/

       ↓

🗑️ DELETE
DELETE /api/persona/<id>/
```

---

# 🖼️ Image Upload Flow

```text
React Form
    │
    ▼
Select Image
    │
    ▼
FormData
    │
    ▼
Axios
    │
    ▼
Django REST Framework
    │
    ▼
Django Media Folder
    │
    ▼
Image displayed in React
```

---

# 📂 Project Structure

```text
person-crud-fullstack/
│
├── person/
│   │
│   ├── manage.py
│   │
│   ├── person/
│   │   ├── settings.py
│   │   ├── urls.py
│   │   ├── asgi.py
│   │   └── wsgi.py
│   │
│   └── persona/
│       ├── models.py
│       ├── serializers.py
│       ├── views.py
│       ├── admin.py
│       └── migrations/
│
└── person-frontend/
    │
    ├── public/
    │
    ├── src/
    │   │
    │   ├── components/
    │   │   ├── PersonForm.js
    │   │   ├── PersonForm.css
    │   │   ├── PersonCard.js
    │   │   └── PersonCard.css
    │   │
    │   ├── services/
    │   │   └── api.js
    │   │
    │   ├── screenshots/
    │   │   ├── add person.png
    │   │   ├── edit details.png
    │   │   ├── person added alert.png
    │   │   ├── person added.png
    │   │   └── update success.png
    │   │
    │   ├── App.js
    │   ├── App.css
    │   └── index.js
    │
    ├── package.json
    └── package-lock.json
```

---

# 🚀 Getting Started

## 🐍 Backend

Navigate to your Django project:

```bash
cd person
```

Activate the virtual environment:

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

Start the backend:

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

## ⚛️ Frontend

Open another terminal:

```bash
cd person-frontend
```

Install packages:

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

# 🧪 Test CRUD

### Create

Enter a person's information and upload an image.

### Read

The saved person will appear as a card.

### Update

Click **Edit**, change the information, and save.

### Delete

Click **Delete** to remove the record.

---

# 🌱 What I Learned

```text
⚛️ React Components
🔄 React State
📡 Axios
📝 Form Handling
🖼️ File Upload
🔗 REST APIs
🐍 Django REST Framework
🗄️ CRUD Operations
🌐 Frontend–Backend Integration
```

---

# 🎯 Future Improvements

```text
🔐 Authentication
👥 Multiple Users
🔎 Search & Filtering
📄 Pagination
✅ Better Validation
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

<img src="https://img.shields.io/badge/GitHub-Neahans-181717?style=for-the-badge&logo=github"/>

</a>

</div>

---

<div align="center">

<img src="https://readme-typing-svg.demolab.com?font=Poppins&weight=600&size=21&pause=1000&color=7C3AED&center=true&vCenter=true&width=700&lines=Build+%F0%9F%92%BB;Learn+%F0%9F%8C%B8;Create+%F0%9F%9A%80;Keep+Growing+%E2%9C%A8" alt="Footer Animation"/>

<br><br>

💜 **Thanks for visiting my project!**

<br><br>

⭐ **Feel free to explore the repository**

</div>

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:7C3AED,50:A78BFA,100:F9A8D4&height=120&section=footer&animation=fadeIn" width="100%"/>
