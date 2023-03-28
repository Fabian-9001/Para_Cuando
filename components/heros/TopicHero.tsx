import Link from 'next/link';
import React from 'react';

export interface IHeroTopic {
  route: string;
  title: string;
  description: string;
  img: string;
}

const TopicHero: React.FC<IHeroTopic> = ({
  route,
  title,
  description,
  img,
}) => {
  return (
    <div
      style={{ backgroundImage: `url(${img})` }}
      className={`app-banner h-auto min-h-52 pt-6 pb-10 relative bg-center bg-no-repeat bg-cover`}
    >
      <div className="app-container h-full text-app-white">
        <Link href={'/'} className="app-subTitle-1">
          {route}
        </Link>
        <p className="app-title-1 mt-6 mb-1 text-app-yellow">{title}</p>
        <p className="app-subTitle-1">{description}</p>
      </div>
    </div>
  );
};

export default TopicHero;
