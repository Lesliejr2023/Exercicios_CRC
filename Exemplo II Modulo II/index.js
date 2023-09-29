const express = require("express");
const {PrismaClient} = require("@prisma/client")

const app = express();

app.use(express.json());

const prisma = new PrismaClient();

app.post("/post", async (req, res)=> {
    const {id, email, nome} = req.body;

    const usuarioExistente = await prisma.user.findFirst({
        where:{
            email,
        }
    })

    if(usuarioExistente){
        res.json("Usuario existente");
    
    try{
    const user = await prisma.user.create({
        data:{
            id,
            email,
            nome,
        }
    })
}catch (error){
    res.json(error);
}
    res.json({Mensagem: "Usuario criado"});
})

app.get("/get", async (req, res) => {
    const user = await prisma.user.findMany();
    res.json(user)
})
app.listen(8080, () => {
    console.log("Running on port 8080...");
})