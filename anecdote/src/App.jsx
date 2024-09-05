import AnecdoteList from "./components/AnecdoteList.jsx";
import NewAnecdote from "./components/AnecdoteForm.jsx";
import Filter from "./components/Filter.jsx"

const App = () => {

  return (
    <div>
      <Filter />
      <h2>Anecdotes</h2>
      <AnecdoteList />
      <NewAnecdote />
    </div>
  )
}

export default App