import React from "react";
import {dbac} from "./db/LessonsContent";
import { Container } from "react-bootstrap";
import Page404 from './page404';
import "../main.css";


const _2bac = ({match}) => {
    const urlfiliere = match.params.filiere
    const filieres = dbac.find( branche => branche.idfiliere === urlfiliere)

    if(!filieres) return <Page404 />
    
    return (
        <>
            <div className="cour-item">
                <Container>
                    <ul>
                        {filieres.lesson.map( (cours, key) =>(
                            <li key={key} >{cours.title}</li>
                        ))}
                    </ul>
                </Container>
           </div>
        </>
    ); 
}

export default _2bac;