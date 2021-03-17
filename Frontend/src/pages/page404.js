import React from 'react'
import '../assets/css/pageStyle.css'

const page404 = () => {

  return (
        <>
            <div id='pg404_background-404'>
            <div id="pg404_stars1" />
            <div id="pg404_stars2" />
            <div id="pg404_stars3" />
                <div className="_404Content">
                    <h1>404</h1>
                </div>
                <div className="info_404">
                    <p>Oops..! la page que vous chercher n'exist pas</p>
                </div>
            </div>
        </>
    )
}

export default page404;