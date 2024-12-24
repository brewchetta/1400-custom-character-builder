import { getCharacterLevelUpOptions } from 'fetch/fetch-characters'
import { useState, useEffect, useMemo } from 'react'
import { useCharacterContext } from 'context/CharacterContext'
import SkillsInputs from 'shared/SkillsInputs'
import SpellsInputs from 'shared/SpellsInputs'
import LearnTraining from './LearnTraining'
import { postCharacterSpell } from 'fetch/fetch-character-spells'
import { patchCharacter } from 'fetch/fetch-characters'

function CharacterLevelUp({ setLevelUpOpen }) {

    const { currentCharacter, setCurrentCharacter } =  useCharacterContext()

    const [options, setOptions] = useState({
        spells: [],
        trainings: [],
        skills: []
    })

    const [chosenPath, setChosenPath] = useState(null)

    const [chosenSkills, setChosenSkills] = useState([])
    const [chosenSpells, setChosenSpells] = useState([])
    const [chosenTrainings, setChosenTrainings] = useState([])

    const availableSkills = useMemo(() => {
        const skillsToFilter = {}
        for (let i = 0; i < currentCharacter.skills.length; i++) {
            const skill = currentCharacter.skills[i]
            if (skill.diceSize >= 12) { skillsToFilter[skill.name] = true }
        }
        return options.skills.filter(skill => !skillsToFilter[skill] )        
    }, [options])


    const availableSpells = useMemo(() => {
        const spellsToFilter = {}
        for (let i = 0; i < currentCharacter.spells.length; i++) {
            const spellName = currentCharacter.spells[i].spellData.name
            spellsToFilter[spellName] = true
        }
        return options.spells.filter(spell => !spellsToFilter[spell.name] )        
    }, [options])


    const availableTrainings = useMemo(() => {
        const trainingsToFilter = {}
        for (let i = 0; i < currentCharacter.trainings.length; i++) {
            const trainingKey = currentCharacter.trainings[i].key
            trainingsToFilter[trainingKey] = true
        }
        return options.trainings.filter(training => !trainingsToFilter[training.key] )
    }, [options])


    useEffect(() => {
        async function fetchOptions() {
            const res = await getCharacterLevelUpOptions()
            if (res.ok) {
                const data = await res.json()
                setOptions(data.result)
            } else {
                console.warn("Something went wrong...")
            } 
        }
        fetchOptions()
    }, [])


    async function handleLevelUp() {
        console.log(chosenSkills)
        if (chosenPath === "spell" && Object.values(chosenSpells).length) {
            const res = await postCharacterSpell(currentCharacter._id, Object.values(chosenSpells)[0])
            if (res.ok) {
                const data = await res.json()
                setCurrentCharacter(prev => ({...prev, spells: data.result}))
                setLevelUpOpen(false)
            } else {
                console.warn("Something went wrong...")
            }
        }
        if (chosenPath === "skill" && chosenSkills.length) {
            const chosenSkill = chosenSkills[0]
            const prevSkill = currentCharacter.skills.find(s => s.name === chosenSkill)
            // TODO UPDATE SKILLS BY EITHER ADDING OR REPLACING OLD SKILLS

            // const res = await patchCharacter(currentCharacter._id, {
            //     skills: [...currentCharacter.skills]
            // })
        }
        if (chosenPath === "training") {

        }
    }


    return (
        <div>

            <h2>It's a time of rest...</h2>

            <p>As your character takes time to rest between adventures they have the chance to reflect on their journey and push for self-improvement. Perhaps they want to learn a new skill, perhaps they train, perhaps they study, or perhaps they just enjoy a mundane life without constant threats. Tell your group one noteable thing that happened during that time and then choose a form of improvement.</p>

            <p>Learn / improve a skill, gain training, or study a new spell...</p>

            <input
            type="button"
            value="Learn a New Skill"
            onClick={() => setChosenPath('skill')}
            />

            <input
            type="button"
            value="Gain Training"
            onClick={() => setChosenPath('training')}
            />

            <input
            type="button"
            value="Study a New Spell"
            onClick={() => setChosenPath('spell')}
            />

            {/* SKILLS CHOICE */}

            {
                chosenPath === "skill"
                ?
                <SkillsInputs
                    label="You may choose a skill to learn or upgrade"
                    possibleSkills={ availableSkills }
                    currentSkills={ chosenSkills }
                    setCurrentSkills={ setChosenSkills }
                    maxSkills={ 1 }
                    checkboxClass="checkmark padding-small"
                />
                :
                null
            }


            {/* SPELLS CHOICE */}

            {
                chosenPath === "spell"
                ?
                <SpellsInputs
                    spells={ availableSpells }
                    currentSpells={ chosenSpells }
                    setCurrentSpells={ setChosenSpells }
                    maxSpells={ 1 }
                    checkboxClass="checkmark padding-small"
                />
                :
                null
            }


            {/* TRAININGS CHOICE */}

            {
                chosenPath === "training"
                ?
                <LearnTraining 
                    trainings={ availableTrainings } 
                    currentTrainings={ chosenTrainings }
                    setCurrentTrainings={ setChosenTrainings }
                />
                :
                null
            }

            {  
                chosenPath
                ?
                <input type="button"
                value="Finish"
                onClick={handleLevelUp}
                />
                :
                null
            }


        </div>
    )
}

export default CharacterLevelUp