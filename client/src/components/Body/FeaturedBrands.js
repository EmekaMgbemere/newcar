import React from 'react';
import "react-multi-carousel/lib/styles.css";
import benzlogo from '../../components/images/benzlogo.png'
import bmwlogo from '../../components/images/bmwlogo.png'
import kialogo from '../../components/images/kialogo.png'
import mazdalogo from '../../components/images/mazdalogo.png'
import nissanlogo from '../../components/images/nissanlogo.png'
import toyotalogo from '../../components/images/toyotalogo.png'
import volkswagenlogo from '../../components/images/volkswagenlogo.png'
import volvologo from '../../components/images/volvologo1.png'


  const FeaturedBrands = () => {


  return (
    <div className='newtrendbest'>
         <div>
            <span className=''>FEATURED BRANDS</span>
        </div>

        <div className='featured'>
          <div className='featureditems'><img src={benzlogo} alt='benzlogo'  style={{maxWidth:'10rem'}}/></div>        
          <div className='featureditems'><img src={bmwlogo} alt='bmwlogo' style={{maxWidth:'8.5rem', paddingTop:'17px'}}/></div>        
          <div className='featureditems'><img src={mazdalogo} alt='mazdalogo' /></div>  
          <div className='featureditems'><img src={kialogo} alt='kialogo' style={{maxWidth:'12rem', paddingTop:'20px'}}/></div>              
          <div className='featureditems'><img src={nissanlogo} alt='nissanlogo' /></div>        
          <div className='featureditems'><img src={toyotalogo} alt='toyotalogo' style={{maxWidth:'12rem', paddingTop:'40px'}}/></div>        
          <div className='featureditems'><img src={volkswagenlogo} alt='volkswagenlogo' style={{maxWidth:'9rem', paddingTop:'15px'}}/></div>        
          <div className='featureditems'><img src={volvologo} alt='volvologo' style={{maxWidth:'12rem', paddingTop:'20px'}}/></div>
        </div>
    </div>
  )
}

export default FeaturedBrands;