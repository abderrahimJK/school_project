import React from "react";
import lessonContent from "./db/tcLessonContent";
import "../main.css";
import { Container } from "react-bootstrap";





const Tc = () => {

    return (
        <>
        <div className="cour-content">
          <Container>
              <ul>
              {lessonContent.map(cours =>(
                  cours.lesson.map( (cour, index)=>(
                    <li key={index} className="cour-item">{cour.title}</li>
                  ))
              ))}
              </ul>
              
            </Container>
          </div>
        </>
    ); 
}

export default Tc;
