import { useEffect } from 'react'
import FormSelect from 'shared/FormSelect'
import ConditionalWrapper from 'shared/ConditionalWrapper'
import HelpButton from 'shared/HelpButton'
import { rulesPlay } from 'data/rules'

function CharacterTrainingSelection({ availableTrainings, currentTraining, setCurrentTraining }) {


    useEffect(() => {
        setCurrentTraining(null)
    }, [availableTrainings])


    function handleTrainingChange(e) {
        const selectedTraining = availableTrainings.find(t => t.key === e.target.value)
        setCurrentTraining(selectedTraining || 'default')
    }


    return (
        <div>

            <h4><HelpButton info={ rulesPlay.training } /> Choose Your Training</h4>

            <FormSelect
            value={currentTraining?.key || 'default'}
            onChange={handleTrainingChange}
            labelText="Training: "
            defaultText='--- Choose how you were trained ---'
            >
                {availableTrainings.map(t => <option key={t.key} value={t.key}>{t.name}</option>)}
            </FormSelect>

            {
                currentTraining
                ?
                <p>{currentTraining.description}</p>
                :
                null
            }

        </div>
    )
}

export default ConditionalWrapper(CharacterTrainingSelection)