import { query } from "$app/server"
import { form } from "$app/server"
import * as v from 'valibot';
import { db } from "../../../prisma/db";




export const getMessages = query(v.string(), async (forumid) =>{
   return await db.orm.public.Message.where({forumid}).all()
});

export const createMessages = form(
    v.object({
        content: v.pipe(v.string(), v.nonEmpty()),
        forumid: v.string(),
    }),
    async ({content, forumid})=> {
        await db.orm.public.Message.create({content, forumid})
    },
)