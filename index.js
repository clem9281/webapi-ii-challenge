const express = require("express");
const server = express();

const cors = require("cors");

const postRoutes = require("./routes/postRoutes");

const port = process.env.PORT || 5000;

server.use(express.json());
server.use(cors());

server.get("/", (req, res) => res.send("<h1>WebApi II </h1>"));

server.use("/api/posts", postRoutes);

server.listen(port, () => console.log(`Server running on ${port}`));
