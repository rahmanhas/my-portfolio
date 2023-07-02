import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import NavBar from '../Pages/Component/NavBar';
const MainLayout = () => {
    return (
        <div className="bg-[#252734]">
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;