import React  from 'react';
import{ Link }from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import {Container, Nav, Navbar, NavItem} from "react-bootstrap";
import "./NavBar.css"
import user from "../assets/img/user.svg";
import Logo from "../assets/img/logo.svg";
import searchIcon from "../assets/img/_search.svg";



const NavBar = () => {
    return(
        <>
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
            
            {/* <nav className="full-container">   
                <div className="container main-nav">
                    <Link to="/"><img className="logo" src={ Logo } alt="Connecter"></img></Link>
                    <ul className="menu-main-navigation">
                        <li>
                            <Link className="links" to="/" >Home</Link>
                        </li>
                        <li>
                            <Link className="links" to="/lesson-list" >BTS</Link>
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
        </header> */}

        <Container>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Navbar.Brand>
                <Link to="/"><img className="logo" src={ Logo } alt="logo"></img></Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <NavItem>
                    <Link className="links" to="/" >Home</Link>
                    </NavItem>
                    <NavItem>
                    <Link className="links" to="/bts-lesson-list" >BTS</Link>
                    </NavItem>
                    <NavItem>
                    <Link className="links" to="/2bac-lesson-list">2Bac</Link>
                    </NavItem>
                    <NavItem>
                    <Link className="links" to="/1bac-lesson-list" >1Bac</Link>
                    </NavItem>
                    <NavItem>
                    <Link className="links" to="/tc" >TC</Link>
                    </NavItem>
                    <NavItem>
                    <Link className="links" to="/blog" >Blog</Link>
                    </NavItem>
                    <NavItem>
                    <Link className="links" to="/search"><img className="searchIcon" src={searchIcon} alt="Search"></img></Link>
                    </NavItem>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </Container> 
        </>    
    )
}

export default NavBar;