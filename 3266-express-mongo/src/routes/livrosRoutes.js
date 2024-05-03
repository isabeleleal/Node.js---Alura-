import express from "express";
import LivroCrontroller from "../controllers/livrocontrollers.js";
/* import CadastrarLivro from "../controllers/livrocontrollers.js" */

const routes = express.Router();

routes.get("/livros", LivroCrontroller.listarLivros)
routes.get("/livros/busca", LivroCrontroller.listarLivrosPorEditora)
routes.get("/livros/:id", LivroCrontroller.listarLivroPorId)
routes.post("/livros", LivroCrontroller.cadastrarLivro)
routes.put("/livros/:id", LivroCrontroller.atualizarLivro)
routes.delete("/livros/:id", LivroCrontroller.deletarLivro)

export default routes;