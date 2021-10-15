import React from 'react';
import './Hero.scss';
const Hero = (props) => {
    return (
       
        <div className='hero'>
                <h1 className='hero__text'>{props.title}</h1>
        </div>
    )
}

export default Hero;