import db from "$lib/prisma"

export async function get(){

    const users = await db.user.findMany()

    return {
        body: { users }
    }
}

