import PropTypes from 'prop-types';
import css from './Profile.module.css'

export const Profile = ({username, tag, location, avatar, followers, views, likes}) => {
    
    return <div className={css.profile}>
    <div className={css.description}>
      <img
        src={avatar}
        alt="User avatar"
        className={css.avatar}
        width="200"
      />
      <p className={css.name}>{username}</p>
      <p className={css.tag}>{tag}</p>
      <p className="location">{location}</p>
    </div>
  
    <ul className={css.stats}>
      <li>
        <span className="label">Followers</span>
        <span className={css.quantity}>{followers.toLocaleString('en-US')}</span>
      </li>
      <li>
        <span className="label">Views</span>
        <span className={css.quantity}>{views.toLocaleString('en-US')}</span>
      </li>
      <li>
        <span className="label">Likes</span>
        <span className={css.quantity}>{likes.toLocaleString('en-US')}</span>
      </li>
    </ul>
  </div>
}

Profile.propTypes = {
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.exact({
        followers: PropTypes.number,
        views: PropTypes.number,
        likes: PropTypes.number,
    })
}