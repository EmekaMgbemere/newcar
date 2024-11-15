import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CentralAdmin from "../src/components/Admin/CentralAdmin";
import CentralAdminLeft from "../src/components/Admin/CentralAdminLeft";
import CentralAdminRight from "../src/components/Admin/CentralAdminRight";
import CentralAdminTop from "../src/components/Admin/CentralAdminTop";
import Bestselling from "../src/components/Body/Bestselling";
import Hero from "../src/components/Body/Hero";
import Home from "../src/components/Body/Home";
import ProductCategory from "../src/components/Body/ProductCategory";
import NoPage from "../src/components/Body/NoPage";
import Trending from "../src/components/Body/Trending";
import Nav from "../src/components/Nav/Nav";
import Shopdashboard from "../src/components/Shop/Shopdashboard";
import CentralAdminForm from './components/Admin/CentralAdminForm';
import Footer from './components/Footer/Footer';
import Blog from './components/Menu/Blog';
import CustomerTestimonials from './components/Body/CustomerTestimonials';
import Newarrivals from './components/Body/Newarrivals';
import FeaturedBrands from './components/Body/FeaturedBrands';
import Shops from './components/Body/Shops';
import SpecialOffers from './components/Body/SpecialOffers';
import CarForm from './components/Body/CarForm';
import Users from './components/Menu/Users';
import PrivacyPolicy from './components/User/PrivacyPolicy';
import UserInfo from './components/User/UserInfo';
import Register from './components/User/Register';
import UserDashboard from './components/User/UserDashboard/UserDashboard';
import Login from './components/User/Login';
import Apipage from './components/Body/Apipage';
import ClickedProduct from '../../client/src/components/Body/ClickedProduct';

import Test from './components/Body/Test';
import './App.css';

import './Scss.scss'

import 'atropos/css'

function App() {

  const [newLoginId, setLoginId] =useState(null);

  return (
    <div className="App">
        <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/centraladminform" element={<CentralAdminForm />} />
                    <Route path="/userdashboard" element={<UserDashboard />} />
                    <Route path="/centraladmin" element={<CentralAdmin />} />
                    <Route path="/centraladminleft" element={<CentralAdminLeft />} />
                    <Route path="/centraladminright" element={<CentralAdminRight />} />
                    <Route path="/centraladmintop" element={<CentralAdminTop />} />
                    <Route path="/apipage" element={<Apipage />} />
                    <Route path="/hero" element={<Hero />} />
                    <Route path="/trending" element={<Trending />} />
                    <Route path="/nav" element={<Nav />} />
                    <Route path="/shopdashboard" element={<Shopdashboard />} />
                    <Route path="/footer" element={<Footer />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/newarrivals" element={<Newarrivals />} />
                    <Route path="/customertestimonials" element={<CustomerTestimonials />} />
                    <Route path="/featuredbrands" element={<FeaturedBrands />} />
                    <Route path="/shops" element={<Shops />} />
                    <Route path="/specialoffers" element={<SpecialOffers />} />
                    <Route path="/users" element={<Users />} />
                    <Route path="/productcategory" element={<ProductCategory />} />
                    <Route path="/carform" element={<CarForm />} />
                    <Route path="/privacypolicy" element={<PrivacyPolicy />} />
                    <Route path="/userinfo" element={<UserInfo />} />
                    <Route path="/login" element={<Login newLoginId={newLoginId} setLoginId={setLoginId} />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/test" element={<Test />} />
                    <Route path="/bestselling" element={<Bestselling />} />
                    <Route path="/clickedproduct/:id" element={<ClickedProduct />} />
                    <Route path="*" element={<NoPage />} />
                </Routes>
        </BrowserRouter>        
    </div>
  );
}

export default App;
