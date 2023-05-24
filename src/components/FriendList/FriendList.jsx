import PropTypes from 'prop-types';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import { Card } from 'components/Card/Card.styled';
import { BoardHeader, BoardTitle, List } from './FriendList.styled';

export const FriendList = ({ friendList }) => {
  return (
    <Card>
      <BoardHeader>
        <BoardTitle>Friends</BoardTitle>
      </BoardHeader>

      <List>
        {friendList.map(({ id, avatar, name, isOnline }) => (
          <FriendListItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          />
        ))}
      </List>
    </Card>
  );
};

FriendList.propTypes = {
  friendList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};
