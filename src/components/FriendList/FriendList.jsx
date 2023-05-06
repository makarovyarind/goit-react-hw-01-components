import css from '../FriendListItem/FriendListItem.module.css';
import { FriendListItem } from "components/FriendListItem/FriendListItem";
import PropTypes from 'prop-types'; 

export const FriendList = ({ friends }) => {
    return (
        <ul className={css.friendList}>
        {friends.map(friend => {
          return (
            <FriendListItem
              key={friend.id}
              name={friend.name}
              avatar={friend.avatar}
              isOnline={friend.isOnline}
            />
          );
        })}
      </ul>
    );
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        isOnline: PropTypes.bool.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
      }),
    ),
  };