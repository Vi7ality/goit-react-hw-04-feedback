import { Component } from 'react';
import PropTypes from 'prop-types';
import { StatisticItem, StatisticName } from './Statistics.styled';

export class Statistics extends Component {
  static propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positive: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div>
        <h2>Statistics</h2>
        <ul>
          <StatisticItem>
            <StatisticName>Good:</StatisticName>
            <p>{this.props.good}</p>
          </StatisticItem>
          <StatisticItem>
            <StatisticName>Neutral:</StatisticName>
            <p>{this.props.neutral}</p>
          </StatisticItem>
          <StatisticItem>
            <StatisticName>Bad:</StatisticName>
            <p>{this.props.bad}</p>
          </StatisticItem>

          <StatisticItem>
            <StatisticName>Total:</StatisticName>
            <p>{this.props.total}</p>
          </StatisticItem>
          <StatisticItem>
            <StatisticName>Positive feedback:</StatisticName>
            <p>{this.props.positive > 0 ? this.props.positive : 0}%</p>
          </StatisticItem>
        </ul>
      </div>
    );
  }
}
