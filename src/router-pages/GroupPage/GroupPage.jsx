import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import { getStoryGroupById } from "async/fetch-story-groups"

import LoadingAnimation from "shared/LoadingAnimation"
import InvitationForm from "./InvitationForm"

function GroupPage() {

    const { id } = useParams()
    const [groupDetails, setGroupDetails] = useState({})
    const [loading, setLoading] = useState(true)

    const { isOwner, players, storyGroup } = groupDetails

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

    
    if (loading) {
        return <LoadingAnimation />
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

        </div>
    )
}

export default GroupPage