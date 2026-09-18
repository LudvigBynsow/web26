import { form, query } from '$app/server';
import * as v from 'valibot';
import { db } from '../../prisma/db';



export const getTodos = query(async () => {
    return await db.orm.public.Todo.all()
});

export const addTodo = form(
    v.object({
        text: v.pipe(v.string(), v.nonEmpty())
    }),
    async ({ text }) => {
        await db.orm.public.Todo.create({text})
    },
);

export const deleteTodo = form(
    v.object({
        id: v.pipe(v.string(), v.nonEmpty())
    }),
    async ({ id }) => {
        await db.orm.public.Todo.where({id}).delete()
    },
);