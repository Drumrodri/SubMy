import { Request, Response } from 'express';
import pool from '../database';

class UsuarioController {
    index(req: Request, res: Response) {
        res.json({mensaje: "Estás en usuarios"})
    }

    public async get(req: Request, res: Response) {
        let usuario = await pool.query("SELECT * FROM usuario WHERE id = ?", [req.params.id]);
        res.json(usuario);
    }
}
export const usuarioController = new UsuarioController;