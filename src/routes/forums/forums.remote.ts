import { query } from "$app/server"
import { form } from "$app/server"
import * as v from 'valibot';

let forum: {name:string, password:number} []= [];

export const getForums = query(()=>forum);

export const addForums = form(
    v.object({
        name: v.pipe(v.string(), v.nonEmpty()),
        password: v.number()
    }),
    async ({name, password})=> {
        forum.push({name, password});
    },

)

export const removeForums = form(
    v.object({
        id: v.number()
    }),
    async ({ id }) =>{
        forum=forum.filter((forum)=> forum.password !=id);
    },

)