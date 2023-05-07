import css from './FriendListItem.module.css';


export const FriendListItem = ({ name, avatar, isOnline }) => {
    return (
        <li className={css.item}>
          <span className={isOnline ? css.statOnline : css.statOffline}></span>
          <img className={css.avatar} src={avatar} alt={name} width="48" />
          <p className={css.name}>{name}</p>
        </li>
      );
};

