import React from 'react';
import { Outlet } from 'react-router-dom'
import PricingInfo from '../Pages/Home/Pricing/PricingInfo';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
const Layout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            {/* <PricingInfo></PricingInfo> */}
            <Footer />
        </div>
    );
};

export default Layout;