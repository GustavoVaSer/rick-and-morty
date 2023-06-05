const express = require('express');
const server = express();
const PORT = 3001;

server.listen(PORT, () => {
   console.log('Server raised in port: ' + PORT);
});

// const http = require("http");
// const getCharacterById = require("./controllers/getCharacterById.js")
// const PORT = 3001;

// http.createServer((req, res) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');

//     if (req.url.includes("/rickandmorty/character")) {
//         const id = req.url.split("/").pop();
//         getCharacterById(res, id);
//     }
// }).listen(PORT, "localhost");