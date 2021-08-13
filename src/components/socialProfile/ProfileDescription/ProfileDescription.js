import React from 'react';
import PropTypes from 'prop-types';
import styles from '../ProfileDescription/profileDescription.module.css';
export function ProfileDescription({ name, tag, location, avatar }) {
  return (
    <div className={styles.description}>
      <img
        src={avatar}
        alt="Аватар пользователя"
        className="avatar"
        width="150px"
      />
      <p className="name">{name}</p>
      <p className="tag">{tag}</p>
      <p className="location">{location}</p>
    </div>
  );
}
ProfileDescription.defaultProps = {
  name: 'Name',
  tag: 'Tag',
  location: 'Location',
  avatar: 'Avatar',
};
ProfileDescription.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};
