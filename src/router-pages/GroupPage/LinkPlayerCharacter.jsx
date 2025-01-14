import { useState, useEffect } from "react"

import ConditionalWrapper from "shared/ConditionalWrapper"
import LinkPlayerCharacterCard from "./LinkPlayerCharacterCard"

import { getAllCharacters } from "async/fetch-characters"
import { patchStoryPlayer } from "async/fetch-story-players"
import { toSpinalCase } from "utilities"

import { Link } from "react-router-dom"

function LinkPlayerCharacter({ storyGroup, currentPlayer, setCurrentPlayer }) {

    const [characters, setCharacters] = useState([])

    useEffect(() => {
        async function effect() {
            const res = await getAllCharacters()
            if (res.ok) {
                const data = await res.json()
                setCharacters(data.result)
            } else {
                console.warn("Something went wrong...")
            }
        }
    
        effect()
    }, [])

    async function handleAttachCharacterToPlayer(character) {
        console.log({character})
        const res = await patchStoryPlayer(currentPlayer._id, { character: character._id })
        if (res.ok) {
            const data = await res.json()
            setCurrentPlayer(data.result)
        } else {
            console.warn("Something went wrong...")
        }
    } 


    const renderedCharacterOptions = characters.map(c => <LinkPlayerCharacterCard key={c._id} character={c} handleAttachCharacterToPlayer={handleAttachCharacterToPlayer} />)

    return (
        <div>


            <h2>Choose Your Character:</h2>
            <Link to={`/story-groups/${toSpinalCase(storyGroup.name)}/${storyGroup._id}/create-character/${currentPlayer._id}`}>
                <button>Create A New Character</button>
            </Link>

            { renderedCharacterOptions }

        </div>
    )
}

export default ConditionalWrapper(LinkPlayerCharacter)

// display condtion --> !character && user.characters