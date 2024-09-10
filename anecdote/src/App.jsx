import { useEffect } from 'react'
import AnecdoteList from "./components/AnecdoteList.jsx";
import NewAnecdote from "./components/AnecdoteForm.jsx";
import Filter from "./components/Filter.jsx"
import Notification from "./components/Notification.jsx";
import anecdoteService from '../services/anecdotes'
import { setAnecdotes } from './reducers/anecdoteReducer.js'
import { useDispatch } from 'react-redux'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    anecdoteService
        .getAll().then(anecdotes => dispatch(setAnecdotes(anecdotes)))
  }, [])

  return (
    <div>
      <Notification />
      <Filter />
      <h2>Anecdotes</h2>
      <AnecdoteList />
      <NewAnecdote />
    </div>
  )
}

export default App