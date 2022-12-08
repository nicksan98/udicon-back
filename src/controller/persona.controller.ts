import { Request, Response } from "express"
import { Persona } from "../entity/persona.entity"

export const Personas = async (req: Request, res: Response) => {
    const pageSize = 10;
    const page = parseInt(req.query.page as string || '1');
    const [ data, total ] = await Persona.findAndCount({
        take: pageSize,
        skip: (page - 1) * pageSize
    })
    res.send(
        data
        
    );
}

export const CreatePerson = async (req: Request, res: Response) => {
    const {...persona} = req.body;

    const personToSave = await Persona.save({
        ...persona
    })

    res.send(personToSave);
}

//Obtener persona
export const GetPerson = async (req: Request, res: Response) => {
    const persona = await Persona.findOne( {
        where: 
        {id_persona: parseInt(req.params.id_persona)}
    })
    res.send(persona);
}


export const UpdatePerson = async (req: Request, res: Response) => {
    try {
        const {...body} = req.body;  
    await Persona.update(req.params.id, {...body});
    const {...persona} = await Persona.findOne( { where: { id_persona: parseInt(req.params.id)}})
    res.status(202).send(persona);
    } catch (error) {
        throw error.message    
    }
}

export const DeletePerson = async (req: Request, res: Response) => {
    try {
      await Persona.delete(req.params.id);
      res.status(204).send(null);
    } catch (error) {
      throw error.message;
    }
  };


