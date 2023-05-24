import PropTypes from 'prop-types';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import { Card } from 'components/Card/Card.styled';
import {
  BoardHeader,
  BoardTitle,
  TitleTop,
  TitleBottom,
  LeaderBoardProfiles,
} from './FriendList.styled';

export const FriendList = ({ friendList }) => {
  return (
    <Card>
      <BoardHeader>
        <BoardTitle>
          <TitleTop>Forbes</TitleTop>
          <TitleBottom>Leader board</TitleBottom>
        </BoardTitle>
      </BoardHeader>

      <LeaderBoardProfiles>
        {friendList.map(item => (
          <FriendListItem
            key={item.id}
            name={item.name}
            avatar={item.avatar}
            isOnline={item.isOnline}
          />
        ))}
      </LeaderBoardProfiles>
    </Card>
  );
};

FriendList.propTypes = {
  friendList: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired })
  ).isRequired,
};
