import React from 'react';

import Footer from '../components/Footer';
import Introitem from '../components/Intro';

const Intro = () => {
  return (
    <>
      <Introitem>
        <div>당신은 18세</div>
        <div>Yes / No</div>
        <div>지나친 음주는 </div>
      </Introitem>

      <Footer />
    </>
  );
};

export default Intro;
