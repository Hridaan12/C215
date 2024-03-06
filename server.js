const express = require("require")
const app = express();
const server = require("http").server(app);
app.set("view engine", "ejs");
app.use(express.static)
app.get("/", (req, res) =>{
    res.status(200).send("Hello world");
});

server.listen(3030);

