import React from 'react';
import PropTypes from 'prop-types';

export function StatisticsData({ label, percentage }) {
  return (
    <li>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </li>
  );
}
StatisticsData.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
