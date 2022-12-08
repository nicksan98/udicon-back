import express, { Router } from "express";
import { CreateAsesoria, DeleteAsesoria, GetAsesoria, UpdateAsesoria } from "./controller/asesoria.controller";
import { Citas, CreateCita, DeleteCita, GetCita, UpdateCita } from "./controller/cita.controller";
import { CreatePerson, DeletePerson, GetPerson, Personas, UpdatePerson } from "./controller/persona.controller";
import { CreateUsuario, Login, Register } from "./controller/usuario.controller";

export const routes = (router: Router) => {
    //Personas
    router.get('/api/v1/getPersonas', Personas);
    router.post('/api/v1/createPersona', CreatePerson);
    router.get('/api/v1/getPersona/:id', GetPerson);
    router.put('/api/v1/updatePersona/:id', UpdatePerson);
    router.delete('/api/v1/deletePersona/:id', DeletePerson);

    //Usuarios
    router.post('/api/v1/createUsuario', CreateUsuario);

    //Usuarios Autenticacion
    router.post('/api/v1/Register', Register);
    router.post('/api/v1/Login', Login);

    //Asesorias
    router.post('/api/v1/createAsesoria', CreateAsesoria);
    router.get('/api/v1/getAsesoria/:id', GetAsesoria);
    router.put('/api/v1/updateAsesoria/:id', UpdateAsesoria);
    router.delete('/api/v1/deleteAsesoria/:id', DeleteAsesoria);

    //citas
    router.get('/api/v1/Citas', Citas);  
    router.post('/api/v1/createCita', CreateCita);
    router.get('/api/v1/getCita/:id', GetCita);
    router.put('/api/v1/updateCita/:id', UpdateCita);
    router.delete('/api/v1/deleteCita/:id', DeleteCita);

    router.post('/api/v1/Contact', CreatePerson);
     
    router.get('/api/v1/Projects', Personas);
    

}