import Image from 'next/image';
import React from 'react';
import Button from '../buttons/Button';

export interface ISearcher {
  className?: string;
}

const Searcher: React.FC<ISearcher> = ({ className }) => {
  return (
    <form
      className={`w-full max-w-[465px] min-h-[50px] flex items-center justify-between gap-5 rounded-3xl px-6 bg-app-white ${className}`}
    >
      <input
        className="w-full outline-none app-text-3 text-app-blackLight"
        type="text"
        placeholder="¿Qué quieres ver en tu ciudad?"
      />
      <button>
        <Image src={'/svg/lupa.svg'} width={18} height={18} alt="" />
      </button>
    </form>
  );
};

export default Searcher;
