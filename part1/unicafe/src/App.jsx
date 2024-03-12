import { useState } from 'react'

const Display = props => <div><h3>{props.text}</h3></div>

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const StatisticsLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}

const Statistic = (props) => {
  if (props.value.all === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }
  return (
    <div>
      <table>
        <tbody>
          <StatisticsLine text="good" value={props.value.good} />
          <StatisticsLine text="neutral" value={props.value.neutral} />
          <StatisticsLine text="bad" value={props.value.bad} />
          <StatisticsLine text="all" value={props.value.all} />
          <StatisticsLine text="average" value={props.value.average} />
          <StatisticsLine text="positive" value={props.value.positive + " %"} />
        </tbody>
      </table>
    </div>
  )
}


const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const all = good + neutral + bad
  const average = (good - bad) / all
  const positive = (good / all) * 100

  const statistics = {
    good: good,
    neutral: neutral,
    bad: bad,
    all: all,
    average: average,
    positive: positive
  }
  return (
    <div>

      <Display text="Give feedback" />
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <Display text="Statistics" />
      <Statistic value={statistics} />

    </div>
  )
}

export default App