// import express from "express";  //package-imports
// import dotenv from "dotenv";
// import cookieParser from "cookie-parser";


// import authRoutes from "./routes/auth.routes.js";   //file-imports
// import messageRoutes from "./routes/message.routes.js";
// import connectToMongoDB from "./db/connectToMongoDB.js";
// import userRoutes from "./routes/user.routes.js";


// const app = express();   //variables
// const PORT = process.env.PORT||5000;


// dotenv.config();




// //to parse the in-coming request with JSON payloads{ from req .body}
// app.use(express.json());  //this middle layer is used to extract body parts of fullName...etc
// app.use(cookieParser());


// app.use("/api/auth", authRoutes);  //middle-layer
// app.use("/api/messages", messageRoutes);
// app.use("/api/users", userRoutes);


// // app.get("/", (req, res) => {
// //     //root route http://localhost:5000/
// //     res.send("Hello World!!!");
// // });


// app.listen(PORT,() => {
//     connectToMongoDB();
//     console.log(`server Running on port ${PORT}`);
// });
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

import connectToMongoDB from "./db/connectToMongoDB.js";
import {app,server} from './socket/socket.js';

const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

server.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server running on port ${PORT}`);
});

