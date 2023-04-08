// import React, { Component } from 'react';
// import { Statistics } from '../Statistics/Statistics';
// import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
//import { Notification } from './Notification/Notification';

export function Section({ title, children }) {
  return (
    <div>
      <h2>{title}</h2>
      {children}
    </div>
  );
}

// export class Section extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   onButtonGoodClick = event => {
//     return this.setState(prevState => ({ good: prevState.good + 1 }));
//   };

//   onButtonNeutralClick = event => {
//     return this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
//   };

//   onButtonBadClick = event => {
//     return this.setState(prevSate => ({ bad: prevSate.bad + 1 }));
//   };
//   countTotalFeedback() {
//     return this.state.good + this.state.neutral + this.state.bad;
//   }
//   countPositiveFeedbackPercentage() {
//     return !this.countTotalFeedback()
//       ? 0
//       : Math.ceil((this.state.good / this.countTotalFeedback()) * 100);
//   }

//   render() {
//     return (
//       <>
//         <h2>{this.props.title}</h2>
//         <FeedbackOptions
//           options={['Good', 'Neutral', 'Bad']}
//           onLeaveFeedback={[
//             this.onButtonGoodClick,
//             this.onButtonNeutralClick,
//             this.onButtonBadClick,
//           ]}
//         ></FeedbackOptions>
//         <Statistics
//           good={this.state.good}
//           neutral={this.state.neutral}
//           bad={this.state.bad}
//           total={this.countTotalFeedback()}
//           positivePercentage={this.countPositiveFeedbackPercentage()}
//         ></Statistics>
//       </>
//     );
//   }
// }
