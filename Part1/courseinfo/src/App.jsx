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
      <Header course = {course}/>
      <Content part1 = {part1} exercises1 = {exercises1}/>
      <Content part1 = {part2} exercises1 = {exercises2}/>
      <Content part1 = {part3} exercises1 = {exercises3}/>
      <Total exercises1 = {exercises1} exercises2={exercises2} exercises3={exercises3}/>
    </div>
  )
}

const Header = (props) =>{
  return(
    <div>
      <p>
        The course name is {props.course}
      </p>
    </div>
  )

}

const Content = (props) =>{
  return(
    <div>
      <p>
        {props.part1} {props.exercises1}
      </p>
    </div>
  )

}

const Total = (props)=>{
  return(
    <div>
      <p>
        Number of excercises {props.exercises1+props.exercises2+props.exercises3}
      </p>
    </div>
  )


  
}

export default App