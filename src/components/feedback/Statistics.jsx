import React from 'react';
import './feedback.css';

const Statistics = ({
  visible,
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) =>
  visible > 0 && (
    <div className="feedback__statistics">
      <div className="statistics__listResults">
        <p className="statistics__result">
          Good:<span>{good}</span>
        </p>
        <p className="statistics__result">
          Neutral: <span>{neutral}</span>
        </p>
        <p className="statistics__result">
          Bad:<span>{bad}</span>
        </p>
        <p className="statistics__result">
          Total:<span>{total}</span>
        </p>
        <p className="statistics__result">
          Positive feedback: <span>{positivePercentage}</span>%
        </p>
      </div>
    </div>
  );
export default Statistics;
