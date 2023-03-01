import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';

import user from 'data/user.json';
import data from 'data/data.json'

const {username, tag, location, avatar, stats: {followers, views, likes}} = user;
export const App = () => {  
  return (
    <>
    <Profile 
    username={username}
    tag={tag}
    location={location}
    avatar={avatar}
    followers={followers}
    views={views}
    likes={likes}
    />
    <Statistics title="Upload stats" stats={data} />
    </>    
  );
};
