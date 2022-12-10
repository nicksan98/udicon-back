import { Request, Response } from "express"
import { house_type } from "../entity/tipoCasa";


export const TipoCasas = async (req: Request, res: Response) => {
    console.log(req.body);
    const pageSize = 10;
    const page = parseInt(req.query.page as string || '1');
    const [ data, total ] = await house_type.findAndCount({
        take: pageSize,
        skip: (page - 1) * pageSize
    })
    res.send(
        data
    );
}


