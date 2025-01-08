import { useState, useEffect, useMemo } from 'react'

import { getCharacterLevelUpOptions } from 'async/fetch-characters'
import { postCharacterSpell } from 'async/fetch-character-spells'
import { patchCharacter } from 'async/fetch-characters'

import { useCharacterContext } from 'context/CharacterContext'
import { useDarkModeContext } from 'context/DarkModeContext'

import SkillsInputs from 'shared/SkillsInputs'
import SpellsInputs from 'shared/SpellsInputs'
import LearnTraining from './LearnTraining'

import spellImg from 'assets/images/alchemy-symbols.png'
import spellImgDark from 'assets/images/alchemy-symbols-dark.png'
import skillImg from 'assets/images/quill-drawing.png'
import skillImgDark from 'assets/images/quill-drawing-dark.png'
import trainingImg from 'assets/images/crossed-arrows.png'
import trainingImgDark from 'assets/images/crossed-arrows-dark.png'


function CharacterLevelUp({ levelUpOpen, setLevelUpOpen }) {

    const { currentCharacter, setCurrentCharacter } =  useCharacterContext()
    const { darkMode } = useDarkModeContext()

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
        const skillsToFilter = {} // fill hash with skill names
        for (let i = 0; i < currentCharacter.skills.length; i++) {
            const skill = currentCharacter.skills[i]
            if (skill.diceSize >= 12) { skillsToFilter[skill.name] = true }
        }
        return options.skills.filter(skill => !skillsToFilter[skill] ) // filter based on hash keys
    }, [options])


    const availableSpells = useMemo(() => {
        const spellsToFilter = {} // fill hash with spell names
        for (let i = 0; i < currentCharacter.spells.length; i++) {
            const spellName = currentCharacter.spells[i].name
            spellsToFilter[spellName] = true
        }
        return options.spells.filter(spell => !spellsToFilter[spell.name] ) // filter based on hash keys
    }, [options])


    const availableTrainings = useMemo(() => {
        const trainingsToFilter = {} // fill hash with training names
        for (let i = 0; i < currentCharacter.trainings.length; i++) {
            const trainingKey = currentCharacter.trainings[i].key
            trainingsToFilter[trainingKey] = true
        }
        return options.trainings.filter(training => !trainingsToFilter[training.key] ) // filter based on hash keys
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
        console.log(Object.values(chosenSpells)[0])
        const res = await postCharacterSpell(currentCharacter._id, {_id: Object.values(chosenSpells)[0]._id })
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

            <div className="flex-wrap-container centered">
                <button className="text-black border-black background-white" style={{ minWidth: "25%" }} onClick={() => setChosenPath('skill')}>
                    {
                        !darkMode
                        ? // LIGHT MODE
                        <img style={{width: '10em'}} src={skillImgDark} alt="" />
                        : // DARK MODE
                        <img style={{width: '10em'}} src={skillImg} alt="" />
                    }
                    <br/>
                    <span className="text-large">Learn a New Skill</span>
                </button>

                <button className="text-black border-black background-white" style={{ minWidth: "25%" }} onClick={() => setChosenPath('training')}>
                    {
                        !darkMode
                        ? // LIGHT MODE
                        <img style={{width: '10em'}} src={trainingImgDark} alt="" />
                        : // DARK MODE
                        <img style={{width: '10em'}} src={trainingImg} alt="" />
                    }
                    <br/>
                    <span className="text-large">Gain Training</span>
                </button>

                <button className="text-black border-black background-white" style={{ minWidth: "25%" }} onClick={() => setChosenPath('spell')}>
                    {
                        !darkMode
                        ? // LIGHT MODE
                        <img style={{width: '10em'}} src={spellImgDark} alt="" />
                        : // DARK MODE
                        <img style={{width: '10em'}} src={spellImg} alt="" />
                    }
                    <br/>
                    <span className="text-large">Study a New Spell</span>
                </button>
            </div>


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