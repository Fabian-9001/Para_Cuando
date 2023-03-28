import Button from '@/components/buttons/Button';
import SliderCards from '@/components/sliders/EventSlider';
import SuggestSlider from '@/components/sliders/SuggestSlider';
import Image from 'next/image';

export const Stores = () => {
  return (
    <div className="overflow-hidden">
      <div className="app-container lg:px-0 ">
        <section className="grid mt-14 mb-20 md:grid-cols-2 md:grid-rows-[330px,50px] lg:grid-cols-[410px,540px]">
          <div className="text-app-black md:pr-5">
            <p className="app-subTitle-1">Artista / Pop / Rock</p>
            <p className="app-title-4">Concierto de Lady Gaga</p>
            <p className="app-text-1 text-app-grayDark mt-6 mb-8">
              El concierto con la temática de Lady gaga en Las Vegas. El
              concierto con la temática de Lady gaga en Las Vegas.El concierto
              con la temática.
            </p>
            <p className="app-text-3 text-app-blue">ladygaga.com</p>
            <div className="flex gap-3 app-text-3 text-app-blackLight mt-3">
              <Image src={'/svg/person.svg'} width={16} height={16} alt="" />
              <p>90’800’756 votos</p>
            </div>
          </div>
          <div className="relative h-[68vw] max-h-[380px] mt-6 md:max-w-[540px] md:mt-0">
            <Image
              priority={true}
              className="object-cover"
              src={'/img/homeHero.png'}
              fill={true}
              alt=""
            />
          </div>
          <Button className="mt-8 md:mt-0 md:mr-5 " size="md" color="blue">
            Votar
          </Button>
        </section>
        <section className="app-banner">
          <SuggestSlider />
        </section>
        <section className="mt-6 mb-24">
          <div className="mb-9">
            <p className="app-title-2 mb-2 text-app-blackLight">Recientes</p>
            <p className="app-subTitle-2 text-app-grayDark">
              Las personas últimanete están hablando de esto
            </p>
          </div>
          <SliderCards />
        </section>
      </div>
    </div>
  );
};

export default Stores;
