import { useState } from 'react'

const Header = (props) => {
  return <h1>{props.text}</h1>
}

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const StatisticLine = (props) => {
  return (
       <tr>
          <td>{props.text}</td>
          <td>{props.value}</td>
       </tr>
  )
}

const Statistics = (props) => {
  const headerStats = "statistics"
  if (props.all === 0) {
    return (
      <div>
        <Header text={headerStats} />
        <p>No feedback given</p>
      </div>
    )
  }
    return (
        <div>
          <Header text={headerStats} />
          <table>
            <tbody>
              <StatisticLine text="good" value={props.good}/>
              <StatisticLine text="neutral" value={props.neutral}/>
              <StatisticLine text="bad" value={props.bad}/>
              <StatisticLine text="all" value={props.all}/>
              <StatisticLine text="average" value={props.score / props.all}/>
              <StatisticLine text="positive" value={(props.good / props.all)*100 +" %"}/>
            </tbody>
          </table>
        </div>
    )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const headerText = "give feedback"
  const [all, setAll] = useState(0)
  const [score, setScore] = useState(0)

  const handleGoodClick = () => {
    const updatedGood = good + 1
    const updatedGoodScore = score + 1
    setGood(updatedGood)
    setAll(updatedGood + neutral + bad)
    setScore(updatedGoodScore)
  }

  const handleNeutralClick = () => {
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
    setAll(updatedNeutral + good + bad)
  }

  const handleBadClick = () => {
    const updatedBad = bad + 1
    const updatedBadScore = score - 1
    setBad(updatedBad)
    setAll(updatedBad + neutral + good)
    setScore(updatedBadScore)
  }

  return (
    <div>
        <Header text={headerText}/>
        <Button onClick={handleGoodClick} text="good" />
        <Button onClick={handleNeutralClick} text="neutral" />
        <Button onClick={handleBadClick} text="bad" />
        <Statistics good={good} neutral={neutral} bad={bad} score={score} all={all}/>
    </div>
  )
}

export default App
