import React,{ useState, useEffect } from "react";
import lessonContent from "./db/btsLessonsContent";
import "../main.css";
import Page404 from './page404';
import { Container } from "react-bootstrap";
import axios from "axios";




const Bts = ({match}) => {

    const [Collection, setCollection] = useState([])
    const urlfiliere = match.params.filiere
    

    useEffect(() => {
      async function getCours(){
        await axios.get(`http://localhost:5000/cours/${urlfiliere}`).then((res) =>{
        if(res && res.data) {
          //console.log(res.data);
          setCollection(res.data);
          return res.data;
        }
        })
      }
      getCours();
    }, [urlfiliere])

    
    const filieres = lessonContent.find( branche => branche.idfiliere === urlfiliere)
    if(!filieres) return <Page404 />
    return (
        <>
           
           <div className="cour-content">
          <Container>
              <ul>
                {Collection.map( (cours, key) =>(
                    <li key={key} className="cour-item"><a href={cours.urlcour}>{cours.nomcour}</a></li>
                ))}
              </ul>
            </Container>
          </div>
        </>
    ); 
}

export default Bts;