const router = '/items'

const headers = { 'Content-Type': 'application/json', 'Accept': 'application/json' }


export async function getItems() {
    return await fetch(`${router}`)
}


export async function getItemById(id) {
    return await fetch(`/${router}/${id}`)
}