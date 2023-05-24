import PropTypes from 'prop-types';
import { StatisticItem } from 'components/StatisticItem/StatisticItem';
import { Card, StatisticsList, StatisticTitle } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Card>
      {title && <StatisticTitle>{title}</StatisticTitle>}

      <StatisticsList>
        {stats.map((stat, index) => (
          <StatisticItem
            key={stat.id}
            title={stat.label}
            total={stat.percentage}
          />
        ))}
      </StatisticsList>
    </Card>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string.isRequired }))
    .isRequired,
};
