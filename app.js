const express = require("express");
const app = express();
const cors = require("cors");
const apiRouter = require("./routes/query");
const port = 5000;
const os = require("os");
const hostname = os.hostname();

// Import routes
const postsRoute = require("./routes/posts");

// var corsOptions = {
//   origin: "http://192.168.50.164:3000",
//   optionsSuccessStatus: 200,
// };

// Middlewares
app.use(cors());
app.use(express.json());
app.use("/posts", postsRoute);

// ROUTES
app.get("/", (req, res) => {
  res.send("This is root!");
});
app.use("/api", apiRouter);

// Server port
app.listen(port, (err) => {
  if (err) {
    console.log("Server couldn't start", err);
  }
  console.log(`Server is listening at: http://${hostname}:${port}`);
});
