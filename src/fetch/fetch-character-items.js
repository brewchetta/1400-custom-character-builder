const router = '/characters'

const headers = { 'Content-Type': 'application/json', 'Accept': 'application/json' }


export async function postCharacterItem(id, payload) {
    return await fetch(`${router}/${id}/items`, {
        method: 'POST',
        headers,
        body: JSON.stringify(payload)
    })
}


export async function postCharacterItemBuy(id, payload) {
    return await fetch(`${router}/${id}/items/buy`, {
        method: 'POST',
        headers,
        body: JSON.stringify(payload)
    })
}


export async function patchCharacterSpell(id, itemID, payload) {
    return await fetch(`${router}/${id}/items/${itemID}`, {
        method: 'PATCH',
        headers,
        body: JSON.stringify(payload)
    })    
}


export async function deleteCharacterSpell(id, itemID) {
    return await fetch(`${router}/${id}/items/${itemID}`, { method: 'DELETE' })

}