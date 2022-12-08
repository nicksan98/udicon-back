import { Request, Response } from "express";
import { Cita } from "../entity/cita.entity";

export const CreateCita = async (req: Request, res: Response) => {
  const { fecha_cita, ...cita } = req.body;


  const fecha_cita_date = new Date(fecha_cita);
  console.log("entró", fecha_cita_date);

  const citaToSave = await Cita.save({
    ...cita,
    fecha_cita: fecha_cita_date,
  });

  res.send(citaToSave);
};

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
