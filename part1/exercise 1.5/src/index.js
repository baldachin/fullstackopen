import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
<div>
  <h1>{props.course}</h1>
  </div>
  )
}
const Part = (props) => {
  console.log(props)
  return(
    <div>
      <p>{props.name} {props.exercises}</p>
    </div>
  )
}
const Content = (props) => {
  console.log(props)
  return (
  <div>
    <Part name={props.parts[0].name} exercises={props.parts[0].exercises}/>
    <Part name={props.parts[1].name} exercises={props.parts[1].exercises}/>
    <Part name={props.parts[2].name} exercises={props.parts[2].exercises}/>
  </div>
  )
}
const Total = (props) => {
  return (
<div>
  <p>Number of exercises {props.sum}</p>
  </div>
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
      <Content parts={course.parts} />
      <Total sum={course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))