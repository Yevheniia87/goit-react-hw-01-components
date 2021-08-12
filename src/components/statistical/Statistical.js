import React from 'react';
import PropTypes from 'prop-types';
import { StatisticalData } from '../statistical/StatisticalData/StatisticalData';

export function Statistical({ title, stats }) {
  return (
    <section>
      {title ? <h2>{title}</h2> : null}
      <StatisticalData stats={stats} />
    </section>
  );
}
Statistical.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
