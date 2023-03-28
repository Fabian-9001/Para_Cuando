import React from 'react';
import Navbar from './Navbar';

export interface IMainLayout {
  children: React.ReactNode;
}

const Main: React.FC<IMainLayout> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default Main;
