import React from 'react';
import HeroSection from '../components/HeroSection';
import Programs from '../components/Programs';
import UpcomingBatches from '../components/UpcomingBatches';
import CarouselComponent from '../components/Carouselcomponent';

const Home = () => {
  return (
    <div>
      <CarouselComponent />
      <HeroSection />
      <Programs />
      <UpcomingBatches />
    </div>
  );
};

export default Home;