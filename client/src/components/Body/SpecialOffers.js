import React from 'react';
import specialoffer1 from '../images/specialoffer1.jpg'


function SpecialOffers() {

  return (
    <div className=''>
         <div className='mainheader'>
            <span >SPECIAL OFFERS</span>
        </div>
        <div className='specialoffers'>
            <div className='specialoffersleft'> 
                <h1>
                  Get 50% Off Today!
                </h1>
                <p> 
                    Limited-Time Offer on Selected Cars - Hurry!!! Buy Now and Save Half on Your Favorite Car! Don't Miss Out!
                 </p>
                <button type="button" class="">Buy Now</button>
            </div>         
            <div className='specialoffersright'>
                <img src={specialoffer1} alt='' />
            </div> 
        </div>
    </div>
  )
}

export default SpecialOffers