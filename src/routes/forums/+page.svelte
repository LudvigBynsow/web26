<script lang="ts">
import {addForums, removeForums} from "./forums.remote.ts";
import {getForums} from "./forums.remote.ts";

</script>

<ol>
    {#each await getForums() as forums}
    {@const remove = removeForums.for(forums.password)}
    <form {...remove}>

        <span style="display: flex; align-items:center; gap:lrem;">
            <li>
            
            <a href="/forums/{forums.password}">{forums.name}</a>
            - {forums.password}

            </li>
            
            <button disabled={!!remove.pending}>X</button>
        </span>
        
    </form>
    {/each}
</ol>

<form {...addForums}>
    <label>
            <input {...addForums.fields.name.as('text')} />
            <input {...addForums.fields.password.as('number')} />
    <input type="submit" value="Add" />
    </label> 
</form>