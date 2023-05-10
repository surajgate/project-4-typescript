import React, { useState } from "react";
import data from './data'
import Question from "./Question";

interface QuestionType {
  id: number;
  title: string;
  info: string;
}

function App() {
  const [questions, setQuestion] = useState<QuestionType[]>(data );

  return (
    <main>
      <div className="container">
        <h3>Questions and Answers about Login</h3>
        <section className="info">
          {questions.map((question=>{
            return <Question key = {question.id} {...question}/>
          }))}
        </section>
      </div>
    </main>);
}

export default App;
