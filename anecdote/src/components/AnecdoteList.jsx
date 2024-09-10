import { useDispatch, useSelector } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer.js'
import { setNotification, removeNotification } from '../reducers/notificationReducer.js'

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
  const anecdotes = useSelector(({ anecdotes, filter }) => {
    if (!filter) {
      return anecdotes
    }

    return anecdotes.filter(a => a.content.toLowerCase().includes(filter.toLowerCase()))
  })

  const sortedAnecdotes = [...anecdotes].sort((a, b) => b.votes - a.votes)

  const handleVote = (anecdote) => {
    dispatch(vote(anecdote.id))
    dispatch(setNotification(anecdote.content))
    setTimeout(() => {
      dispatch(removeNotification())
    }, 5000)
  }

  return(
      <div>
        {sortedAnecdotes.map(anecdote => {
          return <Anecdote key={anecdote.id} anecdote={anecdote} handleClick={() => handleVote(anecdote)} />
        })}
      </div>
  )
}

export default AnecdoteList