import React, { Component } from 'react';
import { Section } from './Feedbacks/Section/Section';
import { FeedbackOptions } from './Feedbacks/FeedbackOptions/FeedbackOptions';
import { Statistics } from './Feedbacks/Statistics/Statistics';
import css from './App.module.css';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onButtonGoodClick = event => {
    event.target.classList.add(`${css.active}`);
    setTimeout(() => {
      event.target.classList.remove(`${css.active}`);
    }, 300);
    return this.setState(prevState => ({ good: prevState.good + 1 }));
  };

  onButtonNeutralClick = event => {
    event.target.classList.add(`${css.active}`);
    setTimeout(() => {
      event.target.classList.remove(`${css.active}`);
    }, 300);
    this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
  };

  onButtonBadClick = event => {
    event.target.classList.add(`${css.active}`);
    setTimeout(() => {
      event.target.classList.remove(`${css.active}`);
    }, 300);
    return this.setState(prevSate => ({ bad: prevSate.bad + 1 }));
  };
  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
  }
  countPositiveFeedbackPercentage() {
    return !this.countTotalFeedback()
      ? 0
      : Math.ceil((this.state.good / this.countTotalFeedback()) * 100);
  }

  render() {
    return (
      <>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={[
              this.onButtonGoodClick,
              this.onButtonNeutralClick,
              this.onButtonBadClick,
            ]}
          ></FeedbackOptions>
        </Section>
        <Section>
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          ></Statistics>
        </Section>
      </>
    );
  }
}
