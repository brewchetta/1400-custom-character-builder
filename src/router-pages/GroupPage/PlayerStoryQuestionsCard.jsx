import React from 'react'

function PlayerStoryQuestionsCard({ player, titleOn=true }) {
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
                player.worldbuildingQuestions.map(q => <p key={q._id}>{q.question}: {q.answer}</p>)
                :
                <p>No questions added yet</p>
            }

    </div>
  )
}

export default PlayerStoryQuestionsCard