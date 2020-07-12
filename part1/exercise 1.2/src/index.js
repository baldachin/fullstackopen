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
  return (
  <div>
    <Part name={props.part1.name} exercises={props.part1.exercises}/>
    <Part name={props.part2.name} exercises={props.part2.exercises}/>
    <Part name={props.part3.name} exercises={props.part3.exercises}/>
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
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total sum={part1.exercises + part2.exercises + part3.exercises} />
    </div>
  )
}
// const App = () => {
//   const course = 'Half Stack application development'
//   const part1 = 'Fundamentals of React'
//   const exercises1 = 10
//   const part2 = 'Using props to pass data'
//   const exercises2 = 7
//   const part3 = 'State of a component'
//   const exercises3 = 14

//   return (
//     <div>
//       <Header course={course} />
//       <Content part1={part1} exercise1={exercises1}
//                part2={part2} exercise2={exercises2}
//                part3={part3} exercise3={exercises3}
//        />
//       <Total sum={exercises1 + exercises2 + exercises3} />
//     </div>
//   )
// }

ReactDOM.render(<App />, document.getElementById('root'))