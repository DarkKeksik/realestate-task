const fs = require("fs");
const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer( app ).listen(8000);

// Путь на статические файлы
app.use(express.static(`${__dirname}/template/frontend/`));

// Вывод главной страницы
app.get("/", (req, res) => {
    res.sendFile(`${__dirname}/template/frontend/index.html`);
});


// API
app.post("/api", (req, res) => {
    console.log("Создание пользователя");
});
app.get("/api", (req, res) => {
    console.log("Запрос пользователя");
});
app.put("/api", (req, res) => {
    console.log("Редактирование пользователя");
});
app.delete("/api", (req, res) => {
    console.log("Удаление пользователя");
});