import React from 'react'
import Logo from '../img/logo.jpg'
import './Main.css'

function Header() {
    return (
        <div>
            <img className="logo" src={Logo} alt=""/>
        </div>
    )
}

export default Header
