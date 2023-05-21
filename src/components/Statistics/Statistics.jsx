import PropTypes from 'prop-types';

export const Statistics = ({ text }) => {
  return <h2>{text}</h2>;
};

Statistics.propTypes = {
  text: PropTypes.string.isRequired,
};
