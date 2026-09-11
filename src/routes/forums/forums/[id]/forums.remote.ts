import { query } from "$app/server"
import { form } from "$app/server"
import * as v from 'valibot';



let log: {message:string, id:string}[]=[];

let messages: Record<string, string[]> = {} 



export const getMessages = query(v.string(), (id) =>{
    return log.filter((log)=> log.id == id)
});

export const createMessages = form(
    v.object({
        message: v.pipe(v.string(), v.nonEmpty()),
        id: v.string(),
    }),
    ({message, id})=> {
        log.push({message, id});
    },
)