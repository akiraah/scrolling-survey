import './App.css'
import logo from './resource/ziggo-logo.svg'
import MultipleChoice from './components/MultipleChoice'
import OpenEndedQuestion from './components/OpenEndedQuestion'

const App = () => {
  return (
    <div className="App">
      <section className="one">
        <img src={logo} className="survey-logo" alt="logo" />
      </section>
      <section className="two">
        <MultipleChoice></MultipleChoice>
      </section>
      <section className="three">
        <OpenEndedQuestion></OpenEndedQuestion>
      </section>
    </div>
  )
}

export default App
