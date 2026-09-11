<script lang="ts">
import {getUser,addUser} from "./inloggning.remote";


</script>


<form {...addUser}>
    <label>
            <input {...addUser.fields.name.as('text')} />
            <input {...addUser.fields.password.as('text')} />
    <input type="submit" value="Add" />
    </label> 
</form>

