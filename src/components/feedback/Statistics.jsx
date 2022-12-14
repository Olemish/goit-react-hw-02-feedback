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
          total:<span>{total}</span>
        </p>
        <p className="statistics__result">
          positive feedback: <span>{positivePercentage}</span>%
        </p>
        <p className="statistics__result"></p>
      </div>
    </div>
  );
export default Statistics;
