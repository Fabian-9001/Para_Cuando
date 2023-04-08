import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export interface IMainLayout {
  children: React.ReactNode;
}

const Main: React.FC<IMainLayout> = ({ children }) => {
  return (
    <div className='overflow-hidden'>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Main;
