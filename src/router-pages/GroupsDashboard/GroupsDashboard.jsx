import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

import { getStoryGroups } from "async/fetch-story-groups"
import { toSpinalCase } from "utilities"

import GroupCreationForm from "../GroupCreationForm"
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

    const renderedOwnedGroups = storyGroups.ownedGroups.map(g => <Link key={g._id} to={`/story-groups/${toSpinalCase(g.name)}/${g._id}`}>{g.name}</Link>)

    const renderedPlayingInGroups = storyGroups.playerRoles.map(r => <Link key={r._id} to={`/story-groups/${toSpinalCase(r.storyGroup.name)}/${r.storyGroup._id}`}>{r.character ? r.character.name : "Invitation"} in {r.storyGroup.name}</Link>)

    return (
        <div>

            <h1>Story Groups</h1>

            <p>A story group is a group of friends committed to a specific story which might be a one-shot, a longer series of stories like a campaign, or something in between.</p>

            <p>Here you can see your current story groups, create new groups as a storyteller, or join groups that you've been invited to.</p>

            <GroupCreationForm setStoryGroups={setStoryGroups} />

            <div>
                <h2>Your Groups as Storyteller</h2>
                { renderedOwnedGroups }
            </div>

            <div>
                <h2>Your Groups as Player</h2>
                { renderedPlayingInGroups }
            </div>


        </div>
    )
}

export default GroupsDashboard

// Things we will need:
// - Tiles for each story group to show the story group name and other relevant details.
// - STRETCH: Invites via email
// - Dashboard shows current invites
// - Story group show page - three modes:
//      - Owner of group can edit name/description, and invite people
//      - New player can answer story questions and link/make character
//      - Returning player can see other players, their story answers, their notes, some character details

// BACKEND DONE
// - StoryGroup model
// - name, description, owner (user), players (user), characters, invitations?
// - for players / characters it might make sense to have a three way join (group, user, character) named player with their story questions / answers / notes?
// - Player model
// - group(_id), user(_id), character(_id), acceptedInvite: Boolean default false, worldQuestions: array of objects with questions and answers, storyNotes: String

// DONE
// - The dashboard page to see and manage your current story groups. 
// - A create new story group page. This should allow a storyteller to create a new group with a name and a synopsis. Can then invite players based on name.