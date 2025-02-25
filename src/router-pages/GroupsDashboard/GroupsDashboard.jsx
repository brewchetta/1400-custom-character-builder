import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

import { getStoryGroups } from "async/fetch-story-groups"
import { patchStoryPlayer, deleteStoryPlayer } from "async/fetch-story-players"
import { toSpinalCase } from "utilities"

import GroupCreationForm from "./GroupCreationForm"
import LoadingAnimation from "shared/LoadingAnimation"

function GroupsDashboard() {

    const [storyGroups, setStoryGroups] = useState({ownedGroups: [], playerRoles: []})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function getUserGroups() {
            const res = await getStoryGroups()
            if (res.ok) {
                const data = await res.json()
                setStoryGroups(data.result)
                setLoading(false)
            } else {
                console.warn('Something went wrong...')
                setLoading(false)
            }
        }

        getUserGroups()
    }, [])

    if (loading) {
        return <LoadingAnimation />
    }

    async function handleAcceptInvitation(role) {
        const res = await patchStoryPlayer(role._id, { acceptedInvite: true })
        if (res.ok) {
            const data = await res.json()
            setStoryGroups(prev => ({
                ...prev,
                playerRoles: prev.playerRoles.map(role => role._id === data.result._id ? data.result : role)
            }))
        } else {
            console.warn('Something went wrong...')
        }
    } 

    async function handleDeclineInvitation(role) {
        const res = await deleteStoryPlayer(role._id)
        if (res.ok) {
            setStoryGroups(prev => ({
                ...prev,
                playerRoles: prev.playerRoles.filter(r => !(r._id === role._id))
            }))
        } else {
            console.warn('Something went wrong...')
        }
    }

    console.log(storyGroups.ownedGroups)

    const renderedOwnedGroups = storyGroups.ownedGroups.map(g => (
        <div key={g._id} className="swatch-hover-background-alternating margin-small padding-small" style={{borderRadius: "15px"}}>
            <Link className='no-decoration text-black' key={g._id} to={`/story-groups/${toSpinalCase(g.name)}/${g._id}`}>{g.name}</Link>
        </div>
    ))

    const renderedPlayingInGroups = storyGroups.playerRoles
    .filter( r => r.acceptedInvite )
    .map(r => (
        <div key={r._id} className="swatch-hover-background-alternating margin-small padding-small" style={{borderRadius: "15px"}}>
            <Link className='no-decoration text-black' key={r._id} to={`/story-groups/${toSpinalCase(r.storyGroup.name)}/${r.storyGroup._id}`}>
                {r.storyGroup.name} - {r.character ? <span className='text-dark-blue'>{r.character.name}</span> : <span className='text-dark-red'>No Character Yet</span>}
            </Link>
        </div>
    ))

    const renderedInvitedGroups = storyGroups.playerRoles
    .filter( r => !r.acceptedInvite )
    .map( r => (
        <div key={r._id} className="border-black space-between padding-small">
            <span>Invitation to Join {r.storyGroup.name}</span>
            <div>
                <button onClick={() => handleAcceptInvitation(r)} className="text-black background-white border-black">Accept</button>
                <button onClick={() => handleDeclineInvitation(r)} className="text-black background-white border-black">Decline</button>
            </div>
        </div>
    ))


    return (
        <div>

            <h1>Story Groups</h1>

            <p>A story group is a group of friends committed to a specific story which might be a one-shot, a longer series of stories like a campaign, or something in between.</p>

            <p>Here you can see your current story groups, create new groups as a storyteller, or join groups that you've been invited to.</p>


            <div className="flex-wrap-container space-around">

                <GroupCreationForm setStoryGroups={setStoryGroups} />

                {
                    renderedInvitedGroups.length
                    ?
                    <div style={{ width: "25%", minWidth: "20em" }} className='border-black margin-medium background-white'>
                        <h2>Invitations</h2>
                        <div>
                            { renderedInvitedGroups }
                        </div>
                    </div>
                    :
                    null
                }


                <div style={{ width: "25%", minWidth: "20em" }} className='border-black margin-medium background-white padding-medium'>
                    <h2>Groups as a Storyteller</h2>
                    <div className="flex-wrap-container space-between">
                        { renderedOwnedGroups }
                    </div>
                </div>

                <div style={{ width: "25%", minWidth: "20em" }} className='border-black margin-medium background-white padding-medium'>
                    <h2>Groups as a Player</h2>
                    <div>
                        { renderedPlayingInGroups }
                    </div>
                </div>

            </div>

        </div>
    )
}

export default GroupsDashboard