import PropTypes from 'prop-types';
import { StatisticItem, StatisticName } from './Statistics.styled';

export function Statistics(props) {
  return (
    <div>
      <h2>Statistics</h2>
      <ul>
        <StatisticItem>
          <StatisticName>Good:</StatisticName>
          <p>{props.good}</p>
        </StatisticItem>
        <StatisticItem>
          <StatisticName>Neutral:</StatisticName>
          <p>{props.neutral}</p>
        </StatisticItem>
        <StatisticItem>
          <StatisticName>Bad:</StatisticName>
          <p>{props.bad}</p>
        </StatisticItem>

        <StatisticItem>
          <StatisticName>Total:</StatisticName>
          <p>{props.total}</p>
        </StatisticItem>
        <StatisticItem>
          <StatisticName>Positive feedback:</StatisticName>
          <p>{props.positive > 0 ? props.positive : 0}%</p>
        </StatisticItem>
      </ul>
    </div>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positive: PropTypes.string.isRequired,
};
