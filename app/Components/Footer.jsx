import {BsInstagram} from 'react-icons/bs';
import {CiFacebook} from 'react-icons/ci';
import {CiTwitter} from 'react-icons/ci';
import {AiOutlineYoutube} from 'react-icons/ai';
import {Link} from '@remix-run/react';

const Footer = () => {
  return (
    <>
      <div className="container">
        <div className="footer-top-section d-flex align-items-center  ">
          <p>100% Satisfaction</p>
          <p>Save 20% Every Time</p>
          <p>Fast Free Shipment</p>
          <p>Gift and Vouchers</p>
        </div>
      </div>

      <div className="footer-row">
        <div className="container">
          <div className="row ">
            <div className="col-lg-4 col-md-6  ">
              <div className=" w-75 ">
                <div className="footer-details">
                  <img className="footer-img" src="/img/logo.png" alt="" />
                  <p className="mt-3">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Dignissimos illo ex inventore, nulla iste ut incidunt eum
                    pariatur
                  </p>
                  <div className="footer-social-icons">
                    <Link to="/">
                      <BsInstagram className="icons" size={25} />
                    </Link>
                    <Link to="/">
                      <AiOutlineYoutube size={30} />
                    </Link>
                    <Link to="/">
                      <CiTwitter size={30} />
                    </Link>
                    <Link to="/">
                      <CiFacebook size={30} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6  footer-details ">
              <div>
                <h6>CUSTOMER SERVICE</h6>
                <Link to="/track">
                  <p>Track My Order</p>
                </Link>
                <Link to="/myaccount">
                  <p>Account</p>
                </Link>
                <Link to="/myorders">
                  <p>Orders</p>
                </Link>
                <Link to="/blog">
                  <p>Blog</p>
                </Link>
              </div>
            </div>
            <div className="col-lg-2 col-md-6  footer-details">
              <div>
                <h6>PRODUCTS</h6>
                <Link to="/products">
                  <p>Sports Nutrition</p>
                </Link>
                <Link to="/products">
                  <p>Essential Vitamins</p>
                </Link>
                <Link to="/produts">
                  <p>Weight Loss</p>
                </Link>
                <Link to="/products">
                  <p>Weight Loss</p>
                </Link>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 footer-details">
              <div>
                <h6>COMPANY</h6>
                <Link to="/shippingpolicy">
                  <p>Shipping Policy</p>
                </Link>
                <Link to="/terms">
                  <p>Terms & Condition</p>
                </Link>
                <Link to="/returnpolicy">
                  <p>Return and Replacement Policy</p>
                </Link>
                <Link to="/privacypolicy">
                  <p>Privacy Policy</p>
                </Link>
                <Link to="/aboutus">
                  <p>About Us</p>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-4">
          <div className="row footer-bg pb-5">
            <div className="col-sm-6 custom-footer2  ">
              <p>@2023 BuildMyBody. All Rights Reserved</p>
            </div>
            <div className="col footer-end custom-footer">
              <Link to="/" className="">
                Home
              </Link>
              <Link to="/products" className="">
                Product
              </Link>
              <Link to="/blog" className="">
                Blog
              </Link>
              <Link to="/contact">Contact Us</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
