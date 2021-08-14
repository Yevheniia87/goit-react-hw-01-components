import React from 'react';
import PropTypes from 'prop-types';
import styles from '../friendList/friendList.module.css';

export function FriendList({ friends }) {
  return (
    <ul className={styles.friendList}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <li className={styles.item} key={id}>
          <span className={styles.status}>
            {isOnline ? styles.Online : styles.Offline}
          </span>
          <img className={styles.avatar} src={avatar} alt="" width="48" />
          <p className={styles.name}>{name}</p>
        </li>
      ))}
    </ul>
  );
}
FriendList.defaultProps = {
  avatar: 'Avatar',
  name: 'Name',
  isOnline: '',
  id: '',
};
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool.isRequired,
    }),
  ).isRequired,
};
