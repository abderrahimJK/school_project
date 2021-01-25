import React,{ Component } from 'react';
import { BrowserRouter , Route } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import _2BAC from "./pages/_2Bac";
import _1BAC from "./pages/_1Bac";
import Blog from "./pages/Blog";
import BTS from "./pages/Bts";
import TC from "./pages/Tc";
import NavBar from './comps/NavBar';



import "./App.css";

class App extends Component{
    data = {
        name:""
    }
    render(){
        return(
            <BrowserRouter>
                <div className="App">
                    <NavBar />
                    <div className="page-body">
                        <Route path="/" component={HomePage} exact/>
                        <Route path="/bts/" component={BTS} />
                        <Route path="/2bac/" component={_2BAC} />
                        <Route path="/1bac" component={_1BAC} />
                        <Route path="/tc" component={TC} />
                        <Route path="/blog" component={Blog} />
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;
