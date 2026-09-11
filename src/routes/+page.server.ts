import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
export const load: PageServerLoad = async ({ cookies }) => {
    const shouldBlock = cookies.get("name");
    if (!shouldBlock) {
        redirect(303, '/login/');
        console.log("hej")
    }
};