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

export async function deleteStoryPlayer(id) {
    return await fetch(`${router}/${id}`, {
        method: 'DELETE'
    })
}

// ADDITIONAL POSTS

export async function postStoryPlayerQuestion(id, payload) {
    return await fetch(`${router}/${id}/worldbuilding`, {
        method: 'POST',
        headers,
        body: JSON.stringify(payload)
    })
}

export async function deleteStoryPlayerQuestion(id, questionId) {
    return await fetch(`${router}/${id}/worldbuilding/${questionId}`, {
        method: 'DELETE'
    })
}

export async function postStoryPlayerCharacter(id, payload) {
    return await fetch(`${router}/${id}/characters`, {
        method: 'POST',
        headers,
        body: JSON.stringify(payload)
    })
}