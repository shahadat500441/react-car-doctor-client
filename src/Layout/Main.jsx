import React from 'react';
import {Outlet} from "react-router-dom"
import Navbar from '../pages/Shered/Navbar/Navbar';
import Footer from '../pages/Shered/Footer/Footer';


const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;