import React from "react";
import {pbac} from "./db/LessonsContent";
import "../assets/css/pageStyle.css";
import Page404 from './page404';


const _1bac = ({match}) => {
    const urlfiliere = match.params.filiere
    const filieres = pbac.find( branche => branche.idfiliere === urlfiliere)

    if(!filieres) return <Page404 />
    console.log(filieres);
    return (
        <>
           {filieres.lesson.map( (cours, key) =>(
               <h1 key={key}>{cours.title}</h1>
           ))}
        </>
    ); 
}

export default _1bac;
