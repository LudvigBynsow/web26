import { query } from "$app/server"
import { form } from "$app/server"
import * as v from 'valibot';
import { db } from '../../prisma/db';



export const getForums = query(async()=>{
    return await db.orm.public.Forum.all()
});

export const addForums = form(
    v.object({
        name: v.pipe(v.string(), v.nonEmpty()),
    }),
    async ({name})=> {
        await db.orm.public.Forum.create({name})
    },

)

export const removeForums = form(
    v.object({
        id: v.string()
    }),
    async ({ id }) =>{
        await db.orm.public.Forum.where({id}).delete();
    },

)