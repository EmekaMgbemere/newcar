import React from 'react';
import Nav from '../Nav/Nav';
import Hero from '../Body/Hero';
import Trending from './Trending';
import Bestselling from './Bestselling';
import Footer from '../Footer/Footer';
import FeaturedBrands from './FeaturedBrands';
import SpecialOffers from './SpecialOffers';
import Newarrivals from './Newarrivals';
import ProductCategory from './ProductCategory';
import CustomerTestimonials from './CustomerTestimonials';


function Home(){

    return(
        <div>
            <div>
                <Nav />
            </div>

                <div>
                    <Hero />
                </div>

            <div>
                <div className='container'>
                    <FeaturedBrands />
                </div>
                <div className='container'>
                    <Bestselling />
                </div>
                <div className='container'>
                    <Newarrivals />
                </div>
                <div>
                    <SpecialOffers />
                </div>
                <div >
                    <ProductCategory />
                </div>
                <div className='container'>
                    <CustomerTestimonials />
                </div>
                <div className='container'>
                    <Trending />
                </div>
                
            </div>
            <div>
                <Footer />
            </div>
               
        </div>
    )
}

export default Home;