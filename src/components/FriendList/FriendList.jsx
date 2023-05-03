import css from './FriendList.module.css';
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {

    console.log(friends);
    return (<div className={css.friends}>
    <ul className={css.friendslist}>
    {friends.map(({ avatar, name, isOnline, id}) => (
        <li className={css.item} key={id}>
        <span className={`${css.status}`}>{isOnline}
        </span>
        <img className={css.avatar} src={avatar} alt={name} width="48" />
        <p className={`${css.name} ${css[isOnline]}`}>{name}</p>
      </li>
    ))}
  </ul>
  </div>);
};

FriendList.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired
}