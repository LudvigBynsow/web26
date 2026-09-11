
<script lang="ts">
import { deleteTodo, getTodos } from './todo.remote';
import { addTodo } from './todo.remote';

</script>

<ol>
	{#each await getTodos() as todo}
	{@const remove = deleteTodo.for(todo.id)}
		<form {...remove}>
			
			<span style="display: flex; align-items:center; gap:lrem;">
				<li>{todo.text}</li>
				<button disabled={!!remove.pending}>Delete</button>
			</span>
			
		</form>
		
	{/each}
</ol>

<form {...addTodo}>
	<label for="new-todo">New Todo:
		<input {...addTodo.fields.text.as("text")} >
	</label>
	<input type="submit" value="Add Todo" />
</form>
