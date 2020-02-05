import { Request, Response } from 'express';

class SuscripcionController {
    index(req: Request, res: Response) {
        res.json({mensaje: "Estás en suscripciones"})
    }
}
export const suscripcionController = new SuscripcionController;