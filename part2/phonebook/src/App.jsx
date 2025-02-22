import { useState, useEffect } from 'react'
import personService from './services/Persons'

const Filter = ({ newSearchInput, handleSeacrhInputChange }) => {
  return (
    <div>
      Filter shown with<input value={newSearchInput} onChange={handleSeacrhInputChange}/>
    </div>
  )
}

const PersonForm = ({ addPerson, newName, handleNameChange, newNumber, handleNumberChange }) => {
  return (<form onSubmit={addPerson}>
    <div>
      name: <input value={newName} onChange={handleNameChange}/>
      <br/>
      number: <input value={newNumber} onChange={handleNumberChange}/>
    </div>
    <div>
      <button type="submit">add</button>
    </div>
  </form>)
  }

const Persons = ({showPersons}) => {
  return (
    <div>
      {showPersons.map((person) => (
        <div key={person.name}>
          {person.name} {person.number}
        </div>
      ))}
    </div>
  )
}
    
const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearchInput, setnewSearchInput] = useState('')

  useEffect(() => {
    personService.getAll().then((initialNotes) => {
      setPersons(initialNotes)
    })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }
    if (persons.find((person) => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)
      return
    }
    personService.create(personObject).then((returnedPerson) => {
      setPersons(persons.concat(returnedPerson))
      setNewName('')
      setNewNumber('')
    }
    )
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  } 

  const handleSeacrhInputChange = (event) => {
    setnewSearchInput(event.target.value)
  }

  const showPersons = newSearchInput === ''// if search input is empty, show all persons
    ? persons
    : persons.filter((person) => person.name.toLowerCase().includes(newSearchInput.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter newSearchInput={newSearchInput} handleSeacrhInputChange={handleSeacrhInputChange}/>
      <h2>Add a new</h2>
      <PersonForm addPerson={addPerson} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange}/>
      <h2>Numbers</h2>
      <Persons showPersons={showPersons}/>
    </div>
  )
}

export default App