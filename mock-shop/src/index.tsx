import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/main.scss';
import { Header } from './components/header';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Carousel } from './components/carousel';
import hat from './assets/img/hat.png';
import tshirts from './assets/img/tshirts.png';
import bottoms from './assets/img/bottoms.png';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-12'>
         <Header
          size="large"
          category='Spring summer 24'
          heading="Shake up your summer look"
          cta={
            {
              type: 'primary',
              label: 'Shop the collection',
              href: '/shop'
            }
          }/>
        </div>
      </div>
    </div>
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-12'>
          <Carousel
            cards={[
                {image: hat, heading: 'Headwear', price: '£24.00', href: '/hats'},
                {image: tshirts, heading: 'T-Shirts', price: '£18.00', href: '/t-shirts'},
                {image: bottoms, heading: 'Bottoms', price: '£30.00', href: '/bottoms'},
                {image: hat, heading: 'Headwear', price: '£24.00', href: '/hats'},
                {image: tshirts, heading: 'T-Shirts', price: '£18.00', href: '/t-shirts'},
                {image: bottoms, heading: 'Bottoms', price: '£30.00', href: '/bottoms'},
            ]}
          />
        </div>
      </div>
    </div>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
