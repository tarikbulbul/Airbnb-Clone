import React from 'react';
import "./Card.css";

function Card({src, title}) {
  return (
    <div className='card'>
        <img src={src} alt="" />
        <div className='card-info'>
            <h2>{title}</h2>
        </div>
    </div>
  )
}

function Card2({src,title,description}) {
  return (
    <div className='card2'>
        <img src={src} alt="" />
        <div className='card2-info'>
          <h2>{title}</h2>
          <h4>{description}</h4>
        </div>
    </div>
  )
}

function Card3({src,title}) {
  return (
    <div className='card3'>
        <img src={src} alt="" />
        <div className='card3-info'>
          <h2>{title}</h2>
        </div>
    </div>
  )
}

export  { Card, Card2, Card3 }