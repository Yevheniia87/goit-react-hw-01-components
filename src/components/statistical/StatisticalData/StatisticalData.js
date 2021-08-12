import React from 'react';
import { StatisticalDetail } from '../StatisticalDetail/StatisticalDetail';

export function StatisticalData({ stats }) {
  return (
    <ul>
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
