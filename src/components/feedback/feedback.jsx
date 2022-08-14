import React from 'react';
import './feedback.css';

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    experience: 'good',
  };

  handelChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };
  handelSubmit = e => {};

  render() {
    return (
      <div className="feedback__box">
        <h1 className="feedback__text">Please leave feedback</h1>
        <div className="feebdack__listScales">
          <label className="feebdack__scale">
            <input
              type="radio"
              name="experience"
              value="good"
              onChange={this.handelChange}
              checked={this.state.experience === 'good'}
            />
            good
          </label>
          <label className="feebdack__scale">
            <input
              input
              type="radio"
              name="experience"
              value="neutral"
              onChange={this.handelChange}
              checked={this.state.experience === 'neutral'}
            />
            neutral
          </label>
          <label className="feebdack__scale">
            <input
              input
              type="radio"
              name="experience"
              value="bad"
              onChange={this.handelChange}
              checked={this.state.experience === 'bad'}
            />
            bad
          </label>
        </div>
      </div>
    );
  }
}
export default Feedback;
