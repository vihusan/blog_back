import { Request, Response } from 'express';
import { v4 as uuid } from 'uuid';
import { PrismaClient } from '@prisma/client';
import { Post } from '../interfaces/post.interface';

const prisma = new PrismaClient();

export const getPost = async (req:Request, res : Response) => {
    try{
        const {tb:tipoBusqueda, cb:cadenaDeBusqueda, id} = req.query;
        let query : object = {};
        let result : null | Post | Post [] = [];


        if(tipoBusqueda && cadenaDeBusqueda && !id) {
            query = {
                where : { 
                    [`${tipoBusqueda}`] : {
                        contains: `${cadenaDeBusqueda}`
                    }
                }
            };
            const arrayPost : Post[]= await prisma.post.findMany(query);
            result = arrayPost.map( (post:Post) => { 
                const contenido = post.contenido;
                post.contenido = contenido.substring(0,70);
                return post;
            });
        }

        if(!tipoBusqueda && !cadenaDeBusqueda && id) {
            result = await prisma.post.findUnique({where:{ id : parseInt(id)}});
        }
        
        if(!tipoBusqueda && !cadenaDeBusqueda && !id) {
            const arrayPost: Post[] = await prisma.post.findMany();
            
            result = arrayPost.map( (post:Post) => { 
                const contenido = post.contenido;
                post.contenido = contenido.substring(0,70);
                
                return post;
            })
        }

        res.json({
            data: result
        })
    }catch(error){
        res.status(500).json({
            msj : "Error en el servidor",
            error
        })
    }
}

export const postPost = async (req:Request, res : Response) => {
    try{
        const post : Post = req.body;
        const newPost : Post = await prisma.post.create({ data: post});

        res.json({
            data: newPost
        })
    }catch(error){
        console.log(error);
        res.status(500).json({
            msj : "Error en el servidor",
            error
        })
    }
}
