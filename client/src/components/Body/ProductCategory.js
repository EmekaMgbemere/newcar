import React from 'react';
import "react-multi-carousel/lib/styles.css";

import img1 from '../../components/images/specialoffer3.jpg'
import img7 from '../../components/images/specialoffer7.jpg'
import img12 from '../../components/images/specialoffer12.jpg'
import img13 from '../../components/images/specialoffer13.jpg'
import img14 from '../../components/images/specialoffer14.jpg'
import img15 from '../../components/images/specialoffer15.jpg'
import img16 from '../../components/images/specialoffer16.jpg'
import img18 from '../../components/images/specialoffer18.jpg'

function ProductCategory() {
  

  return (
    <div className='newtrendbest'>
         <div className=''>
            <span className='mx-4'>PRODUCTS </span>
        </div>
        <div id='' className='productcard'>
            <div class="card" >
                  <div className='productcardimg'>
                      <img src={img1} class="card-img-top" alt="..." />
                  </div>
                  <div class="card-body">
                      <h5 class="card-title">New Cars</h5>
                      <a href="#" class="btn btn-dark">Go somewhere</a>
                  </div>
            </div>
            <div class="card" >
                  <div className='productcardimg'>
                      <img src={img7} class="card-img-top" alt="..." />
                  </div>
                  <div class="card-body">
                      <h5 class="card-title">Used Cars</h5>
                      <a href="#" class="btn btn-dark">Go somewhere</a>
                  </div>
            </div>
            <div class="card" >
                  <div className='productcardimg'>
                      <img src={img12} class="card-img-top" alt="..." />
                  </div>
                  <div class="card-body">
                      <h5 class="card-title">Trucks</h5>
                      <a href="#" class="btn btn-dark">Go somewhere</a>
                  </div>
            </div>
            <div class="card" >
                  <div className='productcardimg'>
                      <img src={img13} class="card-img-top" alt="..." />
                  </div>
                  <div class="card-body">
                      <h5 class="card-title">SUVs</h5>
                      <a href="#" class="btn btn-dark">Go somewhere</a>
                  </div>
            </div>
            <div class="card" >
                  <div className='productcardimg'>
                      <img src={img14} class="card-img-top" alt="..." />
                  </div>
                  <div class="card-body">
                      <h5 class="card-title">Sedans</h5>
                      <a href="#" class="btn btn-dark">Go somewhere</a>
                  </div>
            </div>
            <div class="card" >
                  <div className='productcardimg'>
                      <img src={img15} class="card-img-top" alt="..." />
                  </div>
                  <div class="card-body">
                      <h5 class="card-title">Sports Cars & Coupes</h5>
                      <a href="#" class="btn btn-dark">Go somewhere</a>
                  </div>
            </div>
            <div class="card" >
                  <div className='productcardimg'>
                      <img src={img16} class="card-img-top" alt="..." />
                  </div>
                  <div class="card-body">
                      <h5 class="card-title">Electric Vehicles </h5>
                      <a href="#" class="btn btn-dark">Go somewhere</a>
                  </div>
            </div>
            <div class="card" >
                  <div className='productcardimg'>
                      <img src={img18} class="card-img-top" alt="..." />
                  </div>
                  <div class="card-body">
                      <h5 class="card-title">Luxury Cars </h5>
                      <a href="#" class="btn btn-dark">Go somewhere</a>
                  </div>
            </div>
        </div>
    </div>
  )
}

export default ProductCategory