const MultipleChoice = () => {
    return (
        <section className="question-section">
      <div className="question-container">
        <div className="question-card">
          <h1>A random question...</h1>
        </div>
        <div className="answer-section">
          <div className="card">
            <p>Answer one</p>
            <label>
              <input type="radio" value="option1" checked={true} />
            </label>
          </div>
          <div className="card">
            <p>Answer two</p>
            <label>
              <input type="radio" value="option1" checked={false} />
            </label>
          </div>
          <div className="card">
            <p>Answer Three</p>
            <label>
              <input type="radio" value="option1" checked={false} />
            </label>
          </div>
          <div className="card">
            <p>Answer Four</p>
            <label>
              <input type="radio" value="option1" checked={false} />
            </label>
          </div>
        </div>
      </div>
    </section>
    )
}

export default MultipleChoice