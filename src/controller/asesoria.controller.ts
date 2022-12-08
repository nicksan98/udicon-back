import { Request, Response } from "express"
import { Asesoria } from "../entity/asesoria.entity";

export const CreateAsesoria = async (req: Request, res: Response) => {
    const {...asesoria} = req.body;

    const asesoriaToSave = await Asesoria.save({
        ...asesoria
    })
    res.send(asesoriaToSave);
}

export const GetAsesoria = async (req: Request, res: Response) => {
    const asesoria = await Asesoria.findOne( {
        where: 
        {id_asesoria: parseInt(req.params.id_asesoria)}
    })
    res.send(asesoria);
}

export const UpdateAsesoria = async (req: Request, res: Response) => {
    const {...body} = req.body;  
    await Asesoria.update(req.params.id_asesoria, {...body});
    const {...asesoria} = await Asesoria.findOne( { where: { id_asesoria: parseInt(req.params.id_asesoria)}})
    res.status(202).send(asesoria);
}

export const DeleteAsesoria = async (req: Request, res: Response) => {
    await Asesoria.delete(req.params.id_asesoria);
    res.status(204).send(null);

}