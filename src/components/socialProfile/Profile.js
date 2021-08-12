import React from 'react';
import PropTypes from 'prop-types';
import { ProfileDescription } from './ProfileDescription/ProfileDescription.js';
import { ProfileStatistics } from './ProfileStatistics/ProfileStatistics.js';

export function Profile({ name, tag, location, avatar, stats }) {
  return (
    <div>
      <ProfileDescription
        name={name}
        tag={tag}
        location={location}
        avatar={avatar}
      />
      <ul>
        <ProfileStatistics stats={stats} />
      </ul>
    </div>
  );
}
Profile.defaultProps = {
  name: 'Name',
  tag: 'Tag',
  location: 'Location',
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

// export default Profile;
