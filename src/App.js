import React from 'react';
import user from './data/user.json';
import statisticalData from './data/statistical-data.json';
import { Profile } from './components/socialProfile/Profile';
import { Statistical } from './components/statistical/Statistical';

export default function App() {
  return (
    <>
      <Profile {...user} />
      <Statistical title="Upload stats" stats={statisticalData} />
    </>
  );
}
