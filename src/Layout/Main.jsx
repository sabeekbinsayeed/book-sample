import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Banner from '../components/Banner/Banner';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>

            <Outlet></Outlet>
        </div>
    );
};

export default Main;