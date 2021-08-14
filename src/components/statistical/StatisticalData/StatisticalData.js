import React from 'react';
import styles from '../StatisticalData/statisticalData.module.css';
import { StatisticalDetail } from '../StatisticalDetail/StatisticalDetail';

export function StatisticalData({ stats }) {
  return (
    <ul className={styles.statList}>
      {stats.map(stat => (
        <StatisticalDetail
          key={stat.id}
          label={stat.label}
          percentage={stat.percentage}
        />
      ))}
    </ul>
  );
}
