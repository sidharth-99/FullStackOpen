const Header = ({course}) => {
  return (
    <h1>{course}</h1>
  )
}

// const Content = ({parts}) => {

const Part = ({part, exercises}) => {
  return (
    <p>{part} {exercises}</p>
  )
}

const Content = ({parts}) => {//Loops in the future
  return (
    <div>
      <Part part={parts[0].name} exercises={parts[0].exercises} />
      <Part part={parts[1].name} exercises={parts[1].exercises} />
      <Part part={parts[2].name} exercises={parts[2].exercises} />
    </div>
  )
}

const Total = ({value1, value2, value3}) => {
  return (
    <p>Number of exercises {value1 + value2 + value3}</p>
  )
}


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts}/>
      <Total value1={course.parts[0].exercises} value2={course.parts[1].exercises} value3={course.parts[2].exercises} />
    </div>
  )
}
// Storing all of the state in a single state object is a bad choice for this particular application; there's no apparent benefit and the resulting application is a lot more complex. In this case, storing the click counters into separate pieces of state is a far more suitable choice.

export default App