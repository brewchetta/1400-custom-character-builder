import { useState, useRef } from "react"

import PlayerStoryQuestionsCard from "./PlayerStoryQuestionsCard"
import FormInput from "shared/FormInput"

import { randomArrayItem } from "utilities"

import { postStoryPlayerQuestion } from "async/fetch-story-players"

const worldbuildingQuestions = [
    `Describe a distant land.`,
    `Describe the town, village or city that your adventurer came from.`,
    `What is the name of a tavern your adventurer frequents?`,
    `Describe an upcoming festival or holy day.`,
    `What important event happened before your adventurer was born?`,
    `Describe some nearby ruins and the rumors that surround them.`,
    `Monsters/villains have attacked recently. Who are they?`,
    `Name a god who protects or covets these lands.`,
    `Name and describe a public figure like a monarch or a civil leader.`,
    `What is an interesting custom or taboo here?`,
    `Make up a prompt and answer it!` // this needs to be a special option
]

function GroupStoryQuestions({ players, currentPlayer, setCurrentPlayer }) {

    const answerInputRef = useRef(null)

    const [question, setQuestion] = useState('')
    const [answer, setAnswer] = useState('')

    async function handleAddQuestion(e) {
        e.preventDefault()
        if (!currentPlayer) {
            return
        }

        const res = await postStoryPlayerQuestion(currentPlayer._id, {question, answer})
        if (res.ok) {
            const data = await res.json()
            setCurrentPlayer(data.result)
            setQuestion('')
            setAnswer('') 
        } else {
            console.warn('Something went wrong...')
        }
    }

    function handleChooseRandomQuestion() {
        setQuestion( randomArrayItem(worldbuildingQuestions) )
        setAnswer('')
        answerInputRef.current.focus()
    }

    const renderedOtherQuestions = players
    .filter(p => p._id !== currentPlayer?._id)
    .map(p => <PlayerStoryQuestionsCard key={p._id} player={p} />)

    const renderedPredefinedQuestions = worldbuildingQuestions
    .map(q => <li key={q}>{q} <button onClick={() => {setQuestion(q); setAnswer(''); answerInputRef.current.focus()}}>Answer This</button></li>)


    return (
        <div className='padding-medium background-white border-black margin-small'>

            <h2>Worldbuilding Questions</h2>

            <p>To help out your Storyteller you should answer a few questions about the world that your group is creating. You can click any of the questions below to answer them or just write in a question of your own choosing.</p>

            <div style={{display: 'grid', gridTemplateColumns: "1fr 1fr"}}>

                <ol className="list-style-decimal">
                    { renderedPredefinedQuestions }
                    <button onClick={handleChooseRandomQuestion}>Random Questions</button>
                </ol>

                {
                    currentPlayer
                    ? // if currentPlayer exists
                    <div className="padding-medium">
                        <form className="labeled-input-section" onSubmit={handleAddQuestion}>

                            <FormInput name="question-input" labelText="Question" style={{minWidth: "80%"}} onChange={e => setQuestion(e.target.value)} value={question} />
                            <FormInput reference={answerInputRef} name="answer-input" labelText="Answer" onChange={e => setAnswer(e.target.value)} value={answer} />

                            <input type="submit" value="Add Your Answer" />

                        </form>

                        <h3 className='border-top-black padding-top-medium'>What you've written so far:</h3>

                        {<PlayerStoryQuestionsCard player={currentPlayer} titleOn={false} />}
                    </div>
                    : // if currentPlayer doesn't exist (is host/storyteller)
                    null
                }

                <div>
                    <h3>What people have written so far:</h3>
                    
                    <div>
                    { renderedOtherQuestions }
                    </div>
                </div>

            </div>

        </div>
    )
}

export default GroupStoryQuestions