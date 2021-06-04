import React, { useState } from 'react'
import SideBar from './sideBar'
import { BrowserRouter , Route, Switch} from 'react-router-dom'

import FileUpload from './dashComps/FileUpload'
import dashMain from './dashComps/dashMain'
import userTrace from './dashComps/userTrace'
import blogTrace from './dashComps/blogsTrace'
import SideBarContent from './SideBarContent';

import Test from "../search"
import "./Styles.css"


const DashBoard = () => {




    return (
      
            <div className="dashBoard">
                <div className="sidebar-container">
                    <SideBar />
                </div>

                <div className="dashboard-container">
                <BrowserRouter>
                        <Switch>
                            <Route path="/dashboard" component={dashMain} exact/>
                            <Route path="/gestion-cours" component={FileUpload} />
                            <Route path="/Gestion-utilisateur" component={userTrace} />
                            <Route path="/Gestion-Blog" component={blogTrace} />
                        </Switch>
            </BrowserRouter>
                </div>
            </div>
            
        
    )
}

export default DashBoard
