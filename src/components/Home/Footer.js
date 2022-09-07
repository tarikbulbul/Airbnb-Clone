import React from 'react';
import "./Footer.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
  return (
    <div className='footer'>
        <div className='footer-wrap'>
            <p>© 2022 Airbnb clone</p>
            <div className='social'>
                <a href="https://www.facebook.com">
                    <FacebookIcon className='social-icon' />
                </a>
                <a href="https://www.instagram.com">
                    <InstagramIcon className='social-icon' />
                </a>
                <a href="https://twitter.com">
                    <TwitterIcon className='social-icon' />
                </a>
                <a href="https://www.linkedin.com">
                    <LinkedInIcon className='social-icon' />
                </a>
            </div>
        </div>
        <p>Created by Tarık Bülbül</p>
    </div>
  )
}

export default Footer