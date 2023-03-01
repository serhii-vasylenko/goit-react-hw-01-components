import { Profile } from 'components/Profile/Profile';
import user from 'data/user.json'

const {username, tag, location, avatar, stats: {followers, views, likes}} = user;
export const App = () => {  
  return (
    <Profile 
    username={username}
    tag={tag}
    location={location}
    avatar={avatar}
    followers={followers}
    views={views}
    likes={likes}
    />
  );
};
