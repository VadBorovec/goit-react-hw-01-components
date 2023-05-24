import PropTypes from 'prop-types';

import { ForbesItem, Avatar, Name, Capital } from './FriendListItem.styled';

import { theme } from 'styles/theme';

export const FriendListItem = ({ name, avatar, isOnline }) => {
  return (
    <ForbesItem>
      <Capital>{isOnline}</Capital>
      <Avatar src={avatar} alt={name} />
      <Name>{name}</Name>
    </ForbesItem>
  );
};

FriendListItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
