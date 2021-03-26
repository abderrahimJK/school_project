import React,{ Component } from 'react';
import { BrowserRouter , Route, Switch } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import Login from "./comps/login/renderLogin"
import _2BAC from "./pages/_2Bac";
import btsLessonList from "./pages/Views/bts-lessonList";
import _2bacLessonList from "./pages/Views/2bac-lessonList";
import _1bacLessonList from "./pages/Views/1bac-lessonList";
import _1BAC from "./pages/_1Bac";
import Blog from "./pages/Blog";
import BTS from "./pages/Bts";
import TC from "./pages/Tc";
import NavBar from './comps/NavBar';
import NavBar2 from './comps/NavBar2';
import PdfReader from './pages/Views/pdfReader';
import page404 from './pages/page404';
import Uploads from "./comps/FileUpload"






class App extends Component{
    render(){
        return(
            <BrowserRouter>
                <div className="App">
                    <NavBar2 />
                    <div className="page-body">
                        <Switch>
                            <Route path="/" component={HomePage} exact/>
                            <Route path="/bts-lesson-list" component={btsLessonList} />
                            <Route path="/bts/:filiere" component={BTS} />
                            <Route path="/2bac-lesson-list" component={_2bacLessonList} />
                            <Route path="/2bac/:filiere" component={_2BAC} />
                            <Route path="/1bac-lesson-list" component={_1bacLessonList} />
                            <Route path="/1bac/:filiere" component={_1BAC} />
                            <Route path="/tc" component={TC} />
                            <Route path="/login" component={Login} />
                            <Route path="/upload" component={Uploads} />
                            <Route path="/blog" component={Blog} />
                            <Route path="/pdfReader/:titreCour" component={PdfReader} />
                            <Route  component={page404} />
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}

export default App; 