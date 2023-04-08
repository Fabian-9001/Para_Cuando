import TopicHero from '@/components/heros/TopicHero';
import TopicSubNavbar from '@/components/navbars/TopicSubNavbar';
import SliderCards from '@/components/sliders/EventSlider';
import SuggestSlider from '@/components/sliders/SuggestSlider';

export const Stores = () => {
  return (
    <div>
      <TopicHero
        route="Home / Marcas"
        title="Marcas y tiendas"
        description="Descubre las marcas y tiendas que la gente quiere cerca"
        img="/img/topics/stores.png"
      />
      <TopicSubNavbar />
      <div className="app-container lg:px-0">
        <section className="mt-20">
          <div className="mb-9">
            <p className="app-title-2 mb-2 text-app-blackLight">
              Populares en Querétaro
            </p>
            <p className="app-subTitle-2 text-app-grayDark">
              Lo que las personas piden más
            </p>
          </div>
          <SliderCards />
        </section>
        <section className="my-12">
          <div className="mb-9">
            <p className="app-title-2 mb-2 text-app-blackLight">
              Populares en Querétaro
            </p>
            <p className="app-subTitle-2 text-app-grayDark">
              Lo que las personas piden más
            </p>
          </div>
          <SliderCards />
        </section>
        <section className="app-banner">
          <SuggestSlider />
        </section>
        <section className="mt-6 mb-24">
          <div className="mb-9">
            <p className="app-title-2 mb-2 text-app-blackLight">
              Populares en Querétaro
            </p>
            <p className="app-subTitle-2 text-app-grayDark">
              Lo que las personas piden más
            </p>
          </div>
          <SliderCards />
        </section>
      </div>
    </div>
  );
};

export default Stores;
