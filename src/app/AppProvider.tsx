import React, { ReactElement } from 'react';

interface AppProviderProps {
  children: ReactElement[] | ReactElement;
}

const AppProvider: React.FC<AppProviderProps> = function ({ children }) {
  return <React.StrictMode>{children}</React.StrictMode>;
};

export default AppProvider;
