import { useMemo } from 'react'
import { rulesPlay } from 'data/rules'
import HelpButton from 'shared/HelpButton'
import FormCheckbox from 'shared/FormCheckbox'
import { useCharacterContext } from 'context/CharacterContext'

function LearnTraining({ trainings, currentTrainings, setCurrentTrainings, maxTrainings=1 }) {

    const { currentCharacter } = useCharacterContext()

    const characterTrainings = useMemo(() => {
        const dict = {}
        currentCharacter.trainings.forEach(t => dict[t.key] = true)
        return dict
    }, [currentCharacter])

    console.log(characterTrainings)

    const trainingsLeftToChoose = maxTrainings - currentTrainings.length

    function handleChooseTraining(training) {
        if (currentTrainings.includes(training)) {
            setCurrentTrainings(prev => prev.filter(t => t !== training))
        } else {
            setCurrentTrainings(prev => [...prev, training])
        }
    }

    const renderedTrainings = trainings.map(t => {
        let prereqsMet = false
        if (!t.prerequisites.length) { 
            prereqsMet = true 
        } else if (t.prerequisites.filter(p => characterTrainings[p.key]).length) {
            prereqsMet = true
        } 
        return <FormCheckbox {...{
            key: t.key,
            name: t.key,
            labelText: `${t.name}: ${t.description}${
                t.prerequisites.length 
                ? 
                ` [Requires ${t.prerequisites.map(p => p.name)}]` 
                : 
                ''
            }`,
            onChange: () => handleChooseTraining(t),
            checked: currentTrainings.includes(t),
            disabled: (!trainingsLeftToChoose && !currentTrainings.includes(t)) || !prereqsMet,
            className: "margin-top-small boxmark"
        }} />
    })


    return (
        <div>

            <h4><HelpButton info={rulesPlay.training} /> Trainings left: { trainingsLeftToChoose }</h4>

            <div>

                { renderedTrainings }
        
            </div>

        </div>
    )
}

export default LearnTraining