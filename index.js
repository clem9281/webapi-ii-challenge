const express = require("express");

const server = express();

const postRoutes = require("./routes/postRoutes");

const port = process.env.PORT || 5000;

server.use(express.json());

server.get("/", (req, res) => res.send("<h1>WebApi II </h1>"));

server.use("/api/posts", postRoutes);

server.listen(port, () => console.log(`Server running on ${port}`));
