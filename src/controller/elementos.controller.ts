import { Request, Response } from "express"
import { elemebt_house_type } from "../entity/elemebt_house_type";
import { elemento } from "../entity/elemento";


export const elementos = async (req: Request, res: Response) => {
    console.log(req.params);
    const data = await elemento.query('select * from elemento where id_elemento in (select id_element from elemebt_house_type where id_house_type ='+ req.params.id +')')
    res.send(
        data
    );
}


