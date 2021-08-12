import React from 'react';
import user from './data/user.json';
import statisticalData from './data/statistical-data.json';
import friends from './data/friends.json';
import { Profile } from './components/socialProfile/Profile';
import { Statistical } from './components/statistical/Statistical';
import { FriendList } from './components/friendList/FriendList';

export default function App() {
  return (
    <>
      <Profile {...user} />
      <Statistical title="Upload stats" stats={statisticalData} />
      <FriendList friends={friends} />
    </>
  );
}
