import React from 'react';
import{ Link }from 'react-router-dom'
import "./footer.css";

const Footer = () => {
        return(
              <footer>
                <div className="f-top">
                    <div className="container footer_contente">
                        <div className="_contact">
                            <div><label>Lycée Technique Ibn Alhaitam</label></div>
                            <br />
                            <div className="_span">
                                <span>adresse<br />
                                ourazazate, 45000</span><br />
                                <span>+212 500 222 3333</span><br />
                                <span>ibnAlhaitam@lyceetechnique.ma</span>
                            </div>
                            
                        </div>
                        <div className="menu">
                            <div className="title_footer"><label htmlFor="Menu">Menu</label></div><br />
                                <span><Link className="links" to="/">Home</Link></span><br />
                                <span><Link className="links" to="/bts">BTS</Link></span><br />
                                <span><Link className="links" to="/2bac">2Bac</Link></span><br />
                                <span><Link className="links" to="/1bac">1Bac</Link></span><br />
                                <span><Link className="links" to="/tc">TC</Link></span><br />
                                <span><Link className="links" to="/blog">Blog</Link></span>
            
                        </div>
                        <div className="list_site">
                            <div className="title_footer"><label htmlFor="">Sites peut vous intéresser</label></div><br />
                            <span><a href="#">Massar</a></span><br />
                            <span><a href="#">Ministre de l'education</a></span><br />
                            <span><a href="#">Tawjihi</a></span><br />
                            <span><a href="#">Tawjihnet</a></span><br />
                            <span><a href="#">Microsoft Teams</a></span>   
                        </div>
                        <div className="activite">
                            <div className="title_footer"><label htmlFor="">Activite</label></div>
                        </div>
                    </div>
                </div>
                <div className="full-container f-bottom">
                    <div className="copyright">&copy;Ait Bouna</div>
                    <div className="media">Github</div>
                </div>
            </footer>
        )
    }        

export default Footer;