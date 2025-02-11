const Header = ({course}) => {
  return (
    <h1>{course}</h1>
  )
}

// const Content = ({parts}) => {

const Content = ({part1, exercises1, part2, exercises2, part3, exercises3}) => {
  return (
    <div>
      <p>{part1} {exercises1}</p>
      <p>{part2} {exercises2}</p>
      <p>{part3} {exercises3}</p>
    </div>
  )
}

const Total = ({value1, value2, value3}) => {
  return (
    <p>Number of exercises {value1 + value2 + value3}</p>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  
  return (
    <div>
      <Header course={course} />
      <Content 
        part1={part1}
        exercises1={exercises1}
        part2={part2}
        exercises2={exercises2}
        part3={part3}
        exercises3={exercises3}
      />
      <Total value1={exercises1} value2={exercises2} value3={exercises3} />
    </div>
  )
}
// Storing all of the state in a single state object is a bad choice for this particular application; there's no apparent benefit and the resulting application is a lot more complex. In this case, storing the click counters into separate pieces of state is a far more suitable choice.

export default App