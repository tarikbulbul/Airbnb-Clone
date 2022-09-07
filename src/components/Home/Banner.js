import React, { useState } from 'react';
import Button from '@mui/material/Button';
import "./Banner.css";
import DatePicker from "./DatePicker";
import { useNavigate } from 'react-router-dom';

function Banner() {
  const navigate = useNavigate();
  const [showSearch, setShowSearch] = useState(false);

  function handleClick() {
    navigate('/search');
  };

  return (
    <div className='banner'>
        <div className='banner-search'>
            {showSearch && <DatePicker />}
            <Button
            onClick={() => setShowSearch(!showSearch)}
            className='banner-searchButton'
            variant="outlined"
            >
              {showSearch ? "Hide" : "Search Dates"}
            </Button>
        </div>
        <div className='banner-info'>
            <h1>Get out and stretch your imagination</h1>
            <h5>
            Plan a different kind of getaway to uncover the hidden gems near you.
            </h5>
            <Button onClick={handleClick} variant="outlined">
              Explore Nearby
            </Button>
        </div>
    </div>
  )
}

export default Banner