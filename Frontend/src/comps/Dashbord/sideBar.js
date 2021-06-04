import React from 'react'
import {Link} from 'react-router-dom'
import {SideBarContent} from './SideBarContent'
import "./Styles.css"

const sideBar = () => {
    return (
        <>
            <div className="sidebar">
                <ul className="sideBarList">
                {SideBarContent.map((val, key)=>{
                    return (<li 
                                key={key} 
                                /* onClick={() => window.location.pathname = val.link} */
                                className="RowItem"
                                id={window.location.pathname == val.link ? "active" : ""}
                            >
                        <div id="icon">
                            {val.icon}
                        </div>
                        <div id="title">
                            <Link to={val.link}>{val.title}</Link>
                        </div>
                    </li>
                    );
                })}
                </ul>
            </div>
        </>
    )
}

export default sideBar
