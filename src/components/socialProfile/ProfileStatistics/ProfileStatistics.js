import React from 'react';
import PropTypes from 'prop-types';
import styles from '../ProfileStatistics/profileStatistics.module.css';

export function ProfileStatistics({ stats }) {
  return (
    <>
      <li className={styles.items}>
        <span className="label">Followers</span>
        <span className="quantity">{stats.followers}</span>
      </li>
      <li>
        <span className="label">Views</span>
        <span className="quantity">{stats.views}</span>
      </li>
      <li>
        <span className="label">Likes</span>
        <span className="quantity">{stats.likes}</span>
      </li>
    </>
  );
}
ProfileStatistics.propTypes = {
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
