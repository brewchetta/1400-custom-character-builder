import { useCharacterContext } from "context/CharacterContext"
import HelpButton from "shared/HelpButton"
import { rulesPlay } from "data/rules"

function CharacterTraining() {

    const { currentCharacter: { trainings } } = useCharacterContext()

    const renderedTrainings = trainings.map(t => (
        <div key={t.key}>
            <p><b>{t.name}:</b> {t.description}</p>
        </div>
    ) )

    return (
        <div className="border-black background-white padding-small quill-background relative">
            <h3>Training:</h3> 
            <HelpButton 
                className="position-top-right"
                info={ rulesPlay.training } />
            { renderedTrainings }
        </div>
    )
}

export default CharacterTraining