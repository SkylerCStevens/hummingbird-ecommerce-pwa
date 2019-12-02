import React from "react";
//Footer that displays on the bottom of each page
const Footer = () => {
  return (
    <footer>
      <div className="text-center mt-5">
        <div className="contact-info-footer">
          {/* Company name and address */}
          <p className="company-name">Hummingbird Guitars Inc.</p>

          <address className="company-address">
            1234 Somewhere Avenue, Charlotte, NC 28211
          </address>
          <span className="phone-number mb-2">Phone: (123)345-5678</span>
        </div>
        {/* Icons for social media linked to Fender social media pages */}
        <a
          href="https://www.facebook.com/Fender/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={require("../images/footer-icons/facebook-icon.jpg")}
            alt="Facebook logo"
            className="logo ml-1"
          />
        </a>

        <a
          href="https://www.instagram.com/fender/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={require("../images/footer-icons/instagram-icon.png")}
            alt="Instagram logo"
            className="logo ml-2"
          />
        </a>

        <a
          href="https://twitter.com/Fender?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={require("../images/footer-icons/twitter-icon.png")}
            alt="twitter logo"
            className="logo ml-2"
          />
        </a>
      </div>
      {/* Copyright and lastUpdated text displayed in the corners of the page */}
      <span className="copyright">Copyright 2019</span>
      <span className="lastUpdated">Last Updated Sep. 27th 2019</span>
    </footer>
  );
};

export default Footer;
