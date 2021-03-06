import React from 'react';
import PropTypes from 'prop-types';
import styles from '../socialProfile/profile.module.css';

import { ProfileDescription } from './ProfileDescription/ProfileDescription.js';
import { ProfileStatistics } from './ProfileStatistics/ProfileStatistics.js';

export function Profile({ name, tag, location, avatar, stats }) {
  return (
    <div className={styles.profile}>
      <ProfileDescription
        name={name}
        tag={tag}
        location={location}
        avatar={avatar}
      />
      <ul className={styles.stats}>
        <ProfileStatistics stats={stats} />
      </ul>
    </div>
  );
}
Profile.defaultProps = {
  name: 'Name',
  avatar: 'Avatar',
};
Profile.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
