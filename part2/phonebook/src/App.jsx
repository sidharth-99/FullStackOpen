import { useState, useEffect } from 'react'
import personService from './services/Persons'
import Notification from './components/Notification'

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

const Persons = ({showPersons,deletePerson}) => {
  return (
    <div>
      {showPersons.map((person) => (
        <div key={person.name}>
          <p>{person.name} {person.number}
          <button onClick={() => deletePerson(person.id)}>delete</button>
          </p>
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
  const [errorMessage, setErrorMessage] = useState(null)
  const [successMessage, setSuccessMessage] = useState(null)

  useEffect(() => {
    personService.getAll().then((initialNotes) => {
      setPersons(initialNotes)
    })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      id: String(persons.length + 1),//Will cause Error if datatype is not string
      name: newName,
      number: newNumber
    }
    if (persons.find((person) => person.name === newName)) {
      alert(`${newName} is already added to phonebook, replace the old number with a new one?`)
      const person = persons.find((person) => person.name === newName)
      const id = person.id
      const newPerson = { ...person, number: newNumber }
      personService.update(id, newPerson).then((returnedPerson) => {
        setPersons(persons.map((person) => (person.id !== id ? person : returnedPerson)))
      })
      setNewName('')
      setNewNumber('')
      setSuccessMessage(`Updated ${newName}`)
      setTimeout(() => {
        setSuccessMessage(null)
      }, 5000)
      return
    }
    personService.create(personObject).then((returnedPerson) => {
      setPersons(persons.concat(returnedPerson))
      setNewName('')
      setNewNumber('')
      setSuccessMessage(`Added ${newName}`)
      setTimeout(() => {
        setSuccessMessage(null)
      }, 5000)
    }
    )
  }

  const deletePerson = (id) =>{
    const person = persons.find((person) => person.id === id)
    if (window.confirm(`Delete ${person.name}?`)) {
      personService.remove(id).then(() => {
        setPersons(persons.filter((person) => person.id !== id))
      })
    }
  }

  // const updatePerson = (id, newPerson) => {
  //   personService.update(id, newPerson).then((returnedPerson) => {
  //     setPersons(persons.map((person) => (person.id !== id ? person : returnedPerson)))
  //   })
  // }

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
      <Notification message={errorMessage} />
      <Notification message={successMessage} />
      <Filter newSearchInput={newSearchInput} handleSeacrhInputChange={handleSeacrhInputChange}/>
      <h2>Add a new</h2>
      <PersonForm addPerson={addPerson} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} />
      <h2>Numbers</h2>
      <Persons showPersons={showPersons} deletePerson={deletePerson}/>
    </div>
  )
}

export default App