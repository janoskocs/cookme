import React from 'react'
import { Link } from 'react-router-dom'
import heroImg from '../img/hero.png'

const Hero = () => {
    return (
        <div id="hero">

            <div id="hero-cta">
                <h2>The open source recipe blog</h2>
                <Link to='/create'>Share your recipe</Link>
            </div>

        </div>
    )
}

export default Hero