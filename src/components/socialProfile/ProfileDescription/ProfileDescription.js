import React from 'react';
import PropTypes from 'prop-types';
import styles from '../ProfileDescription/profileDescription.module.css';
export function ProfileDescription({ name, tag, location, avatar }) {
  return (
    <div className={styles.description}>
      <img className={styles.avatar} src={avatar} alt="avatar" width="150px" />
      <p className={styles.name}>{name}</p>
      <p className={styles.tag}>@{tag}</p>
      <p className={styles.location}>{location}</p>
    </div>
  );
}
ProfileDescription.defaultProps = {
  name: 'Name',
  avatar: 'Avatar',
};
ProfileDescription.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};
