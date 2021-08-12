import React from 'react';
import { Profile } from './components/socialProfile/Profile';
import user from './data/user.json';

function App() {
  return (
    <>
      <Profile {...user} />
    </>
  );
}

export default App;
