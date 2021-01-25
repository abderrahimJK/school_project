import React , { useState } from 'react';
import{ Link }from 'react-router-dom'
import "./NavBar.css"
import user from "../assets/img/user.svg";
import Logo from "../assets/img/logo.svg";
import searchIcon from "../assets/img/_search.svg";



const NavBar = () => {

    

    return(
        <>
        <header>
            <div className="full-container nav-top">
                <div className="container nav-top-child">
                    <div className="top-content">
                        <div className="info">
                            <label>Email : Exemple@ibnAlhaytam.ma</label>
                            <label>Phone : 05 24568765</label>
                        </div>
                        <div className="nav-top-btn"><a href="#!">
                            <img src={user} className="svg-user" alt="Se Connecter"></img></a>
                        </div>
                    </div> 
                </div>
            </div>
            
            <nav className="full-container">   
                <div className="container main-nav">
                    <Link to="/"><img className="logo" src={ Logo } alt="Connecter"></img></Link>
                    <ul className="menu-main-navigation">
                        <li>
                            <Link className="links" to="/" >Home</Link>
                        </li>
                        <li>
                            <Link className="links" to="/Bts" >BTS</Link>
                        </li>
                            
                        <li>
                            <Link className="links" to="/2bac">2Bac</Link>
                        </li>
                        <li>
                            <Link className="links" to="/1bac" >1Bac</Link>
                        </li>
                        <li>
                            <Link className="links" to="/tc" >TC</Link>
                        </li>
                        <li>
                            <Link className="links" to="/blog" >Blog</Link>
                        </li>
                        <li>
                            <Link className="links" to="/search"><img className="searchIcon" src={searchIcon} alt="Search"></img></Link>
                        </li>
                    </ul>
                </div> 
            </nav>    
        </header>
        </>    
    )
}

export default NavBar;