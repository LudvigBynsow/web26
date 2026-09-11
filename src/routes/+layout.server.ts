
import type { LayoutServerLoad } from './$types';




export const load: LayoutServerLoad = async ({ cookies }) => {
    const value = cookies.get("name");
    return{myData: value ?? null };
    
};


