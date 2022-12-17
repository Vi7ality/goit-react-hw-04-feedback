
import React, { Component } from 'react';

export class Feedback extends Component {
  static defaultProps = {
    step: 1,
  };

  static propTypes = {

  };

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
    Object.values(this.state).reduce((acc, value) => {
      
        return acc + value
      }, 0)

  };

  render() {
    const { good, neutral, bad } = this.state;


    return (
      <div>
        <h1>Please, leave feedback</h1>
        <ul>
          <li>
            <button
              onClick={() => {
                this.handleIncrement('good');
              }}
              type="button"
            >
              Good
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                this.handleIncrement('neutral');
              }}
              type="button"
            >
              Neutral
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                this.handleIncrement('bad');
              }}
              type="button"
            >
              Bad
            </button>
          </li>
        </ul>
        <div>
          <h2>Statistics</h2>
          <ul>
            <li>
              <p>Good:</p>
              <p>{good}</p>
            </li>
            <li>
              <p>Neutral:</p>
              <p>{neutral}</p>
            </li>
            <li>
              <p>Bad:</p>
              <p>{bad}</p>
            </li>

            <li>
              <p>Total:</p>
              <p>{this.countTotalFeedback}</p>
            </li>
            <li>
              <p>Positive feedback:</p>
              <p></p>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
