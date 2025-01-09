import { useState } from 'react'

import FormInput from 'shared/FormInput'

import { postStoryGroup } from 'async/fetch-story-groups'

function GroupCreationForm({ setStoryGroups }) {

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')

    async function handleCreateGroup(e) {
        e.preventDefault()
        const res = await postStoryGroup({name, description})
        if (res.ok) {
            const data = await res.json()
            setStoryGroups(prev => ({...prev, ownedGroups: [ ...prev.ownedGroups, data.result ]}))
        } else {
            console.warn('Something went wrong...')
        }
    }

    return (
        <form className="labeled-input-section" onSubmit={handleCreateGroup}>
            <FormInput name="name"
            info="This is the name of your story group that other players will see"
            labelText="Name"
            onChange={e => setName(e.target.value)}
            value={name} />

            <FormInput name="description"
            info="Add a brief description so that your group knows what to expect!"
            labelText="Description"
            onChange={e => setDescription(e.target.value)}
            value={description} />

            <input type="submit" value="Create Group" />
        </form>
    )
}

export default GroupCreationForm