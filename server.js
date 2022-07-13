import express from "express";
import path from "path";
const app = express();
//const PORT = 3000;


app.use("/*", express.static(path.resolve( "./dist")));

app.get("/*", (req, res) => {
    res.contentType('html');
    res.sendFile(path.resolve( "./dist", "index.html"));
});

app.listen(process.env.PORT || 3000, () => console.log("Server running..."));
console.log('pato');