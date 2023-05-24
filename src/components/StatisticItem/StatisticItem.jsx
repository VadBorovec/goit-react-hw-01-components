import PropTypes from 'prop-types';
import {
  StatisticBox,
  StatisticText,
  StatisticCounter,
} from './StatisticItem.styled';

export const StatisticItem = ({ title, total }) => {
  return (
    <StatisticBox>
      <StatisticText>{title}</StatisticText>
      <StatisticCounter>{total}</StatisticCounter>
    </StatisticBox>
  );
};

StatisticItem.propTypes = {
  title: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
};
