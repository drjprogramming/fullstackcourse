const Header = ({course}) => {
  return (
      <h1>{course}</h1>
  )
}

const Part = ({details}) => {
  return (
      <p>{details.course} {details.exercises}</p>
  )
}

const Content = ({details}) => {
  return (
      <div>
        <Part details={details[0]} />
        <Part details={details[1]} />
        <Part details={details[2]} />
      </div>
  )
}

const Total = ({details}) => {
  return (
      <p>Number of exercises {details[0].exercises + details[1].exercises + details[2].exercises}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const details = [
    {course: 'Fundamentals of React', exercises: 10},
    {course: 'Using props to pass data', exercises: 7},
    {course: 'State of a component', exercises: 14}
  ]

  return (
    <div>
      <Header course={course} />
      <Content details={details} />
      <Total details={details} />
    </div>
  )
}

export default App
