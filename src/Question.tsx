import { info } from 'console';
import React, {useState} from 'react'
import {AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

interface QuestionProp  {
    id : number;
    title : string;
    info : string
}

const Question = ({title, info}: QuestionProp) => {
  const [showInfo, setShowInfo] = useState<boolean>();

  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button
          className="btn"
          onClick={() => {
            setShowInfo(!showInfo);
          }}
        >
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
        {showInfo && <p>{info}</p>}
      </header>
    </article>
  );
};

export default Question