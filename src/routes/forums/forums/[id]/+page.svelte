<script lang="ts">


import {getMessages, createMessages} from "./forums.remote.ts"

let {params} = $props();
</script>

<ol>
    {#each await getMessages(params.id) as messages}

        <span style="display: flex; align-items:center; gap:lrem;">
            <li>
            {messages.message}
            </li>
            
        </span>
        
    {/each}
</ol>

<form {...createMessages}>
    <label>
            <input {...createMessages.fields.message.as('text')} />
            <input {...createMessages.fields.id.as("hidden", params.id)} />
    <input type="submit" value="Add" />
    </label> 
</form>