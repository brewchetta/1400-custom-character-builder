const router = '/rituals'


export async function getAllRituals() {
    return await fetch(`${router}`)
}


export async function getRitualById(id) {
    return await fetch(`${router}`)
}