import { useState } from 'react'

import { postStoryPlayer } from 'async/fetch-story-players'

import FormInput from 'shared/FormInput'

function InvitationForm({storyGroup, setGroupDetails}) {

    const [username, setUsername] = useState('')

    async function handleInvite(e) {
        e.preventDefault()
        const res = await postStoryPlayer({ storyGroup: storyGroup._id, username })
        if (res.ok) {
            const data = await res.json()
            setGroupDetails(prev => ({...prev, players: [...prev.players, data.result]}))
            setUsername('')
        } else {
            console.warn('Something went wrong...')
        }
    }

    return (
        <form className="labeled-input-section" onSubmit={handleInvite}>
            <FormInput name="invite-by-name" 
            info="You may invite players with their username or email here"
            labelText="Invite Player"
            onChange={e => setUsername(e.target.value)}
            value={username} />

            <input type="submit" value="Invite" />
        </form>
    )
}

export default InvitationForm