# 🏔️ HikeHide

HikeHide is a full-stack web application inspired by Airbnb, where users can explore, create, and manage travel listings. It allows users to discover unique stays, filter listings by category, and interact with the platform through authentication and reviews.

🌐 **Live Demo:** https://hike-hide-1.onrender.com/listings

## 🚀 Features

### 🔍 Search & Discovery

* Live search functionality
* Category-based filtering (Rooms, Mountains, Farms, etc.)
* Trending listings support

### 🏠 Listings

* Create, edit, and delete listings
* Upload images using Cloudinary
* View detailed listing pages

### 👤 Authentication

* User signup & login
* Secure authentication using Passport.js
* Session management with MongoDB

### ⭐ Reviews

* Add and delete reviews
* Rating system with visual stars

### 🎨 UI/UX

* Responsive design
* Clean card-based layout
* Interactive filters (Airbnb-style)

---

## 🛠️ Tech Stack

**Frontend:**

* EJS
* Bootstrap
* CSS

**Backend:**

* Node.js
* Express.js

**Database:**

* MongoDB (MongoDB Atlas)

**Other Tools:**

* Cloudinary (Image uploads)
* Multer (File handling)
* Passport.js (Authentication)
* Connect-Mongo (Session storage)
* Joi (Validation)

---

## 📁 Project Structure

```
HikeHide/
│
├── models/
├── routes/
├── controllers/
├── views/
├── public/
├── utils/
├── app.js
├── package.json
└── .env
```



## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```
git clone https://github.com/amanversee/Hike-Hide.git
cd Hike-Hide
```

### 2️⃣ Install Dependencies


npm install


### 3️⃣ Setup Environment Variables

Create a `.env` file in root:


ATLASDB_URL=your_mongodb_connection_string
SESSION_SECRET=your_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_KEY=your_key
CLOUDINARY_SECRET=your_secret


### 4️⃣ Run the Application


npm start


App will run on:


http://localhost:8080




## 🌐 Deployment

This project is deployed using:

* Render (Backend)
* MongoDB Atlas (Database)



## 📌 Future Improvements

* Pagination for listings
* Wishlist / Favorites feature
* Booking system
* Payment integration
* JWT-based authentication (for frontend-backend separation)
* Full MERN stack conversion



## 🤝 Contributing

Contributions are welcome!
Feel free to fork this repository and submit a pull request.



## 📄 License

This project is licensed under the ISC License.



## 👨‍💻 Author

**Aman Mourya**

---

⭐ If you like this project, consider giving it a star on GitHub!
