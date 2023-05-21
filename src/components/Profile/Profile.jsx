import PropTypes from 'prop-types';

export const Profile = ({ text }) => {
  return <h2>{text}</h2>;
};

Profile.propTypes = {
  text: PropTypes.string.isRequired,
};
