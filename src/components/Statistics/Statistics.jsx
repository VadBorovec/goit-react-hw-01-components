import PropTypes from 'prop-types';
import { StatisticItem } from 'components/StatisticItem/StatisticItem';
import { Card } from 'components/Card/Card.styled';
import { BoardHeader, BoardTitle, StatisticsList } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Card>
      <BoardHeader>{title && <BoardTitle>{title}</BoardTitle>}</BoardHeader>

      <StatisticsList>
        {stats.map(({ id, label, percentage }) => (
          <StatisticItem key={id} label={label} percentage={percentage} />
        ))}
      </StatisticsList>
    </Card>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
