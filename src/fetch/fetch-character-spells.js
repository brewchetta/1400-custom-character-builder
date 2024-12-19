const router = '/characters'

const headers = { 'Content-Type': 'application/json', 'Accept': 'application/json' }


export async function postCharacterSpell(id, payload) {
    return await fetch(`${router}/${id}/spells`, {
        method: 'POST',
        headers,
        body: JSON.stringify(payload)
    })
}


export async function patchCharacterSpell(id, spellID, payload) {
    return await fetch(`${router}/${id}/spells/${spellID}`, {
        method: 'PATCH',
        headers,
        body: JSON.stringify(payload)
    })    
}


export async function deleteCharacterSpell(id, spellID) {
    return await fetch(`${router}/${id}/spells/${spellID}`, { method: 'DELETE' })

}


export async function postCharacterRitual(id, payload) {
    return await fetch(`${router}/${id}/rituals`, {
        method: 'POST',
        headers,
        body: JSON.stringify(payload)
    })
}


export async function patchCharacterRitual(id, spellID, payload) {
    return await fetch(`${router}/${id}/rituals/${spellID}`, {
        method: 'PATCH',
        headers,
        body: JSON.stringify(payload)
    })
    
}


export async function deleteCharacterRitual(id, spellID) {
    return await fetch(`${router}/${id}/rituals/${spellID}`, { method: 'DELETE' })

}