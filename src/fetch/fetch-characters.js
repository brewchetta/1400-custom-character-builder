const router = '/characters'

const headers = { 'Content-Type': 'application/json', 'Accept': 'application/json' }


export async function getAllCharacters() {
    return await fetch(`${router}`)
}


export async function getCharacter(id) {
    return await fetch(`${router}/${id}`)
}


export async function getCharacterCreationOptions() {
    return await fetch(`${router}/creation-options`)
}


export async function postCharacter(payload) {
    return await fetch(`${router}`, {
        method: 'POST',
        headers,
        body: JSON.stringify(payload)
    })
}


export async function patchCharacter(id, payload) {
    return await fetch(`${router}/${id}`, {
        method: 'PATCH',
        headers,
        body: JSON.stringify(payload)
    })
    
}


export async function deleteCharacter(id) {
    return await fetch(`${router}/${id}`, { method: 'DELETE' })

}