### StreetStyleStore Backend API Assignment

#### 🚀 Overview
This project is a RESTful API built using Node.js and Express for managing items with CRUD operations, rate-limiting, authentication (bonus), and file handling.

---

### 📂 Project Structure
```
streetstylestore-assignment/
│── 📂 src/
│   │── 📂 routes/
│   │   ├── items.js
│   │── 📂 middleware/
│   │   ├── rateLimiter.js
│   │   ├── auth.js (Bonus - JWT authentication)
│   │── 📂 config/
│   │   ├── db.js
│   │── 📂 controllers/
│   │   ├── itemsController.js
│   │── 📂 models/
│   │   ├── itemsModel.js
│   │── 📂 utils/
│   │   ├── fileHandler.js
│   ├── app.js
│── 📂 logs/
│   ├── logs.json
│── 📂 sql/
│   ├── database.sql
│── 📄 .env
│── 📄 package.json
│── 📄 README.md
│── 📄 server.js
```

---

### ⚙️ Setup & Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/streetstylestore-assignment.git
   cd streetstylestore-assignment
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables in `.env`:
   ```plaintext
   PORT=5000
   DATABASE_URL=mysql://user:password@localhost:3306/database_name
   JWT_SECRET=your_jwt_secret
   ```
4. Start the server:
   ```bash
   npm start
   ```

---

### 📌 Features
✅ CRUD operations for items
✅ Rate-limiting (100 requests per 15 minutes)
✅ File handling for logs
✅ MySQL database integration
✅ JWT authentication (Bonus)
✅ Robust error handling

---

### 🔥 API Endpoints
| Method | Endpoint         | Description |
|--------|----------------|-------------|
| POST   | /api/items      | Create item |
| GET    | /api/items      | Get all items |
| GET    | /api/items/:id  | Get item by ID |
| PUT    | /api/items/:id  | Update item |
| DELETE | /api/items/:id | Delete item |

---

### 🎥 Demo (Loom Video)
[![Watch the Video](https://i.imgur.com/R7dP9Jz.gif)](https://www.loom.com/share/example-url)

---

### 👨‍💻 Author
- **Gaurav Shukla** - [Full-Stack Developer]

Feel free to contribute and improve this project! 🚀
