import { useEffect, useMemo, useState } from "react"
import { useParams } from "react-router-dom"

import { useCurrentUserContext } from "context/CurrentUserContext"

import { getStoryGroupById } from "async/fetch-story-groups"

import LoadingAnimation from "shared/LoadingAnimation"
import InvitationForm from "./InvitationForm"
import GroupStoryQuestions from "./GroupStoryQuestions"

function GroupPage() {

    const { currentUser } = useCurrentUserContext()
    const { id } = useParams()
    const [groupDetails, setGroupDetails] = useState({})
    const [loading, setLoading] = useState(true)

    const { isOwner, players, storyGroup } = groupDetails

    console.log(players)

    useEffect(() => {
        async function effect() {
            const res = await getStoryGroupById(id)
            if (res.ok) {
                const data = await res.json()
                setGroupDetails(data.result)
                setLoading(false)
            } else {
                console.warn('Something went wrong...')
            }
        }

        effect()
    }, [])

    const currentPlayer = useMemo(() => players?.find(p => p.user._id === currentUser._id), [players])
    
    if (loading) {
        return <LoadingAnimation />
    }

    function setCurrentPlayer(currentPlayerData) {
        setGroupDetails(prev => ({...prev, players: prev.players.map(p => p._id === currentPlayerData._id ? currentPlayerData : p)}))
    }

    const renderedPlayersInvited = players.filter(p => !p.acceptedInvite)
    .map(p => <p key={p._id}>{p.user.username} has been invited</p>)

    const renderedPlayersWithoutCharacters = players.filter(p => p.acceptedInvite && !p.character)
    .map(p => <p key={p._id}>{p.user.username} needs to add a character</p>)

    const renderedPlayersNormal = players.filter(p => p.acceptedInvite && p.character)
    .map(p => <p key={p._id}>{p.user.username} playing as {p.character.name}</p>)

    return (
        <div>

            <h1>{storyGroup.name}</h1>
            <p>Created by { isOwner ? "you" : storyGroup.owner.username }</p>

            <p>{storyGroup.description}</p>

            { // section for user owner
                isOwner
                ?
                (
                    <>
                        <InvitationForm storyGroup={storyGroup} setGroupDetails={setGroupDetails} />
                    </>
                )
                :
                null
            }

            {/* SHOW CHARACTERS / PLAYERS SECTION */}

            <div>

                { renderedPlayersNormal }

                { renderedPlayersWithoutCharacters }

                { renderedPlayersInvited }
                
            </div>

            <GroupStoryQuestions players={players} currentPlayer={currentPlayer} setCurrentPlayer={setCurrentPlayer} />

        </div>
    )
}

export default GroupPage