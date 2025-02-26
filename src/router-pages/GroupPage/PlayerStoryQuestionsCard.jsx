import React from 'react'

function PlayerStoryQuestionsCard({ player, titleOn=true, currentPlayer=false, handleDeleteQuestion=()=>{} }) {

  return (
    <div>
            { 
                titleOn
                ?
                <h3>{player.user.username}:</h3> 
                :
                null
            }

            {
                player.worldbuildingQuestions?.length 
                ?
                player.worldbuildingQuestions.map(q => (
                  <div key={q._id} className="border-bottom-light-grey">
                    <p>{q.question}:</p> 
                    <p>"{q.answer}"</p>
                    {currentPlayer ? <button onClick={() => handleDeleteQuestion(q._id)} className="text-dark-red border-dark-red margin-small">Delete This Question</button> : null}
                  </div>
                ))
                :
                <p>No questions added yet</p>
            }

    </div>
  )
}

export default PlayerStoryQuestionsCard