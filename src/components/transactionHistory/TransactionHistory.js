import React from 'react';
import PropTypes from 'prop-types';

export function TransactionHistory({ items }) {
  return (
    <table>
      <thead>
        <tr>Type</tr>
        <tr>Amount</tr>
        <tr>Currency</tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
TransactionHistory.defaultProps = {
  id: '',
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
