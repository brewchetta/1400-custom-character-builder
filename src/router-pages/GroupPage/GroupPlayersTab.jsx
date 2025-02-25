import { Link } from "react-router-dom"
import InvitationForm from "./InvitationForm"
import LinkPlayerCharacter from "./LinkPlayerCharacter"

import { toSpinalCase } from "utilities"

function GroupPlayersTab({
    isOwner, 
    currentPlayer, 
    setCurrentPlayer, 
    storyGroup, 
    setGroupDetails, 
    players
}) {

    const renderedPlayersNormal = players.filter(p => p.acceptedInvite && p.character)
    .map(p => <p key={p._id}>{p.user.username} playing as <Link to={`/characters/${toSpinalCase(p.character.name)}/${p.character._id}`}>{p.character.name}</Link></p>)

    const renderedPlayersInvited = players.filter(p => !p.acceptedInvite)
    .map(p => <p key={p._id}>{p.user.username} has been invited</p>)

    const renderedPlayersWithoutCharacters = players.filter(p => p.acceptedInvite && !p.character)
    .map(p => <p key={p._id}>{p.user.username} needs to add a character</p>)

    return (
        <div className='padding-medium background-white border-black margin-small'>

            { // section for user owner
                isOwner ? <InvitationForm storyGroup={storyGroup} setGroupDetails={setGroupDetails} /> : null
            }

            { renderedPlayersNormal }

            { renderedPlayersWithoutCharacters }

            { renderedPlayersInvited }
            
            <LinkPlayerCharacter displayCondition={currentPlayer && !currentPlayer.character}
            currentPlayer={currentPlayer} 
            setCurrentPlayer={setCurrentPlayer} 
            storyGroup={storyGroup} />
        </div>
    )
}

export default GroupPlayersTab