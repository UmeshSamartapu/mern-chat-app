# MERN Stack Chat App 🚀

A real-time chat application built using the MERN stack with Socket.io, JWT authentication, and modern UI styling with TailwindCSS and Daisy UI.

![App Screenshot](https://via.placeholder.com/1080x1920.png)

## 🌟 Features

- **MERN Stack**: MongoDB, Express, React, Node.js
- **Real-time Messaging**: Powered by Socket.io
- **JWT Authentication & Authorization**
- **Online User Status**: Managed with React Context & Socket.io
- **Global State Management**: Utilizing Zustand
- **Secure API Routes**: Protected with JWT and middleware
- **Error Handling**: Implemented on both server and client
- **Modern UI Design**: Styled with TailwindCSS & Daisy UI
- **Free Deployment**: Deployed with best practices

---

## 📌 Tech Stack

- **Frontend**:
  - React.js
  - TailwindCSS
  - Daisy UI
  - Zustand
  - Socket.io Client

- **Backend**:
  - Node.js
  - Express.js
  - MongoDB
  - Mongoose
  - Socket.io
  - JWT
  - Bcrypt.js

---

## 📂 Project Setup

### 1️⃣ Clone the Repository


git clone https://github.com/your-username/mern-chat-app.git
cd mern-chat-app

2️⃣ Install Dependencies

Server

```bash
cd server
npm install
````

Client

```bash
cd client
npm install
```

3️⃣ Configure Environment Variables

Create a .env file in the server folder and add:

```bash
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
SOCKET_PORT=your_socket_port
```

4️⃣ Run the Application

Start the Backend Server

```bash
cd server
npm start
```
Start the Frontend

```bash
cd client
npm start
```

---

🛠 Step-by-Step Guide

📌 1. Backend Setup

1. Initialize a Node.js project:

```bash
mkdir server && cd server
npm init -y
```

2. Install dependencies:

```bash
npm install express mongoose dotenv cors jsonwebtoken bcryptjs socket.io
```

3. Set up an Express server (server/index.js).


4. Create a MongoDB connection using Mongoose.


5. Set up environment variables in .env.



📌 2. Authentication (JWT)

1. Create User Model (models/User.js).


2. Set up authentication routes (routes/auth.js):

Sign Up Endpoint

Login Endpoint

Logout Endpoint



3. Use bcrypt.js to hash passwords.


4. Implement JWT authentication for secure access.



📌 3. Real-Time Chat (Socket.io)

1. Create Message Model (models/Message.js).


2. Create Conversation Model (models/Conversation.js).


3. Set up API routes (routes/chat.js):

- Send Message Endpoint

- Messages Endpoint

- Get Conversations Endpoint



4. Use Socket.io to establish a real-time connection.



📌 4. Frontend Setup

1. Initialize a React project:

```bash
npx create-react-app client
cd client
```

2. Install dependencies:

```bash
npm install axios react-router-dom tailwindcss daisyui zustand socket.io-client
```

3. Configure TailwindCSS & Daisy UI.


4. Set up React Context for authentication.



📌 5. UI & User Authentication

  1. Create Sign Up & Login pages.


  2. Store JWT tokens securely in local storage.


  3. Implement logout functionality.


  4. Fetch & display user conversations in the sidebar.



📌 6. Implement Real-Time Messaging

  1. Establish a WebSocket connection with Socket.io.


  2. Listen for incoming messages & update UI dynamically.


  3. Show online status of users.



📌 7. Deployment

  1. Deploy frontend on Vercel / Netlify.


  2. Deploy backend on Render / Railway.


  3. Use MongoDB Atlas for database hosting.




---

🚀 Deployment

This app is deployed and accessible at: https://mern-chat-app-gbzw.onrender.com

You can deploy your own instance for free using:

Frontend: Vercel / Netlify

Backend: Render / Railway / Heroku

Database: MongoDB Atlas


To deploy, follow these steps:

```bash
1. Push your code to GitHub


2. Connect your repo to Vercel (for frontend)


3. Connect your server to Render or Railway


4. Update .env with production variables


5. Deploy 🚀
```



---

📜 License

This project is licensed under the MIT License.


---

🎯 Contributing

Pull requests are welcome! If you'd like to contribute:

1. Fork this repo


2. Create a feature branch (git checkout -b feature-name)


3. Commit your changes (git commit -m "Add feature")


4. Push to the branch (git push origin feature-name)


5. Submit a Pull Request




---

💡 Future Enhancements

✔️ Dark Mode UI

✔️ Message Reactions

✔️ Typing Indicator

✔️ Group Chats

✔️ File Sharing


---

🛠️ Author

👤 Samartapu Umesh
📧 Email: umeshsamartapu@gmail.com
🔗 GitHub: UmeshSamartapu


---

This MERN Chat App is built with ❤️ to help developers learn real-time communication using modern web technologies.
If you find this project useful, don't forget to star ⭐ the repo! 🚀
