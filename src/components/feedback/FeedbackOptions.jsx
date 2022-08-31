import React from 'react';
const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className="feebdack__listScales">
    {options.map(option => (
      <label key={option} className="feebdack__scale">
        <button onClick={() => onLeaveFeedback(option)}>{option}</button>
      </label>
    ))}
  </div>
);
export default FeedbackOptions;
