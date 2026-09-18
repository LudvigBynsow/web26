<script lang="ts">


import {getMessages, createMessages} from "./forums.remote"

let {params} = $props();
</script>

<ol>
    {#each await getMessages(params.id) as messages}

        <span style="display: flex; align-items:center; gap:lrem;">
            <li>
            {messages.content}
            </li>
            
        </span>
        
    {/each}
</ol>

<form {...createMessages}>
    <label>
            <input {...createMessages.fields.content.as('text')} />
            <input {...createMessages.fields.forumid.as("hidden", params.id)} />
    <input type="submit" value="Add" />
    </label> 
</form>