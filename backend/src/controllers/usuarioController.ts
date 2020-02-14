import { Request, Response } from 'express';
import pool from '../database';
const jwt = require ('jsonwebtoken');
const bcrypt = require ('bcryptjs');
const SECRET_KEY = 'laSecretacionDelLogin';

class UsuarioController {
    index(req: Request, res: Response) {
        res.json({mensaje: "Estás en usuarios"})
    }

    public async get(req: Request, res: Response) {
        let usuario = await pool.query("SELECT * FROM usuario WHERE id = ?", [req.params.id]);
        res.json(usuario);
    }

    public async readlogin(req:Request, res:Response){
        const copiaUsuario={
            usuario:req.body.usuario,
            pass: req.body.pass
        }
        const usuarios = await pool.query('SELECT * FROM usuario WHERE email=? AND password=?', [req.body.usuario, req.body.pass])
        console.log(usuarios.length);
        if(usuarios.length == 0){
            res.json({message:'error al logear'});
        }else{
            const expiresIn = 24*60*60;
            const accessToken = jwt.sign({id: copiaUsuario.usuario},
                                          SECRET_KEY,
                                         {expiresIn:expiresIn});
           console.log(accessToken);
           res.json(accessToken); //lo que enviamos en el response                              
        }

    }
}

export const usuarioController = new UsuarioController;