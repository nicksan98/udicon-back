import { Request, Response } from "express"
import { Usuario } from "../entity/usuario.entity";
import { RegisterValidation } from "../validation/register.validation";
import bcryptjs from "bcryptjs"
import { sign } from "jsonwebtoken";
import { Persona } from "../entity/persona.entity";
const jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'gmail',
    secure: true,
    auth: {
      user: 'prueba.uptcdis@gmail.com',
      pass: 'qqemjqbrvxnufhun'
    }
  });

export const CreateUsuario = async (req: Request, res: Response) => {
    const {...usuario} = req.body;

    const usuarioToSave = await Usuario.save({
        ...usuario
    })
    res.send(usuarioToSave);
}

export const Register = async (req: Request, res: Response) => {
    var randomstring = Math.random().toString(36).slice(-8);
bcrypt.genSalt(10, function (err, Salt) {
  bcrypt.hash(randomstring, Salt, function (err, hash) {
    const usuarioToSave = Usuario.save({
        user_type: req.body.rol, user_name: req.body.email, password: hash, 
    })
  })
})
let link = "http://" + req.headers.host + "/api/confirm/" + jwt.sign({email : req.body.email }, 'vaca' , { expiresIn: '1d' });
var mailOptions ={
  from: 'prueba.uptcdis@gmail.com',
  to: req.body.email,
  subject: 'Creacion de cuenta',
  text: 'Estimado ' + req.body.name + ' Su cuenta de usuario de UDICON S.A.S fue creada con exito, su contraseña es: ' + randomstring
  + '' 
};
transporter.sendMail(mailOptions, function(error, info){
if (error) {
  res.send({message: 'Hay un error en el envio de correo' })
  console.log(error);
} else {
  res.send({message: 'Correo enviado exitosamente' });
  console.log('Email sent: ' + info.response);
}
});
}

export const Login = async (req: Request, res: Response) => {
    const {user_name, password:pass } = req.body
    const usuario = await Usuario.findOneBy ( { user_name })
    if (!usuario || !await bcryptjs.compare(pass, usuario.password)) {
        return res.status(400).send(
            {message: 'credenciales no válidas'}
        )
    }

    const token = sign({
        id_usuario: usuario.id_usuario
    }, process.env.SECRET_KEY)

    res.cookie('jwt', token, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000 // one day
    })
    res.send({
        rol: usuario.user_type,
        id: usuario.id_usuario
    });
}

//Obtener un administrador
export const AuthenticatedUser =  async (req: Request, res: Response) => {
    const {password, ...usuario} = req['usuario'];
    res.send(usuario)
}

//Obtener todos los usuarios
export const GetUsuario = async (req: Request, res: Response) => {
    res.send( await Usuario.find());
}

export const Logout = async (req: Request, res: Response) => {
    res.cookie('jwt', '', {maxAge: 0});
    res.send({
        message : 'success'
    })
}

export const UpdateInfo = async (req: Request, res: Response) => {
    const usuario = req['usuario'];
    await Usuario.update(usuario.id_usuario, req.body);
    const { password, ...userRead } = await Usuario.findOneBy({id_usuario: usuario.id_usuario});
    res.send(userRead);
}

export const UpdatePassword =  async (req: Request, res: Response) =>  {
    const usuario = req['usuario'];
    const { password, password_confirm } = req.body;
    if ( password != password_confirm ) {
        return res.status(400).send(
            {message: 'las contraseñas no coinciden'}
        )
    }
    await Usuario.update(usuario.id_usuario, { password: await bcryptjs.hash(password, 10)});
    const { password:pass, ...userRead} = usuario;
    res.send(userRead);
}

export const ValidateUser = async (req:Request, res: Response) => {
    const verify= jwt.verify(req.params.token, 'vaca');
    if(!verify) return res.status(400).send({message: 'Token invalido'});

}