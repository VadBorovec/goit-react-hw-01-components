import PropTypes from 'prop-types';
import { StatItem, StatLabel, StatValue } from './StatisticItem.styled';
import { getRandomColor } from 'helpers';

export const StatisticItem = ({ id, label, percentage }) => {
  return (
    <StatItem key={id} style={{ backgroundColor: getRandomColor() }}>
      <StatLabel>{label}</StatLabel>
      <StatValue>{percentage}%</StatValue>
    </StatItem>
  );
};

StatisticItem.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
