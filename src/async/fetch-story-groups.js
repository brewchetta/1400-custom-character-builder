const router = '/story-groups'
const headers = { 'Content-Type': 'application/json', 'Accept': 'application/json' }


export async function getStoryGroups() { // returns user story groups (owner or player)
    return await fetch(`${router}`)
}


export async function getStoryGroupById(id) { // cannot access story groups you are not linked to
    return await fetch(`${router}/${id}`)
}

export async function postStoryGroup(payload) {
    return await fetch(`${router}`, {
        method: 'POST',
        headers,
        body: JSON.stringify(payload)
    })
}