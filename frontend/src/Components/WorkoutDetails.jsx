import React from 'react'

const WorkoutDetails = ({workout}) => {
  return (
    <div className='workout-datils'>
      <h4>{workout.title}</h4>
      <p><strong>load 'kg' :</strong>{workout.load} </p>
      <p><strong>reps:</strong>{workout.reps} </p>
      <p>{workout.createdAt}</p>
    </div>
  )
}

export default WorkoutDetails
