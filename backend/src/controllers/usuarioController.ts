import { Request, Response } from 'express';
import pool from '../database';
const decode = require ('jwt-decode');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const bcryptdos = require('bcrypt');
const SECRET_KEY = 'laSecretacionDelLogin';
const fs = require('fs');

class UsuarioController {
    index(req: Request, res: Response) {
        res.json({ mensaje: "Estás en usuarios" })
    }

    // crear los metodos crud
    public async create(req: Request, res: Response) {
        console.log(req.body);
        console.log(req.files);
        let fileName = Math.random() * Date.now() + req.files.imagen.name;
        let ruta = 'assets/' + fileName;
        console.log(ruta);

        fs.writeFile('../frontend/src/' + ruta, req.files.imagen.data, function(err: any) {
            if(err) {
                return console.log(err);
            }
            console.log("The file was saved!");
        });

        //comprobar que el email no existe en la base de datos
        const email =  await pool.query("SELECT * FROM usuario WHERE email = ?", [req.body.email]);
        if(email.length == 0){
        console.log(req.body.password);
        // aqui es donde se va a codicar la contraseña se va a modificar la const Usuario
        const Usuario = req.body; // objeto Usuario
        const passUsu = bcrypt.hashSync(Usuario.password);  // contraseña
        console.log(passUsu); //comprobador
        Usuario.password = passUsu;
        Usuario.imagen = ruta;
        
        pool.query('INSERT INTO usuario SET ?', [Usuario]);
        res.json({ 'menssage': 'se ha insertado correctamente el usuairo' });
        }else{
            console.log("usuario existene");
            res.json({ 'menssage': 'ya existe un usuario con ese correo' });
        }

    }
    
    // update de imagen
   /* private updateImagen(usuario: Usuario , imagen: FileI){

    }*/


    public async get(req: Request, res: Response) {
        let usuario = await pool.query("SELECT * FROM usuario WHERE id = ?", [req.params.id]);
        res.json(usuario);
    }

    public async readlogin(req: Request, res: Response) {
        const copiaUsuario = {
            usuario: req.body.usuario,
            pass: req.body.pass
        }

        const usuarios = await pool.query('SELECT * FROM usuario WHERE email=? ', [req.body.usuario]);
        console.log(usuarios[0].password); // comprobador
        if (usuarios.length == 0) {
            res.json({ message: 'error al logear' });
        } else {
            // comparar contraseñas
            if (bcrypt.compareSync(copiaUsuario.pass, usuarios[0].password)) {
               
                const expiresIn = 24 * 60 * 60;
                const accessToken = jwt.sign({ id: usuarios[0].id},
                    SECRET_KEY,
                    { expiresIn: expiresIn });
                
                    
                console.log("token de acceso");
                console.log(accessToken);
                res.json({token: accessToken}); //lo que enviamos el token en el response 

                console.log('token decoficado');
                var tokenDecode = decode(accessToken);
                console.log(tokenDecode.id);

                
            } else {
                console.log("error al loggearse");
            }
            


        }

    }

    public async readloginSocial(req: Request, res: Response) {
       
        console.log(req.body);
        const emailSocial = req.body.email;
        
       

        const usuarios = await pool.query('SELECT * FROM usuario WHERE email=? ', [emailSocial])
        console.log(usuarios);
        if (usuarios.length == 0) {
            res.json({ message: 'error al logear' });
        } else {   
                const expiresIn = 24 * 60 * 60;
                const accessToken = jwt.sign({ id: usuarios[0].id},
                    SECRET_KEY,
                    { expiresIn: expiresIn });
                
                    
                console.log("token de acceso con loguin social");
                console.log(accessToken);
                res.json({token: accessToken}); //lo que enviamos el token en el response 

                console.log('token decoficado');
                var tokenDecode = decode(accessToken);
                console.log(tokenDecode.id);

        }

    }

}


export const usuarioController = new UsuarioController;