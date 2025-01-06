import { useCharacterContext } from "context/CharacterContext"
import HelpButton from "shared/HelpButton"
import { rulesPlay } from "data/rules"
import { useState } from "react"
import SaveAndEditButton from "shared/SaveAndEditButton"
import { patchCharacter } from "async/fetch-characters"

function CharacterTraining() {

    const { currentCharacter: { trainings, _id }, setCurrentCharacter } = useCharacterContext()
    const [editable, setEditable] = useState(false)

    async function removeTraining(trainingId) {
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
        <div className="border-black background-white padding-small quill-background relative">
            <h3>Training<SaveAndEditButton editable={editable} setEditable={setEditable} /></h3> 
            <HelpButton 
                className="position-top-right"
                info={ rulesPlay.training } />
            { renderedTrainings }
        </div>
    )
}

export default CharacterTraining