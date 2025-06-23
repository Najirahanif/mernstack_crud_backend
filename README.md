# mernstack_crud_backend
Lemon Pay – Backend (Express + MongoDB)
Folder Structure
 mernstack_crud_backend/  
├── controller/            → API logic for users and tasks  
├── model/                 → Mongoose schemas (User, Task)  
├── routes/                → Express routes for users and tasks  
├── .env                   → Environment variables  
├── package.json           → Backend dependencies and scripts  
├── server.js              → Entry point of the server  

1. Navigate into the backend folder
  cd mernstack_crud_backend
2. Install Dependencies
   npm install
3. Create .env File
  PORT=5000
  MONGO_URL=mongodb://localhost:27017/lemonpay
  JWT_SECRET=your_jwt_secret_key
4.Start the Server
npx nodemon server.js or npm run dev
5. Features
  User registration and login
  JWT-based authentication
  Task creation, listing, editing, and deletion
  Soft delete functionality
  MongoDB with Mongoose ORM
6.Technologies Used
  Node.js
  Express
  MongoDB
  Mongoose
  JWT (jsonwebtoken)
  dotenv
  cors

**AUTHOR**
Created by Najira Hanif
GitHub: @Najirahanif
