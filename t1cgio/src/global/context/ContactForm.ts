import * as React from 'react';

export const ContactContext = React.createContext({
  show: false,
  toggleShow: () => null,
});
