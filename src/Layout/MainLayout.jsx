import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import NavBar from '../Pages/Component/NavBar';
import Footer from '../Pages/Component/Footer';
const MainLayout = () => {
    return (
        <div className="bg-[#252734] mx-auto">
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;