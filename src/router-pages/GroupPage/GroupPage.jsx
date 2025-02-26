import { useEffect, useMemo, useState } from "react"
import { useParams } from "react-router-dom"

import { useCurrentUserContext } from "context/CurrentUserContext"

import { getStoryGroupById } from "async/fetch-story-groups"

import LoadingAnimation from "shared/LoadingAnimation"
import StateTabs from "shared/StateTabs"
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

            <StateTabs tabs={['Players', 'Worldbuilding', 'Notes']} current={currentTab} onChoose={setCurrentTab} />

            {/* SHOW PLAYERS SECTION */}
            

            {
                currentTab === 'Players'
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
                currentTab === 'Worldbuilding'
                ?
                <GroupStoryQuestions players={players} currentPlayer={currentPlayer} setCurrentPlayer={setCurrentPlayer} />
                :
                null
            }

            {/* SHOW STORY NOTES SECTIONS */}

            {
                currentTab === 'Notes'
                ?
                <>
                <p>Notes section under construction please disregard the mess</p>
                <img style={{width: '40%', border: 'solid black 2px'}} src='https://exarc.net/sites/default/files/figure-14.jpg' alt='diagram of medieval construction' />
                </>
                :
                null
            }


        </div>
    )
}

export default GroupPage