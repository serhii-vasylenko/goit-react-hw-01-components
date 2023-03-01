import PropTypes from 'prop-types';
import {
  ProfileDiv,
  Description,
  Avatar,
  Name,
  Tag,
  Location,
  List,
  Item,
  Label,
  Quantity,
} from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <ProfileDiv>
      <Description>
        <Avatar src={avatar} alt="User avatar" width="200" />
        <Name>{username}</Name>
        <Tag>{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <List>
        <Item>
          <Label>Followers</Label>
          <Quantity>{followers.toLocaleString('en-US')}</Quantity>
        </Item>
        <Item>
          <Label>Views</Label>
          <Quantity>{views.toLocaleString('en-US')}</Quantity>
        </Item>
        <Item>
          <Label>Likes</Label>
          <Quantity>{likes.toLocaleString('en-US')}</Quantity>
        </Item>
      </List>
    </ProfileDiv>
  );
};

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.exact({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
