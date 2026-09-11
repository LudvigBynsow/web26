import { form, query } from '$app/server';
import * as v from 'valibot';

let todos: {id:string, text:string}[]=[];

export const getTodos = query(async () => {
    return todos
});

export const addTodo = form(
    v.object({
        text: v.pipe(v.string(), v.nonEmpty())
    }),
    async ({ text }) => {
        todos.push({id: Date.now().toString(),text});
    },
);

export const deleteTodo = form(
    v.object({
        id: v.pipe(v.string(), v.nonEmpty())
    }),
    async ({ id }) => {
        await new Promise((resolve => setTimeout(resolve, 2000)));
        todos = todos.filter((todo)=> todo.id != id);
    },
);