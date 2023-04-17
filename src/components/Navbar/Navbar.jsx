import React from 'react';
import './Navbar.css'
import logo from '../../images/wafi_logo.JPG'
import { Link } from 'react-router-dom';
import Banner from '../Banner/Banner';

const Navbar = () => {
    return (

        <div className='navbar'>
            <div clasName='logo-nav'>


                <Link to='/'>
                    <img width='140px' src={logo} alt="" />
                </Link>

            </div>



            <div className='links'>
                <Link to="/publication">publications</Link>
                <Link to="/boimela">boi mela 2023</Link>
                <Link to="">blogs</Link>
            </div>




        </div>


    );
};

export default Navbar;