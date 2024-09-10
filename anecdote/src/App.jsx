import AnecdoteList from "./components/AnecdoteList.jsx";
import NewAnecdote from "./components/AnecdoteForm.jsx";
import Filter from "./components/Filter.jsx"
import Notification from "./components/Notification.jsx";
import {useSelector} from "react-redux";

const App = () => {

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