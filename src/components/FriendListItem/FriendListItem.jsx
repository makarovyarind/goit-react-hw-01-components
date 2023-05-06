import css from './FriendListItem.module.css';


export const FriendListItem = ({ id, name, avatar, isOnline }) => {
    return (
        <li key={id} className={css.item}>
          <span className={isOnline ? css.statOnline : css.statOffline}></span>
          <img className={css.avatar} src={avatar} alt={name} width="48" />
          <p className={css.name}>{name}</p>
        </li>
      );
};

