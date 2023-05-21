import PropTypes from 'prop-types';
import { Card, StatsList, StatsListItem } from './Profile.styled';

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
      <div class="description">
        <img src={avatar} alt={username} class="avatar" />
        <p class="name">{username}</p>
        <p class="tag">@{tag}</p>
        <p class="location">{location}</p>
      </div>

      <StatsList>
        <StatsListItem>
          <span class="label">Followers</span>
          <span class="quantity">{followers}</span>
        </StatsListItem>
        <StatsListItem>
          <span class="label">Views</span>
          <span class="quantity">{views}</span>
        </StatsListItem>
        <StatsListItem>
          <span class="label">Likes</span>
          <span class="quantity">{likes}</span>
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
