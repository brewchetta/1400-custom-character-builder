import { getCharacterLevelUpOptions } from 'fetch/fetch-characters'
import { useState, useEffect, useMemo } from 'react'
import { useCharacterContext } from 'context/CharacterContext'
import SkillsInputs from 'shared/SkillsInputs'
import SpellsInputs from 'shared/SpellsInputs'
import LearnTraining from './LearnTraining'
import { postCharacterSpell } from 'fetch/fetch-character-spells'
import { patchCharacter } from 'fetch/fetch-characters'

function CharacterLevelUp({ levelUpOpen, setLevelUpOpen }) {

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


    function upgradeSkillInArray(skillName, previousSkills) {
        const mappedSkills = previousSkills.map(skill => {
            if (skill.name === skillName) {
                return { name: skillName, diceSize: skill.diceSize + 2 }
            } else {
                return skill
            }
        })
        return mappedSkills
    }


    function addNewSkill(skillName, previousSkills) {
        return [...previousSkills, { name: skillName, diceSize: 8 }]
    }


    async function levelUpSpell() {
        const res = await postCharacterSpell(currentCharacter._id, Object.values(chosenSpells)[0])
        if (res.ok) {
            const data = await res.json()
            setCurrentCharacter(prev => ({...prev, spells: data.result}))
            setLevelUpOpen(false)
        } else {
            console.warn("Something went wrong...")
        }
    }


    async function levelUpSkill() {
        const chosenSkill = chosenSkills[0]
        const prevSkill = currentCharacter.skills.find(s => s.name === chosenSkill)
        let updatedSkills
        if (prevSkill) { 
            updatedSkills = upgradeSkillInArray(chosenSkill, currentCharacter.skills) 
        } else {
            updatedSkills = addNewSkill(chosenSkill, currentCharacter.skills)
        }

        const res = await patchCharacter(currentCharacter._id, { skills: updatedSkills })
        if (res.ok) {
            const data = await res.json()
            setCurrentCharacter(data.result)
            setLevelUpOpen(false)
        } else {
            console.warn("Something went wrong...")
        }
    }


    async function levelUpTraining() {
        const updatedTrainings = [...currentCharacter.trainings.map(t => t._id), chosenTrainings[0]._id]
        const res = await patchCharacter(currentCharacter._id, {trainings: updatedTrainings})
        if (res.ok) {
            const data = await res.json()
            setCurrentCharacter(data.result)
            setLevelUpOpen(false)
        } else {
            console.warn("Something went wrong...")
        }
    }


    async function handleLevelUp() {
        if (chosenPath === "spell" && Object.values(chosenSpells).length) {
            await levelUpSpell()
        }
        if (chosenPath === "skill" && chosenSkills.length) {
            await levelUpSkill()
        }
        if (chosenPath === "training" && chosenTrainings.length) {
            await levelUpTraining()
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
                <>
                    {
                        currentCharacter.spellsMax <= (currentCharacter.spells?.length || 0) && levelUpOpen // levelUpOpen avoids the red text while closing
                        ?
                        <>
                        <p className="text-dark-red italic">You've reached your spell learning limit! Learning more will hinder your spellcasting!</p> 
                        <p className="text-dark-red italic">However, certain training can improve that limit...</p>
                        </>
                        :
                        null
                    }
                    <SpellsInputs
                    spells={ availableSpells }
                    currentSpells={ chosenSpells }
                    setCurrentSpells={ setChosenSpells }
                    maxSpells={ 1 }
                    checkboxClass="checkmark padding-small"
                    />
                </>
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