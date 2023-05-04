import css from './FriendList.module.css';
import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem/FriendListItem';

export const FriendList = ({ friends }) => {

    console.log(friends);
    return (<div className={css.friends}>
    <ul className={css.friendslist}>
    {friends.map(() => (
        <FriendListItem />
    ))}
  </ul>
  </div>);
};

FriendList.propTypes = {
    friends: PropTypes.object.isRequired
}