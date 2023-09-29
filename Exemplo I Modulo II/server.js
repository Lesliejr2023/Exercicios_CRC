const express = require("express");
const app = express();

app.use(express.json());

const PORT = 3030;
const usuarios = ["Leslie, Junior"];

app.get("/", (req, res) => {
    res.json({Usuarios: usuarios});
})

app.post("/usuarios", (req, res) => {
    const usuario = req.body;
    usuarios.push(usuario);
    res.send("Enviado");
})

app.listen(PORT, () => {
    console.log(`Rodando na porta...${PORT}`);
})