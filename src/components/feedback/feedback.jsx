import React from 'react';
import './feedback.css';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './section';
import Message from './message';
const options = {
  good: 'good',
  neutral: 'neutral',
  bad: 'bad',
};
let visible = false;

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  toogle = () => {
    this.setState(prevState => ({ visible: !prevState.visible }));
  };

  onLeaveFeedback = e => {
    const key = e.target.dataset.label;
    console.log(key);
    visible = true;
    this.setState(prevState => {
      return {
        [key]: prevState[key] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };
  countPositiveFeedbackPercentage = () => {
    return this.countTotalFeedback()
      ? Math.round((this.state.good / this.countTotalFeedback()) * 100)
      : 0;
  };

  render() {
    return (
      <div className="feedback__box">
        <Section title={`Please leave feedback`}>
          <FeedbackOptions
            options={options}
            show={this.toogle}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title={`Statistics`}>
          {!visible && <Message text="There is no feedback" />}
          <Statistics
            visible={visible}
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            Total={this.countTotalFeedback()}
            PositivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </div>
    );
  }
}
export default Feedback;
