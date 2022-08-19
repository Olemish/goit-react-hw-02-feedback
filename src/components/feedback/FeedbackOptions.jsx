import React from 'react';
const FeedbackOptions = ({ options, show, onLeaveFeedback }) => (
  <div className="feebdack__listScales">
    <label className="feebdack__scale">
      <button onClick={onLeaveFeedback} data-label={options.good}>
        {options.good}
      </button>
    </label>
    <label className="feebdack__scale">
      <button onClick={onLeaveFeedback} data-label={options.neutral}>
        {options.neutral}
      </button>
    </label>
    <label className="feebdack__scale">
      <button onClick={onLeaveFeedback} data-label={options.bad}>
        {options.bad}
      </button>
    </label>
  </div>
);
export default FeedbackOptions;
