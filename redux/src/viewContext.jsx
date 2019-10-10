import React from 'react';

export const ViewContext = React.createContext({
  view: 'login',
  changeView: () => {}
});