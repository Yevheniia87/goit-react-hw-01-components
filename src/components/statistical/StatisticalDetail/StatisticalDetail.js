import React from 'react';

export function StatisticalDetail({ id, label, percentage }) {
  return (
    <li key={id}>
      <span>{label}</span>
      <span>{percentage}%</span>
    </li>
  );
}
