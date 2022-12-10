import { Request, Response } from "express";
import { Cita } from "../entity/cita.entity";
import { elemento } from "../entity/elemento";

export const CreateCita = async (req: Request, res: Response) => {
  const { fecha_cita, ...cita } = req.body;
  console.log('aa', req.body);
  updateStars(req.body.id_piso, req.body.stars_piso);
  updateStars(req.body.id_ventana, req.body.stars_ventana);
  updateStars(req.body.id_pared, req.body.stars_pared);
  updateStars(req.body.id_luces, req.body.stars_luces);
  updateStars(req.body.id_cocina, req.body.stars_cocina);
  updateStars(req.body.id_comedor, req.body.stars_comedor);
  updateStars(req.body.id_sala, req.body.stars_sala);

  const fecha_cita_date = new Date(fecha_cita);
  const citaToSave = await Cita.save({
    ...cita,
    fecha_cita: fecha_cita_date,
  });

  res.send(citaToSave);
};

function updateStars(id: number, stars:number):void{
  const query = 'update elemento set puntuacion = (SELECT (puntuacion+'+stars+')/2 from elemento where id_elemento = '+id+')'
  const data = elemento.query(query)
  console.log(query)
}

export const GetCita = async (req: Request, res: Response) => {
  const cita = await Cita.findOne({
    where: { id_cita: parseInt(req.params.id_cita) },
  });
  res.send(cita);
};

export const Citas = async (req: Request, res: Response) => {
  res.send(await Cita.find());
};

export const UpdateCita = async (req: Request, res: Response) => {
    try {
        const {...body} = req.body;  
        console.log(body);
    await Cita.update(req.params.id, {hora_cita: body.hora_cita, fecha_cita: new Date(body.fecha_cita)});
    const {...cita} = await Cita.findOne( { where: { id_cita: parseInt(req.params.id)}})
    res.status(202).send(cita);
    } catch (error) {
        throw error.message    
    }
}

export const DeleteCita = async (req: Request, res: Response) => {
  try {
    await Cita.delete(req.params.id);
    res.status(204).send(null);
  } catch (error) {
    throw error.message;
  }
};
