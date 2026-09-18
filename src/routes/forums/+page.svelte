<script lang="ts">
import {addForums, removeForums} from "./forums.remote";
import {getForums} from "./forums.remote";

</script>

<ol>
    {#each await getForums() as forums}
    {@const remove = removeForums.for(forums.id)}
    <form {...remove}>

        <span style="display: flex; align-items:center; gap:lrem;">
            <li>
            
            <a href="/forums/{forums.id}">{forums.name}</a>
            

            </li>
            
            <button disabled={!!remove.pending}>X</button>
        </span>
        
    </form>
    {/each}
</ol>

<form {...addForums}>
    <label>
            <input {...addForums.fields.name.as('text')} />
    <input type="submit" value="Add" />
    </label> 
</form>