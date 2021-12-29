import React, { createContext } from 'react';

import About from '../pages/About';
import Contacts from '../pages/Contacts';
import Home from '../pages/Home';

export const DataContext = createContext();

export default function ContextComponent(props) {
  const routingArray = [
    {
      path: '/',
      name: 'Home',
      element: <Home/>
    },
    {
      path: '/about',
      name: 'About',
      element: <About/>
    },
    {
      path: '/contacts',
      name: 'Contacts',
      element: <Contacts/>
    },
  ]

  return (
    <DataContext.Provider value={{routingArray}}>
      {props.children}
    </DataContext.Provider>
  )
}