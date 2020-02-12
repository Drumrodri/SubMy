import { Request, Response } from 'express';
import pool from '../database';

class SuscripcionController {
    index(req: Request, res: Response) {
        res.json({mensaje: "Estás en suscripciones"})
    }

    public async get(req: Request, res: Response) {
        let suscripciones = await pool.query('SELECT * FROM suscripcion', [req.body]);
        res.json(suscripciones);
    }
}
export const suscripcionController = new SuscripcionController;