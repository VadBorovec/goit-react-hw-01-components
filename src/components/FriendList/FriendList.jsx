import PropTypes from 'prop-types';
import { FriendListItem } from 'components/FriendListItem';
import { Card, CardHeader, CardTitle } from 'components/UiComponents';
import { List } from './FriendList.styled';

export const FriendList = ({ title, friendList }) => {
  return (
    <Card>
      {title && (
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
      )}

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
