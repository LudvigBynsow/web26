import { query } from "$app/server"
import { form } from "$app/server"
import * as v from 'valibot';
import { redirect } from '@sveltejs/kit';

import {getRequestEvent} from "$app/server";


let user: {name: string, password: string} []=[];

export const getUser = query(()=>user);

export const addUser = form(
    v.object({
        name: v.pipe(v.string(), v.nonEmpty()),
        password: v.pipe(v.string(), v.nonEmpty()),
    }),
    async ({name, password})=> {
        const { cookies } = getRequestEvent();
        cookies.set("name", "password", {path: "/", httpOnly: true})
        user.push({name, password});
        redirect(303, "/")
    }
)