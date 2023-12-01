import { Request, Response } from 'express';
import { v4 as uuid } from 'uuid';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getUsuario = async (req:Request, res : Response) => {
    try{
        const resp = await prisma.user.findMany();
    

        res.json({
            msj : "API get - controller",
            data: resp
        })
    }catch(error){
        res.status(500).json({
            msj : "Error en el servidor"
        })
    }
}

export const postUsuario = async (req:Request, res : Response) => {
    try{
        let data = req.body;
        

        const newUser = await prisma.user.create({ data });
        
        res.json({
            msj : "API post - controller",
            newUser
        })

    }catch(error){
        res.status(500).json({
            msj : "Error en el servidor",
            error: error
        })
    }
}

export const putUsuario = (req:Request, res : Response) => {
    res.json({
        msj : "API put - controller"
    })
}

export const deleteUsuario = (req:Request, res : Response) => {
    res.json({
        msj : "API delete - controller"
    })
}