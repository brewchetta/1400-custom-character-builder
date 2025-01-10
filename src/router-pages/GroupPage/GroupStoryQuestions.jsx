import { useState } from "react"

import PlayerStoryQuestionsCard from "./PlayerStoryQuestionsCard"
import FormInput from "shared/FormInput"

import { postStoryPlayerQuestion } from "async/fetch-story-players"

function GroupStoryQuestions({ players, currentPlayer, setCurrentPlayer }) {

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

    const renderedOtherQuestions = players
    .filter(p => p._id !== currentPlayer?._id)
    .map(p => <PlayerStoryQuestionsCard key={p._id} player={p} />)


    return (
        <div>

            <h2>Worldbuilding Questions</h2>

            <p>To help out your Storyteller you should answer a few questions about the world that your group is creating. You can click any of the questions below to answer them or just write in a question of your own choosing.</p>

            {/* THE QUESTIONS GO HERE */}

            {/* RANDOM QUESTION BUTTON */}

            <h3>What people have written so far:</h3>
            
            <div>
             { renderedOtherQuestions }
            </div>

            {
                currentPlayer
                ? // if currentPlayer exists
                <>
                <h3>What you've written so far:</h3>

                {<PlayerStoryQuestionsCard player={currentPlayer} titleOn={false} />}

                <form className="labeled-input-section" onSubmit={handleAddQuestion}>

                    <FormInput name="question-input" labelText="Question" onChange={e => setQuestion(e.target.value)} value={question} />
                    <FormInput name="answer-input" labelText="Answer" onChange={e => setAnswer(e.target.value)} value={answer} />

                    <input type="submit" value="Add Your Answer" />

                </form>
                </>
                : // if currentPlayer doesn't exist (is host/storyteller)
                null

            }


        </div>
    )
}

export default GroupStoryQuestions