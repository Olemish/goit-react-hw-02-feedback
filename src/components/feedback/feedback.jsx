import React from 'react';
import './feedback.css';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './section';
import Message from './message';
const options = ['good', 'neutral', 'bad'];

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = option => {
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1,
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
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={option => this.onLeaveFeedback(option)}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() < 1 && (
            <Message text="There is no feedback" />
          )}
          <Statistics
            visible={this.countTotalFeedback()}
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </div>
    );
  }
}
export default Feedback;
