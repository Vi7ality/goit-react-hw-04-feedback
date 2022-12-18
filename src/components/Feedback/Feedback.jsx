import React, { Component } from 'react';
import { ButtonList } from 'components/ButtonList/ButtonList';
import { Statistics } from 'components/Statistics/Statistics';

export class Feedback extends Component {
  static defaultProps = {
    step: 1,
  };

  static propTypes = {};

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = value => {
    this.setState(prevState => ({
      [value]: prevState[value] + 1,
    }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, value) => {
      return acc + value;
    }, 0);
  };

  countPositivePercentage = (total) => {
return ((this.state.good / this.countTotalFeedback()) * 100).toFixed(0)
  }

  render() {
    return (
      <div>
        <h1>Please, leave feedback</h1>
        <ButtonList handleIncrement={this.handleIncrement}></ButtonList>
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          positive={this.countPositivePercentage()}
        ></Statistics>
      </div>
    );
  }
}
