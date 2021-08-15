import React from 'react';
import PropTypes from 'prop-types';
import styles from '../transactionHistory/transactionHistory.module.css';

export function TransactionHistory({ items }) {
  return (
    <table className={styles.transactionHistory}>
      <thead className={styles.thead}>
        <tr className={styles.tr}>
          <th className={styles.th}>Type</th>
          <th className={styles.th}>Amount</th>
          <th className={styles.th}>Currency</th>
        </tr>
      </thead>
      <tbody className={styles.tbody}>
        {items.map(({ id, type, amount, currency }) => (
          <tr className={styles.tr} key={id}>
            <td className={styles.td}>{type}</td>
            <td className={styles.td}>{amount}</td>
            <td className={styles.td}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
TransactionHistory.defaultProps = {
  type: 'Type',
  amount: 'Amount',
  currency: 'Currency',
};
TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
};
