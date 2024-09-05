import AnecdoteList from "./components/AnecdoteList.jsx";
import NewAnecdote from "./components/AnecdoteForm.jsx";

const App = () => {

  return (
    <div>
      <h2>Anecdotes</h2>
      <AnecdoteList />
      <NewAnecdote />
    </div>
  )
}

export default App