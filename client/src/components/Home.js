import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className='home'>
      <div className='home__container'>
        <img
          className='home__image'
          src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
          alt=''
        />

        <div className='home__row'>
          <Product
            id='12321341'
            title='The Lean Startup: How Todays Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses'
            price={29.99}
            image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'
            rating={5}
          />
          <Product
            id='12323451'
            title='Stand Mixer, Cusimax 800W Dough Mixer Tilt-Head Electric Mixer with 5-Quart Stainless Steel Bowl, Dough Hook, Mixing Beater and Whisk, Splash Guard, CMKM-150, Black '
            price={239.0}
            image='https://images-na.ssl-images-amazon.com/images/I/617ZRPO4VZL._AC_SX679_.jpg'
            rating={4}
          />
        </div>

        <div className='home__row'>
          <Product
            id='12376451'
            title='Super Mario 3d All-Stars - Nintendo Switch'
            price={59.0}
            image='https://images-na.ssl-images-amazon.com/images/I/71whlPxCIJL._SL1500_.jpg'
            rating={5}
          />
          <Product
            id='5424541'
            title='All-new Echo (4th Gen) | With premium sound, smart home hub, and Alexa | Charcoal'
            price={239.0}
            image='https://images-na.ssl-images-amazon.com/images/I/71JB6hM6Z6L._AC_SL1000_.jpg'
            rating={4}
          />
          <Product
            id='12367891'
            title='New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation) '
            price={599.0}
            image='https://images-na.ssl-images-amazon.com/images/I/81FH2j7EnJL._AC_SL1500_.jpg'
            rating={4}
          />
        </div>

        <div className='home__row'>
          <Product
            id='11111191'
            title='Samsung UN78KS9500 78" Class 4K SUHD Curved Edge-lit LED Smart TV, - Bundle With Yamaha 128W 7.1.2-Channel MusicCast Sound Bar'
            price={5999.0}
            image='https://images-na.ssl-images-amazon.com/images/I/41yfDkjrZPL._AC_.jpg'
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
