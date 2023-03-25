import React from "react";
import "./Footer.css";
import "./Foot";


const Footer = () => {
  return(
    <>
   <footer>
    <div className="footer">
   <div className="footer-about"> 
  <h3>ABOUT</h3>
  <p>Contact Us</p>
  <p>About Us</p>
  <p>Careers</p>
  <p>Flipkart Stories</p>
  <p>Press</p>
  <p>Flipkart Wholesale</p>
  <p>Corporate Information</p>
    </div>
     <div className="footer-help">
      <h3>HELP</h3>
      <p>Payments</p>
      <p>Shipping</p>
      <p>Cancellation & Returns</p>
      <p>FAQ</p>
      <p>Report Infringement</p>
      </div>

<div className="footer-policy">
  <h3>POLICY</h3>
  <p>Return Policy</p>
  <p>Terms Of Use</p>
  <p>Security</p>
  <p>Privacy</p>
  <p>Sitemap</p>
  <p>EPR Compliance</p>
  </div>
  <div className="footer-social">
    <h3>SOCIAL</h3>
    <p>Facebook</p>
    <p>Twitter</p>
    <p>YouTube</p>
  </div>
  <div className="footer-mail">
    <h3>Mail Us:</h3>
    <p>Flipkart Internet Private Limited,</p>
    <p>Buildings Alyssa,Begonia &</p>
    <p>Clove Embassy Tech Village,</p>
    <p>Outer Ring Road Devarabeesanahalli Village,</p>
    <p>Bengaluru, 560103,</p>
    <p>Karnataka, India</p>
  </div>
  <div className="footer-address">
    <h3>Registered Office Address:</h3>
    <p>Flipkart Internet Private Limited,</p>
    <p>Buildings Alyssa,Begonia &</p>
    <p>Clove Embassy Tech Village,</p>
    <p>Outer Ring Road Devarabeesanahalli Village,</p>
    <p>Bengaluru, 560103,</p>
    <p>Karnataka, India</p>
    <p>CIN:U51109KA2012PTC066107</p>
    <p>Telephone:<span style={{color:"#2874f0"}}> 044-45614700</span></p>
  </div>
  </div>
  <div className="footer-bottom">
    <p>Become a Seller</p>
    <p>Advertise</p>
    <p>Gift Cards</p>
    <p>Help Center</p>
    <p>&copy;2007-2023 Flipkart.com</p>
    
    <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/payment-method_69e7ec.svg" 
    alt="cards" className="footer-cards"/>
    </div>






    


</footer>
   </>
  );
};

export default Footer;