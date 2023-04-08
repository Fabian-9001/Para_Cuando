import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Button from '../buttons/Button';
import Link from 'next/link';
import { Autoplay } from 'swiper';

const SuggestSlider = () => {
  let suggestliste = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="bg-app-grayLighter app-container pt-7 pb-10 overflow-hidden">
      <div className="mb-6">
        <p className="app-title-2 mb-2 text-app-grayDark">
          ¡Hagámoslo más personal!
        </p>
        <p className="app-subTitle-2 text-app text-app-grayDark">
          Selecciona tus interes para brindarte sugerencia de acuerdo a tus
          gustos
        </p>
      </div>
      <Swiper
        className="brandSlider over w-[950px]"
        modules={[Autoplay]}
        speed={5000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          stopOnLastSlide: false,
          pauseOnMouseEnter: true,
        }}
        grabCursor={true}
        loop={true}
        slidesPerView={5}
      >
        {suggestliste?.map((suggest) => (
          <SwiperSlide key={suggest}>
            <Button
              color="white"
              className="border-app-gray border-[1px] duration-300 hover:scale-110"
            >
              Entretenimiento
            </Button>
          </SwiperSlide>
        ))}
      </Swiper>
      <Link
        href={''}
        className="inline-block mt-12 app-subTitle-2 text-app-blue"
      >
        Ver todos los intereses
      </Link>
    </div>
  );
};

export default SuggestSlider;
