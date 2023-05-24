import PropTypes from 'prop-types';
import {
  Card,
  CardBody,
  CardPoster,
  CardTitle,
  CardText,
  StatsList,
  StatsListItem,
  ItemLabel,
  ItemValue,
} from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats,
  followers,
  views,
  likes,
}) => {
  return (
    <Card>
      <CardBody>
        <CardPoster src={avatar} alt={username} />
        <CardTitle>{username}</CardTitle>
        <CardText>@{tag}</CardText>
        <CardText>{location}</CardText>
      </CardBody>

      <StatsList>
        <StatsListItem>
          <ItemLabel>Followers</ItemLabel>
          <ItemValue>{followers}</ItemValue>
        </StatsListItem>
        <StatsListItem>
          <ItemLabel>Views</ItemLabel>
          <ItemValue>{views}</ItemValue>
        </StatsListItem>
        <StatsListItem>
          <ItemLabel>Likes</ItemLabel>
          <ItemValue>{likes}</ItemValue>
        </StatsListItem>
      </StatsList>
    </Card>
  );
};

Event.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
