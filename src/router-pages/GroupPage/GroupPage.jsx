import { useEffect, useMemo, useState } from "react"
import { useParams } from "react-router-dom"

import { useCurrentUserContext } from "context/CurrentUserContext"

import { getStoryGroupById } from "async/fetch-story-groups"

import LoadingAnimation from "shared/LoadingAnimation"
import GroupStoryQuestions from "./GroupStoryQuestions"
import GroupPlayersTab from "./GroupPlayersTab"

function GroupPage() {

    const { currentUser } = useCurrentUserContext()
    const { id } = useParams()
    const [groupDetails, setGroupDetails] = useState({})
    const [currentTab, setCurrentTab] = useState('players')
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

    const currentPlayer = useMemo(() => players?.find(p => p.user._id === currentUser._id), [players])
    
    if (loading) {
        return <LoadingAnimation />
    }

    function setCurrentPlayer(currentPlayerData) {
        setGroupDetails(prev => ({...prev, players: prev.players.map(p => p._id === currentPlayerData._id ? currentPlayerData : p)}))
    }

    return (
        <div>

            <h1>{storyGroup.name}</h1>
            <p>Created by { isOwner ? "you" : storyGroup.owner.username }</p>

            <p>{storyGroup.description}</p>

            <button className={currentTab === "players" ? "border-black text-black background-light-grey" : "border-black text-black background-white"}
            onClick={() => setCurrentTab('players')}>Players</button>

            <button className={currentTab === "worldbuilding" ? "border-black text-black background-light-grey" : "border-black text-black background-white"}
            onClick={() => setCurrentTab('worldbuilding')}>Worldbuilding</button>

            <button className={currentTab === "notes" ? "border-black text-black background-light-grey" : "border-black text-black background-white"}
            onClick={() => setCurrentTab('notes')}>Story Notes</button>

            {/* SHOW PLAYERS SECTION */}
            

            {
                currentTab === 'players'
                ?
                <GroupPlayersTab {...{
                    isOwner, 
                    currentPlayer, 
                    setCurrentPlayer, 
                    storyGroup, 
                    setGroupDetails, 
                    players
                }} />
                :
                null
            }


            {/* SHOW STORY QUESTIONS SECTION */}

            {
                currentTab === 'worldbuilding'
                ?
                <GroupStoryQuestions players={players} currentPlayer={currentPlayer} setCurrentPlayer={setCurrentPlayer} />
                :
                null
            }

            {/* SHOW STORY NOTES SECTIONS */}

            {
                currentTab === 'notes'
                ?
                <p>Notes section under construction please disregard the mess</p>
                :
                null
            }


        </div>
    )
}

export default GroupPage