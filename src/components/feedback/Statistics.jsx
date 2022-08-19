import React from 'react';
import './feedback.css';

const Statistics = ({
  visible,
  good,
  neutral,
  bad,
  Total,
  PositivePercentage,
}) =>
  visible && (
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
          Total:<span>{Total}</span>
        </p>
        <p className="statistics__result">
          Positive feedback: <span>{PositivePercentage}</span>%
        </p>
      </div>
    </div>
  );
export default Statistics;
