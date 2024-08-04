import React from 'react';
import './Footer.css';
import youtube_icon from '../../assets/youtube_icon.png';
import twitter_icon from '../../assets/twitter_icon.png';
import instagram_icon from '../../assets/instagram_icon.png';
import facebook_icon from '../../assets/facebook_icon.png';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-icons">
        <img src={facebook_icon} alt="Facebook" />
        <img src={instagram_icon} alt="Instagram" />
        <img src={twitter_icon} alt="Twitter" />
        <img src={youtube_icon} alt="YouTube" />
      </div>
      <div className="footer-links">
        <ul>
          <li>FAQ</li>
          <li>Help Center</li>
          <li>Account</li>
          <li>Media Center</li>
          <li>Investor Relations</li>
          <li>Jobs</li>
          <li>Redeem Gift Cards</li>
          <li>Buy Gift Cards</li>
          <li>Ways to Watch</li>
          <li>Terms of Use</li>
          <li>Privacy</li>
          <li>Cookie Preferences</li>
        
          
        </ul>
      </div>
      <p className='copyright-text'>@ 1997-2023 Netfliux, Inc.</p>
    </div>
  );
};

export default Footer;
