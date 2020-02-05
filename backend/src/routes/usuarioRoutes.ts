import { Router } from 'express';
import { usuarioController } from '../controllers/usuarioController';

class UsuarioRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get("/usuarios", usuarioController.index);
        this.router.get("/usuarios/:id", usuarioController.get);
    }
}
const usuarioRoutes = new UsuarioRoutes();
export default usuarioRoutes.router;