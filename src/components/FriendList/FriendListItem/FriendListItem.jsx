import PropTypes from 'prop-types';
import css from '../FriendList.module.css';

export const FriendListItem = ({ avatar, name, isOnline, id }) => {
    <li className={css.item} key={id}>
        <span className={`${css.status}`}>{isOnline}
        </span>
        <img className={css.avatar} src={avatar} alt={name} width="48" />
        <p className={`${css.name} ${css[isOnline]}`}>{name}</p>
      </li>
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired
}