import React from 'react';
import photo from '../../img/cellu.png';
import photo1 from '../../img/mt.png';
import photo3 from '../../img/mp.png';
import photo5 from '../../img/onn.png';
import {Form, Link, NavLink} from '@remix-run/react';

const ShopByBrands = () => {
  return (
    <>
      <section id="shopbb" className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12  ">
            <div className="certificate-card1 ">
              <Link to={`/products/cellucor`} className="text-center mt-4 ">
                <img src={photo} className="w-100" alt="" />
              </Link>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12  ">
            <div className="certificate-card1">
              <Link to={`/products/muscletech`} className="text-center mt-4">
                <img src={photo1} className="w-100   " alt="" />
              </Link>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12  mb-lg-4 mb-1 ">
            <div className="certificate-card1">
              <p className="text-center mt-4">
                <Link to="/products/musclepharm" className="  ">
                  <img src={photo3} className="w-100   " alt="" />
                </Link>
              </p>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12  mb-4">
            <div className="certificate-card1">
              <Link to={`/products/on-nutrition`} className="text-center mt-4">
                <img src={photo5} className="w-100   " alt="" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopByBrands;
