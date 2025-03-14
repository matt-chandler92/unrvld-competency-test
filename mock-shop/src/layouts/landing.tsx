import { Header } from "../components/header";
import { Carousel } from "../components/carousel";
import hat from '../assets/img/hat.png';
import tshirts from '../assets/img/tshirts.png';
import bottoms from '../assets/img/bottoms.png';

export function Landing(){
return(<>
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
</>)}
