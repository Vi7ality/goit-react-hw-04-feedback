import { Component } from 'react';

export class ButtonList extends Component {
  static propTypes = {};
  render() {
    return (
      <ul>
        <li>
          <button
            onClick={() => {
              this.props.handleIncrement('good');
            }}
            type="button"
          >
            Good
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              this.props.handleIncrement('neutral');
            }}
            type="button"
          >
            Neutral
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              this.props.handleIncrement('bad');
            }}
            type="button"
          >
            Bad
          </button>
        </li>
      </ul>
    );
  }
}
