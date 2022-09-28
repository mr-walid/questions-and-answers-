import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
 
  const [quetions, setQuestions] = useState(data)

  return (
    <main>
        <div className="container">
          <h3>question and answers about login</h3>
          <section className="info">
             {
              quetions.map((question)=>{
                return <SingleQuestion key={question.id} {...question} />
              })
             }
          </section>
        </div>
    </main>
  )
}

export default App;
