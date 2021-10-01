import React from 'react'
import '../Navbar/Navbar.css'

const Navbar = () => {
    return (
        <div>
            <header class="header">
                <nav class="navbar">
                    <a><img src="./images/Portfolio.png" className="navbar-img"></img></a>
                    <ul class="nav-menu">
                        <li class="nav-item">
                            <a class="nav-link">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link">Portfolio</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link">Contact</a>
                        </li>
                        <button className="get-btn">Get Started</button>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Navbar
