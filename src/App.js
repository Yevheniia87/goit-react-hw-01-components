import React from 'react';
import user from './data/user.json';
import statisticalData from './data/statistical-data.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';
import { Profile } from './components/socialProfile/Profile';
import { Statistical } from './components/statistical/Statistical';
import { FriendList } from './components/friendList/FriendList';
import { TransactionHistory } from './components/transactionHistory/TransactionHistory';

export default function App() {
  return (
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistical title="Upload stats" stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </>
  );
}
