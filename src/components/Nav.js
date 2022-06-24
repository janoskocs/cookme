import React from 'react'
import logo from '../img/cookmelogo500.png'
import ActiveUser from './ActiveUser'


const Nav = () => {
    return (
        <nav>
            <img src={logo} alt="Logo of CookMe"></img>
            <ActiveUser />

        </nav>
    )
}

export default Nav