import { useState, useRef } from "react"

import PlayerStoryQuestionsCard from "./PlayerStoryQuestionsCard"
import FormInput from "shared/FormInput"

import { randomArrayItem } from "utilities"

import { postStoryPlayerQuestion } from "async/fetch-story-players"

import { deleteStoryPlayerQuestion } from "async/fetch-story-players"

import worldbuildingQuestions from "data/_worldbuildingCore"

function GroupStoryQuestions({ players, currentPlayer, setCurrentPlayer }) {

    const answerInputRef = useRef(null)

    const [question, setQuestion] = useState('')
    const [answer, setAnswer] = useState('')

    function handleChangeAnswer(e) {
        setAnswer(e.target.value)
        e.target.style.height = ""
        e.target.style.height = e.target.scrollHeight + 3 + 'px'
    }

    // console.log(currentPlayer)

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

    async function handleDeleteQuestion(id) {
        // console.log(currentPlayer, id)
        const res = await deleteStoryPlayerQuestion(currentPlayer._id, id)
        if (res.ok) {
            const data = await res.json()
            setCurrentPlayer(data.result)
        } else {
            console.warn("Something went wrong...")
        }
    }

    const renderedOtherQuestions = players
    .filter(p => p._id !== currentPlayer?._id)
    .map(p => <PlayerStoryQuestionsCard key={p._id} player={p} />)

    const renderedPredefinedQuestions = worldbuildingQuestions
    .map(q => <li style={{cursor: 'pointer'}} key={q}>
        <button className='border-none padding-small text-black background-white' onClick={() => {setQuestion(q); setAnswer(''); answerInputRef.current.focus()}}>{q}</button>
    </li>)


    return (
        <div className='padding-medium background-white border-black margin-small'>

            <h2>Worldbuilding Questions</h2>

            <p>To help out your Storyteller you should answer a few questions about the world that your group is creating. You can click any of the questions below to answer them or just write in a question of your own choosing. <span className="text-dark-green">Try to answer 3-5 questions</span>.</p>

            <div className='flex-wrap-container space-between'>

                {/* TODO: Make this its own component please */}
                <ol className="list-style-decimal" style={{maxWidth: '40em'}}>
                    { renderedPredefinedQuestions }
                    <button onClick={handleChooseRandomQuestion}>Random Question</button>
                </ol>

                { // TODO: make this its own component please
                    currentPlayer
                    ? // if currentPlayer exists
                    <div className="padding-bottom-medium" style={{maxWidth: '40em'}}>
                        <form className="labeled-input-section" onSubmit={handleAddQuestion}>

                            <FormInput name="question-input" labelText="Question" style={{minWidth: "80%"}} onChange={e => setQuestion(e.target.value)} value={question} />

                            <label htmlFor='answer-input'>Answer</label>
                            <textarea style={{minWidth: "80%"}} name="answer-input" onChange={handleChangeAnswer} value={answer} ref={answerInputRef} />

                            <input type="submit" value="Add Your Answer" />

                        </form>

                        <h3 className='border-top-black padding-top-medium'>What you've written so far:</h3>

                        {<PlayerStoryQuestionsCard player={currentPlayer} titleOn={false} currentPlayer={true} handleDeleteQuestion={handleDeleteQuestion} />}
                    </div>
                    : // if currentPlayer doesn't exist (is host/storyteller)
                    null
                }

                {/* TODO: Make this its own component please */}
                <div className="border-top-black">
                    <h3>What other players have written so far:</h3>
                    
                    <div>
                    { renderedOtherQuestions }
                    </div>
                </div>

            </div>

        </div>
    )
}

export default GroupStoryQuestions