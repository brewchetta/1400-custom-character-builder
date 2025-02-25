import { useState } from "react"

import { useCharacterContext } from "context/CharacterContext"

import HelpButton from "shared/HelpButton"
import SaveAndEditButton from "shared/SaveAndEditButton"

import { rulesPlay } from "data/rules"

import { patchCharacter } from "async/fetch-characters"
import useCheckForOwnedCharacter from "hooks/useCheckForOwnedCharacter"

function CharacterTraining() {

    const { currentCharacter: { trainings, _id }, setCurrentCharacter } = useCharacterContext()
    const [editable, setEditable] = useState(false)
    const ownedCharacter = useCheckForOwnedCharacter()

    async function removeTraining(trainingId) {
        if (!ownedCharacter) return
        const updatedTrainings = trainings.map(t => t._id)
        .filter(t => t !== trainingId)

        const res = await patchCharacter(_id, {trainings: updatedTrainings})
        if (res.ok) {
            const data = await res.json()
            setCurrentCharacter(data.result)
            setEditable(false)
        } else {
            console.warn("Something went wrong...")
        }
    }

    const renderedTrainings = trainings.map(t => (
        editable
        ? // EDITABLE
        <div key={t.key}>
            <p>
                <b>{t.name}:</b> {t.description}
                <button className="border-none text-dark-red background-none" onClick={() => removeTraining(t._id)}>Remove</button>
            </p>
        </div>
        : // NOT EDITABLE
        <div key={t.key}>
            <p><b>{t.name}:</b> {t.description}</p>
        </div>
    ) )

    return (
        <div className="border-black background-white padding-small arrows-background relative">
            <h3>Training<SaveAndEditButton displayCondition={ownedCharacter} editable={editable} setEditable={setEditable} /></h3> 
            <HelpButton 
                className="position-top-right"
                info={ rulesPlay.training } />
            { renderedTrainings }
        </div>
    )
}

export default CharacterTraining