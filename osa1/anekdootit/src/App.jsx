import { useState } from 'react'

const Button = ( { handleClick, text } ) => <button onClick={handleClick}>{text}</button>

const getRandomAnecdote = (currentSelected) => {
  let random = Math.floor(Math.random() * anecdotes.length)

  while (random === currentSelected) {
    random = Math.floor(Math.random() * anecdotes.length)
  }

  return random
}

const getAnecdoteVotes = (anecdote, votes) => {
  return votes[anecdote] || 0
}

const handleVote = (selected, votes, setVotes) => {
  const copy = [...votes]
  copy[selected] += 1
  setVotes(copy)
}

const mostVotesAnecdote = (votes) => {
  const maxVotes = Math.max(...votes)
  const indexOfMax = votes.indexOf(maxVotes)
  return indexOfMax
}

const anecdotes = [
  'If it hurts, do it more often.',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
  'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
  'The only way to go fast, is to go well.'
]

const App = () => {

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <p>{anecdotes[selected]}</p>
      <p>has {getAnecdoteVotes(selected, votes)} votes</p>
      
      <Button handleClick={() => handleVote(selected, votes, setVotes)} text="vote" />
      <Button handleClick={() => setSelected(getRandomAnecdote(selected))} text="next anecdote" />

      <h2>Anecdote with most votes</h2>
      <p>{anecdotes[mostVotesAnecdote(votes)]}</p>
      <p>has {Math.max(...votes)} votes</p>
    </div>
  )
}

export default App