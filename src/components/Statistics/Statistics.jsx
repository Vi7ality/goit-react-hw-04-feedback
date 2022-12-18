import { Component } from "react";


export class Statistics extends Component {
  static defaultProps = {};

  static propTypes = {};

  render() {
    return <div>
          <h2>Statistics</h2>
          <ul>
            <li>
              <p>Good:</p>
              <p>{this.props.good}</p>
            </li>
            <li>
              <p>Neutral:</p>
              <p>{this.props.neutral}</p>
            </li>
            <li>
              <p>Bad:</p>
              <p>{this.props.bad}</p>
            </li>

            <li>
              <p>Total:</p>
              <p>{this.props.total}</p>
            </li>
            <li>
              <p>Positive feedback:</p>
                <p>{this.props.positive > 0 ? (this.props.positive) : (0)}%</p>
            </li>
          </ul>
        </div>;
  }
}