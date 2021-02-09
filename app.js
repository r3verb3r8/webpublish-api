const express = require("express");
const app = express();
const apiRouter = require("./routes/query");

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
app.listen(3000);
