import React , { useRef , useState , useEffect }  from 'react';
import{ Link }from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import {Container, Nav, Navbar, NavItem} from "react-bootstrap";
import {bts} from "../pages/db/LessonsContent"
import {dbac} from "../pages/db/LessonsContent"
import {pbac} from "../pages/db/LessonsContent"
import "./NavBar2.css"
import user from "../assets/img/user.svg";
import Logo from "../assets/img/logo.svg";
import searchIcon from "../assets/img/_search.svg";
import CloseIcon from "../assets/img/Cancel.svg";
import Search from '../comps/search';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';




const NavBar = () => {
    
    const [isVisible, setIsVisible] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [anchorElB, setAnchorElB] = useState(null);
    const [anchorElP, setAnchorElP] = useState(null);
    const open = Boolean(anchorEl);
    const openB = Boolean(anchorElB);
    const openP = Boolean(anchorElP);
    const styles = {
        subLinks:{
            textDecoration:"none",
            color:"#4EB575", 
            padding:"9px 0", 
            fontWeight:"bold"
           }
           
    }
    const handleClickB = (event) => {
        setAnchorElB(event.currentTarget);
    };

    const handleCloseB = () => {
        setAnchorElB(null);
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleClickP = (event) => {
        setAnchorElP(event.currentTarget);
    };

    const handleCloseP = () => {
        setAnchorElP(null);
    };
    
    

    return(
        <>
            <div className="full-container nav-top">
                <div className="container nav-top-child">
                    <div className="top-content">
                        <div className="info">
                            <label>Email : Exemple@ibnAlhaytam.ma</label>
                            <label>Phone : 05 24568765</label>
                        </div>
                        <div className="nav-top-btn">
                            <Link to="/login"><img src={user} className="svg-user" alt="Se Connecter"></img></Link>
                        </div>
                    </div> 
                </div>
            </div>
            
            

        <Container>
           
            <Navbar  collapseOnSelect expand="lg"  bg="#fff" variant="light">
            <Navbar.Brand>
                <Link to="/"><img className="logo" src={ Logo } alt="logo"></img></Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav " />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto ">
                    
                    <NavItem className=" nav-items">
                    <Link className="links" to="/" >Home</Link>
                    </NavItem>
                    <NavItem>
                    <Link style={{cursor:"pointer"}} className="links"  onClick={handleClickB}>BTS</Link>
                    <Menu
                        id="fade-menu"
                        anchorEl={anchorElB}
                        open={openB}
                        onClick={handleCloseB}
                        TransitionComponent={Fade}
                    >
                        {bts.map((val1, key1) => (
                            <MenuItem onClick={handleCloseB}>
                                <Link 
                                    style={styles.subLinks} 
                                    key={key1} to={`/bts/${val1.idfiliere}`}
                                >
                                    {val1.filiere}
                                </Link>
                            </MenuItem>
                        ))}  
                    </Menu>
                    </NavItem>
                    <NavItem>
                    <Link style={{cursor:"pointer"}} className="links"  onClick={handleClick}>2Bac</Link>
                    <Menu
                        id="fade-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={open}
                        onClick={handleClose}
                        TransitionComponent={Fade}
                    >
                        {dbac.map((branche, key) => (
                            <MenuItem onClick={handleClose}>
                                <Link 
                                    style={styles.subLinks} 
                                    key={key} to={`/bts/${branche.idfiliere}`}
                                >
                                    {branche.filiere}
                                </Link>
                            </MenuItem>
                        ))} 
                    </Menu>
                    </NavItem>
                    <NavItem>
                    <Link style={{cursor:"pointer"}} className="links"  onClick={handleClickP} > 1Bac</Link>
                    <Menu
                        id="fade-menu"
                        anchorEl={anchorElP}
                        keepMounted
                        open={openP}
                        onClick={handleCloseP}
                        TransitionComponent={Fade}
                    >
                        {pbac.map((branche, key) => (
                            <MenuItem onClick={handleCloseP}>
                                <Link 
                                    style={styles.subLinks} 
                                    key={key} to={`/cour/${branche.idfiliere}`}
                                >
                                    {branche.filiere}
                                </Link>
                            </MenuItem>
                        ))}   
                    </Menu>
                    </NavItem>
                    <NavItem>
                    <Link className="links" to="/tc" >TC</Link>
                    </NavItem>
                    <NavItem>
                    <Link className="links" to="/blog" >Blog</Link>
                    </NavItem>
                    <NavItem>
                            <Link className="links searchIcon" 
                                onClick={() => {
                                    setIsVisible(v => !v);
                                }}
                            >
                                <img className="searchIcon" src={!isVisible ? searchIcon : CloseIcon} alt="Search"></img></Link>
                    </NavItem>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </Container> 
        
                    {isVisible ? <div className="searchContainer"  ><Search /></div> : ''}
                
        </>    
    )
}

export default NavBar;

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