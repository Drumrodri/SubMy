import { Request, Response } from 'express';
import pool from '../database';

class ServicioController {
    index(req: Request, res: Response) {
        res.json({mensaje: "Estás en servicios"})
    }

    public async get(req: Request, res: Response) {
        let servicios = await pool.query('SELECT * FROM servicio');
        res.json(servicios);
    }
}
export const servicioController = new ServicioController;