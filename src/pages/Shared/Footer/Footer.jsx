import React from 'react';
import logo from '/rentbd-nav.png'
const Footer = () => {
    return (
        <div>
            <footer className="footer bg-base-200 text-base-content p-10">
  <aside>
    <img src={logo} alt="" />
    <p className='text-lg font-semibold text-white'>
      Car RentalBD</p>
      <p>
      Providing reliable cars since 1992
    </p>
  </aside>
  <nav>
    <h6 className="footer-title text-white">For Renters</h6>
    <a className="link link-hover">About Us</a>
    <a className="link link-hover">How it works</a>
    <a className="link link-hover">FAQs</a>
    <a className="link link-hover">Contacts</a>
  </nav>
  <nav>
    <h6 className="footer-title text-white">Resources</h6>
    <a className="link link-hover">Media & Blogs</a>
    <a className="link link-hover">Partners</a>
    <a className="link link-hover">Privacy Policy</a>
    <a className="link link-hover">Legal Information</a>
  </nav>
  <nav>
    <h6 className="footer-title text-white">Contact</h6>
    <a className="link link-hover">Gulshan Circle-2, Dhaka</a>
    <a className="link link-hover">+880 1751336688</a>
    <a className="link link-hover">helpline@carrentalbd.com</a>
  </nav>
</footer>
        </div>
    );
};

export default Footer;