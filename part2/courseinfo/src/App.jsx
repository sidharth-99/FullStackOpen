const Header = ({course}) => {
  return (
    <h1>{course}</h1>
  )
}

// const Content = ({parts}) => {

const Part = ({part, exercises}) => {
  return (
    <p >{part} {exercises}</p>
  )
}

const Content = ({parts}) => {//Loops in the future
  return (
    parts.map(part => (
      <Part key={part.id} part={part.name} exercises={part.exercises} />
    )
  )
)
}

const Total = ({parts}) => {
  const total = parts.reduce((initialValue, part) =>initialValue +part.exercises, 0)
  return (
    <p>Number of exercises {total}</p>
  )
}

const Course = ({courses}) => {
  return (
    courses.map(course => (
      <div key={course.id}>
        <Header course={course.name} />
        <Content parts={course.parts}/>
        <Total parts={course.parts} />
      </div>
    )
    )
  )
}

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]
  
  return (
    <div>
      <Course courses={courses} />
    </div>
  )
}
// Storing all of the state in a single state object is a bad choice for this particular application; there's no apparent benefit and the resulting application is a lot more complex. In this case, storing the click counters into separate pieces of state is a far more suitable choice.

export default App