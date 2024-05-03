import express from "express";
import AutorCrontroller from "../controllers/autorcontrollers.js";
/* import CadastrarLivro from "../controllers/livrocontrollers.js" */

const routes = express.Router();

routes.get("/autores", AutorCrontroller.listarAutores)
routes.get("/autores/:id", AutorCrontroller.listarAutoresPorId)
routes.post("/autores", AutorCrontroller.cadastrarAutor)
routes.put("/autores/:id", AutorCrontroller.atualizarAutor)
routes.delete("/autores/:id", AutorCrontroller.deletarAutor)

export default routes;