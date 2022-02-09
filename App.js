import React from 'react';

import Navigation from './src/component/Navigation';
import { UserContextProvider } from './src/component/user/UserContext';



export default function App(props) {
  return (
    <UserContextProvider>
      <Navigation />
    </UserContextProvider>
  );
}

