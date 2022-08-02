const OpenEndedQuestion = () => {
  return (
    <section className="question-section">
      <div className="question-container">
        <div className="question-card">
          <h1>A random question...</h1>
        </div>
        <div className="answer-section">
          <input className="open-answer" placeholder="Enter your answer..." />
        </div>
      </div>
      <div className="button-container">
        <button className="btn btn-primary nav">
          <span className="btn-title">Clear</span>
        </button>
        <button className="btn btn-primary nav">
          <span className="btn-title">Submit</span>
        </button>
      </div>
    </section>
  )
}

export default OpenEndedQuestion
