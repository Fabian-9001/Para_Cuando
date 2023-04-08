import React from 'react';
import Searcher from '../inputs/Searcher';

const Footer = () => {
  return (
    <div className="flex justify-center items-center px-5 pt-[300px] pb-[135px] bg-[url(/img/footer.png)] bg-cover bg-center bg-no-repeat">
      <Searcher />
    </div>
  );
};

export default Footer;
