import { useState } from 'react'

const Header = ({text}) => {
  return (
    <h1>{text}</h1>
  )
}

const Button = ({onClick, text}) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

const addVote = (setVotes, votes, selected) => {
  const newVotes = [...votes]
  newVotes[selected] += 1
  setVotes(newVotes)
}

const getRandomAnecdote = (anecdotes, setSelected) => {
  setSelected(Math.floor(Math.random() * anecdotes.length))
}

const getMostVotedAnecdote = (anecdotes, votes) => {
  return anecdotes[votes.indexOf(Math.max(...votes))]
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))
  return (
    <div>
      <Header text="Anecdote of the day" />
      {anecdotes[selected]}
      <p>has {votes[selected]} votes</p>
      <Button onClick={() => addVote(setVotes, votes, selected)}
      text="vote" />
      <Button onClick={() => getRandomAnecdote(anecdotes, setSelected)} 
      text="next anecdote" />
      <Header text="Anecdote with most votes" />
      {getMostVotedAnecdote(anecdotes, votes)}
      <p>has {Math.max(...votes)} votes</p>
    </div>
  )
}

export default App