import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Hero from './Hero';
import Meta from './Meta';
import Wallet from './Wallet';
import Place from './Place';
import SocialProof from './SocialProof';

const Index = () => {
  return (
    <>
      <Header />
      {/* <Wallet/> */}
      <Hero />
      <SocialProof />
      <Place />
      <Meta />
      <Footer />
    </>
  );
};

export default Index;
