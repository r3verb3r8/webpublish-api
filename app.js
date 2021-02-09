const express = require("express");
const app = express();
const apiRouter = require("./routes/query");
const port = 3000;
const os = require("os");
const hostname = os.hostname();

// Import routes
const postsRoute = require("./routes/posts");

// Middlewares
app.use(express.json());
app.use("/posts", postsRoute);

// ROUTES
app.get("/", (req, res) => {
  res.send("This is root!");
});
app.use("/api", apiRouter);

// Server port
app.listen(PORT, function (err) {
  if (err) console.log("Server couldn't start", err);
  // console.log("Server is running on: http://" + hostname + ":" + PORT);
  console.log(`Server is running on: http://${hostname}:${port}`);
});
