import type { ServerLayoutLoad } from './$types';

export const load: ServerLayoutLoad = async ({ cookies }) => {
    const jwtToken = await cookies.get('klokking-token');
    return { jwtToken };
};

