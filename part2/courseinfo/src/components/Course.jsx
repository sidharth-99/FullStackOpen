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

export default Course