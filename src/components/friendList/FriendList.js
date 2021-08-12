import React from 'react';
import PropTypes from 'prop-types';

export function FriendList({ friends }) {
  return (
    <ul>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <li key={id}>
          <span>{isOnline ? true : false}</span>
          <img src={avatar} alt="" width="48" />
          <p>{name}</p>
        </li>
      ))}
    </ul>
  );
}
FriendList.defaultProps = {
  avatar: 'Avatar',
  name: 'Name',
};
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
