import PropTypes from 'prop-types';

export const TransactionHistory = ({ text }) => {
  return <h2>{text}</h2>;
};

TransactionHistory.propTypes = {
  text: PropTypes.string.isRequired,
};
