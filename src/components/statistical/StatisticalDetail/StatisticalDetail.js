import React from 'react';
import styles from '../StatisticalDetail/statisticalDetail.module.css';
import { generateColor } from '../../../utils/randomColor';

export function StatisticalDetail({ id, label, percentage }) {
  return (
    <li
      className={styles.item}
      key={id}
      style={{ backgroundColor: generateColor() }}
    >
      <span className={styles.label}>{label}</span>
      <span className={styles.percentage}>{percentage}%</span>
    </li>
  );
}
