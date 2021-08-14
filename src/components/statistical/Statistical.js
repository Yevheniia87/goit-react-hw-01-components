import React from 'react';
import PropTypes from 'prop-types';
import styles from '../statistical/statistical.module.css';
import { StatisticalData } from '../statistical/StatisticalData/StatisticalData';

export function Statistical({ title, stats }) {
  return (
    <section className={styles.statistics}>
      {title ? <h2 className={styles.title}>{title}</h2> : null}
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
