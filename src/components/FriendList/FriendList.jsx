import PropTypes from 'prop-types';

export const FriendList = ({ text }) => {
  return <h2>{text}</h2>;
};

FriendList.propTypes = {
  text: PropTypes.string.isRequired,
};
