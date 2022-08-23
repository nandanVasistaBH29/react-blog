//imports
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const multer = require("multer");
const authRoutes = require("./routes/auth.js");
const usersRoutes = require("./routes/users.js");
const postsRoutes = require("./routes/posts.js");
const categoriesRoutes = require("./routes/categories.js");
const path = require("path");
//to use import export go to package.json change type:"modular" google it
//config
const app = express();
app.use(express.json());
dotenv.config();
app.use("/images", express.static(path.join(__dirname, "/images")));
//db
mongoose
  .connect(process.env.MONGO_URL)
  .then(console.log("Db connected"))
  .catch((err) => console.log(err));
//every file will go to images folder we can use S3 of AWS or firebase
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});
const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("file has beem uploaded");
});
//routes
app.use("/api/auth", authRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/posts", postsRoutes);
app.use("x", categoriesRoutes);
app.listen(process.env.PORT, () => {
  console.log("runnnig ");
});
