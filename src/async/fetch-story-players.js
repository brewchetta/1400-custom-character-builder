const router = '/story-players'
const headers = { 'Content-Type': 'application/json', 'Accept': 'application/json' }

export async function postStoryPlayer(payload) {
    return await fetch(`${router}`, {
        method: 'POST',
        headers,
        body: JSON.stringify(payload)
    })
}

export async function patchStoryPlayer(id, payload) {
    return await fetch(`${router}/${id}`, {
        method: 'PATCH',
        headers,
        body: JSON.stringify(payload)
    })
}