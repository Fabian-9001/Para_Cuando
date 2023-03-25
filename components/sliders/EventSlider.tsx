import EventCard from '../cards/EventCard';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';

const SliderCards = () => {
  let publications = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <Swiper
      className="w-[950px] h-[460px]"
      grabCursor={true}
      slidesPerView={3}
      spaceBetween={20}
      loop={true}
    >
      <div className="absolute z-10 top-0 bottom-0 left-0 cursor-pointer scale-x-[-1]">
        <PrevButton />
      </div>
      <div>
        {publications?.map((publication) => (
          <SwiperSlide key={publication}>
            <EventCard />
          </SwiperSlide>
        ))}
      </div>
      <div className="absolute z-10 top-0 bottom-0 right-0 cursor-pointer">
        <NextButton />
      </div>
    </Swiper>
  );
};

export default SliderCards;

const NextButton = () => {
  const swiper = useSwiper();
  return (
    <button className="w-[50px] h-[50px]" onClick={() => swiper.slideNext()}>
      <Image src={'/svg/arrowNext.svg'} fill={true} alt="" />
    </button>
  );
};

const PrevButton = () => {
  const swiper = useSwiper();
  return (
    <button className="w-[50px] h-[50px]" onClick={() => swiper.slidePrev()}>
      <Image src={'/svg/arrowNext.svg'} fill={true} alt="" />
    </button>
  );
};
