import { useDispatch, useSelector } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer.js'

const Anecdote = ({ anecdote, handleClick }) => {
  return(
      <>
        <div>
          {anecdote.content}
        </div>
        <div>
          has {anecdote.votes}
          <button onClick={() => handleClick(anecdote.id)}>vote</button>
        </div>
      </>
  )
}

const AnecdoteList = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector(state => state)

  return(
      <div>
        {anecdotes.sort((a, b) => b.votes - a.votes).map(anecdote => {
          return <Anecdote key={anecdote.id} anecdote={anecdote} handleClick={() => dispatch(vote(anecdote.id))} />
        })}
      </div>
  )
}

export default AnecdoteList