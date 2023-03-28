import EventCard from '../cards/EventCard';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';

const SliderCards = () => {
  let publications = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div className="w-[950px] relative">
      <Swiper
        className="h-[460px]"
        grabCursor={true}
        slidesPerView={3}
        spaceBetween={10}
        loop={true}
        style={{ position: 'unset' }}
      >
        <div className="hidden absolute top-0 bottom-0 -left-20 scale-x-[-1] lg:inline-block">
          <PrevButton />
        </div>
        {publications?.map((publication) => (
          <SwiperSlide className="mx-[1px]" key={publication}>
            <EventCard />
          </SwiperSlide>
        ))}
        <div className="hidden absolute top-0 bottom-0 -right-20 lg:inline-block">
          <NextButton />
        </div>
      </Swiper>
    </div>
  );
};

export default SliderCards;

const NextButton = () => {
  const swiper = useSwiper();
  return (
    <button
      className="w-[50px] h-[50px] cursor-pointer"
      onClick={() => swiper.slideNext()}
    >
      <Image src={'/svg/arrowNext.svg'} fill={true} alt="" />
    </button>
  );
};

const PrevButton = () => {
  const swiper = useSwiper();
  return (
    <button
      className="w-[50px] h-[50px] cursor-pointer"
      onClick={() => swiper.slidePrev()}
    >
      <Image src={'/svg/arrowNext.svg'} fill={true} alt="" />
    </button>
  );
};
