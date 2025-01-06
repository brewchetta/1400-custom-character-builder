const router = '/spells'


export async function getAllSpells() {
    return await fetch(`${router}`)
}


export async function getSpellById(id) {
    return await fetch(`${router}`)
}