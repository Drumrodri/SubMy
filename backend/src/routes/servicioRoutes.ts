import { Router } from 'express';
import { servicioController } from '../controllers/servicioController';

class ServicioRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get("/servicios", servicioController.get);
    }
}
const servicioRoutes = new ServicioRoutes();
export default servicioRoutes.router;