import React from 'react'
import { BsSearch } from 'react-icons/bs';
import { FiShoppingCart } from 'react-icons/fi';
import { RiAccountCircleLine } from 'react-icons/ri';
import Protein from '../../dist/client/img/protien.png'
import { Form, NavLink, useLoaderData, useRouteError } from '@remix-run/react';
import { useState } from 'react';
const filter = () => {
    const [user, setUser] = useState('rtg'); // to be removed

    const [menuItems, setMenuItems] = useState([
        // {
        //   text: 'Home',
        //   link: '/',
        //   active: true,
        // },
        {
            text: 'Products',
            link: '/products/all',
            active: true,
        },
        {
            text: 'Blog',
            link: '/blog',
            active: true,
        },
        {
            text: 'Contact Us',
            link: '/contact',
            active: true,
        },
        {
            text: 'About Us',
            link: '/aboutus',
            active: true,
        },
        {
            text: 'Certification',
            link: '/certificates',
            active: true,
        },
        {
            text: 'Authenticity',
            link: '/authenticity',
            active: true,
        },
        {
            text: 'filter',
            link: '/filter',
            active: true,
        },
        {
            text: 'certi',
            link: '/certi',
            active: true,
        },
    ]);

    const [isSearchBarVisible, setSearchBarVisible] = useState(false);

    const showSearchBar = () => {
        setSearchBarVisible(true);
    };

    const hideSearchBar = () => {
        setSearchBarVisible(false);
    };
    const [isSubMenuVisible, setSubMenuVisible] = useState(false);
    const showSubMenu = () => {
        setSubMenuVisible(true);
    };

    const hideSubMenu = () => {
        setSubMenuVisible(false);
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light custom-flex" style={{ background: 'black' }} >
                <div className="container-fluid align-items-center">

                    <div className="row w-100">
                        <div className="col-md-5 col-sm-4 d-lg-none">
                            <button
                                className="navbar-toggler"
                                type="button"
                                data-toggle="collapse"
                                data-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                                style={{ backgroundColor: 'transparent' }}
                            >
                                <span className="navbar-toggler-icon" style={{ color: 'white' }}></span>
                            </button>
                        </div>

                        <div className="col-lg-3 col-md-4 mx-md-auto col-sm-5 ">
                            <NavLink className="navbar-brand" to="/">
                                <img className="logo_img" src="/img/nav-logo.png" alt="" />
                            </NavLink>
                        </div>
                        <div className="col-lg-7 d-md-none d-sm-none d-lg-flex custom-search">
                            <div className="mx-auto ">
                                <div className="nav-group ">
                                    <svg className="icon" aria-hidden="true" viewBox="0 0 24 24">
                                        <g>
                                            <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z" />
                                        </g>
                                    </svg>
                                    <input placeholder="Search" type="search" className="nav-search w-100" />
                                    {/* <input type="text" /> */}

                                </div>

                            </div>
                        </div>
                        <div className="col-lg-2  col-md-3 col-sm-3">
                            <div className='d-flex ml-md-5 ml-lg-0 ml-sm-0'>
                                <div className="icon-search" >
                                    <li>
                                        <NavLink
                                            to="#"
                                            onMouseEnter={showSearchBar}
                                            onMouseLeave={hideSearchBar}
                                        >
                                            <BsSearch size={18} />
                                        </NavLink>
                                        {isSearchBarVisible && (
                                            <div className="search-bar">
                                                <input type="text" placeholder="Search Products..." />
                                            </div>
                                        )}
                                    </li>
                                </div>

                                <div className="icon-cart " >
                                    <li>
                                        <NavLink to="/cart">
                                            <FiShoppingCart size={18} />
                                        </NavLink>
                                    </li>
                                </div>

                                {!user ? (
                                    <NavLink
                                        to="/account/login"
                                        id="nav-btn"
                                        className="btn btn-dark my-2 my-sm-0"
                                    >
                                        Login
                                    </NavLink>
                                ) : (
                                    <div className="dropdown show">
                                        <NavLink
                                            to="#"
                                            className="icon-cart"
                                            role="button"
                                            id="dropdownMenuLink"
                                            data-toggle="dropdown"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                        >
                                            <RiAccountCircleLine size={18} />
                                        </NavLink>

                                        <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                            <NavLink className="dropdown-item" to="#">
                                                Profile
                                            </NavLink>
                                            <NavLink className="dropdown-item" to="#">
                                                Orders
                                            </NavLink>
                                            <NavLink className="dropdown-item" to="#">
                                                Addresses
                                            </NavLink>
                                            <Form
                                                className="account-logout"
                                                method="POST"
                                                action="/account/logout"
                                            >
                                                <button type="submit" className="dropdown-item">
                                                    Sign out
                                                </button>
                                            </Form>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mt-lg-0 d-lg-none">
                            {menuItems.map((menuItem, index) => (
                                <li
                                    key={index}
                                    className={`nav-item mx-lg-3 mx-md-0 mx-sm-0 ${menuItem.active ? 'active' : ''}`}
                                    onMouseEnter={showSubMenu} // Show submenu on hover
                                    onMouseLeave={hideSubMenu} // Hide submenu when mouse leaves
                                >
                                    <NavLink className="nav-link" to={menuItem.link} style={{ color: 'white' }}>
                                        {menuItem.text}
                                        {menuItem.active && (
                                            <span className="sr-only">(current)</span>
                                        )}
                                    </NavLink>

                                    {menuItem.text === 'Products' && isSubMenuVisible && (
                                        <div className="submenu" style={{ background: 'black' }}>
                                            <div className="submenu-content">
                                                <div className="row p-4">
                                                    <div className="submenu-row">
                                                        <div className="submenu-category">
                                                            <div className="col mt-2">
                                                                <NavLink to={'/'}>
                                                                    <h4 className='text-center  ' style={{ color: 'white' }} >Protein</h4>
                                                                </NavLink>
                                                                <NavLink to={'/'}>
                                                                    <p className='text-center  '    ><img src={Protein} className='w-50' alt="" /></p>
                                                                </NavLink>
                                                                <NavLink to={'/'}>
                                                                    <p className='mt-2 text-center  ' style={{ color: 'white' }}   >Whey Protein</p>
                                                                </NavLink>
                                                                <NavLink to={'/'}>
                                                                    <p className='mt-1 text-center  ' style={{ color: 'white' }}  >Whey Blend</p>
                                                                </NavLink>
                                                                <NavLink to={'/'}>
                                                                    <p className='mt-1 text-center  ' style={{ color: 'white' }}   >Whey Protein Isolate</p>
                                                                </NavLink>

                                                            </div>
                                                        </div>
                                                        <div className="submenu-category">
                                                            <div className="col mt-2">
                                                                <NavLink to={'/'}>
                                                                    <h4 className='text-center  ' style={{ color: 'white' }} >Gainer</h4>
                                                                </NavLink>
                                                                <NavLink to={'/'}>
                                                                    <p className='text-center  '   >   <img src={Protein} className='w-50' alt="" /></p>
                                                                </NavLink>
                                                                <NavLink to={'/'}>
                                                                    <p className='mt-2 text-center  ' style={{ color: 'white' }}>Mass Gainer</p>
                                                                </NavLink>
                                                                <NavLink to={'/'}>
                                                                    <p className='mt-1 text-center  ' style={{ color: 'white' }} >Weight Gainer</p>
                                                                </NavLink>



                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="submenu-row">
                                                        <div className="submenu-category">
                                                            <div className="col mt-2">
                                                                <NavLink to={'/'}>
                                                                    <a href=""> <h4 className='text-center  ' style={{ color: 'white' }}>Pre/Post Workout</h4></a>
                                                                </NavLink>
                                                                <NavLink to={'/'}>
                                                                    <p className='text-center  '   >   <img src={Protein} className='w-50' alt="" /></p>
                                                                </NavLink>
                                                                <NavLink to={'/'}>
                                                                    <p className='mt-2 text-center  ' style={{ color: 'white' }}>Pre-Workout</p>
                                                                </NavLink>
                                                                <NavLink to={'/'}>
                                                                    <p className='mt-1 text-center  ' style={{ color: 'white' }}>Amino Acids && BCAAs</p>
                                                                </NavLink>
                                                                <NavLink to={'/'}>
                                                                    <p className='mt-1 text-center  '  >Glutamine</p>
                                                                </NavLink>
                                                                <NavLink to={'/'}>
                                                                    <p className='mt-1 text-center  '  >Carnitine</p>
                                                                </NavLink>


                                                            </div>
                                                        </div>
                                                        <div className="submenu-category">
                                                            <div className="col mt-2">
                                                                <NavLink to={'/'}>
                                                                    <h4 className='text-center  ' style={{ color: 'white' }} >Workout Essentials</h4>
                                                                </NavLink>
                                                                <NavLink to={'/'}>
                                                                    <p className='text-center  '  >   <img src={Protein} className='w-50' alt="" /></p>
                                                                </NavLink>
                                                                <NavLink to={'/'}>
                                                                    <p className='mt-2 text-center  ' style={{ color: 'white' }} >Testosterone Support</p>
                                                                </NavLink>
                                                                <NavLink to={'/'}>
                                                                    <p className='mt-1 text-center  ' style={{ color: 'white' }} >Multivitamins</p>
                                                                </NavLink>
                                                                <NavLink to={'/'}>
                                                                    <p className='mt-1 text-center  ' style={{ color: 'white' }}>Fat Burner</p>
                                                                </NavLink>


                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    )}
                                    {menuItem.text === 'Contact Us' && isSubMenuVisible && (
                                        <div className="submenu w-50" style={{ background: 'black', color: 'white' }}>
                                            <div className="submenu-content">
                                                <div className="row p-4">
                                                    <div className="col mt-2">
                                                        <NavLink to={'/'}>
                                                            <h4 className='text-center' style={{ color: 'white' }}>Contact Us</h4>
                                                        </NavLink>

                                                        <NavLink to={'/'}>
                                                            <p className='mt-2 text-center' style={{ color: 'white' }}>Email :  care@buildmybody.in</p>
                                                        </NavLink>
                                                        <NavLink to={'/'}>
                                                            <p className='mt-1 text-center' style={{ color: 'white' }}>Phone Number: +919494979191</p>
                                                        </NavLink>
                                                        {/* Add more contact options if needed */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>

                    </div>
                </div>
            </nav>




            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand d-lg-none d-md-flex" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse " id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Filter <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Authencity</a>
                        </li>

                    </ul>
                </div>
            </nav>
        </>
    )
}

export default filter