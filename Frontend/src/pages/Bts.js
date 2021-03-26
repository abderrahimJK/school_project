import React,{ useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import {bts} from "./db/LessonsContent";
import "../main.css";
import Page404 from './page404';
import { Container , Accordion , Card} from "react-bootstrap";
import axios from "axios";
import PdfReader from "./Views/pdfReader";
import VideoPlayer from "./Views/VideoPlayer";




const Bts = ({match}) => {

    const [Collection, setCollection] = useState([])
    const [Rendered, setRendered] = useState(false)
    const urlfiliere = match.params.filiere
    

    useEffect(() => {
      async function getCours(){
        await axios.get(`http://localhost:5000/cours/${urlfiliere}`).then((res) =>{
        if(res && res.data) {
          console.log(res.data);
          setCollection(res.data);
          return res.data;
        }
        })
      }
      getCours();
    }, [urlfiliere])

    
    const filieres = bts.find( branche => branche.idfiliere === urlfiliere)
    if(!filieres) return <Page404 />
    return (
        <>
           <div className="cour-content">
          <Container>
                {Collection.map( (cours, key) =>(
                  
                <div >
                  <Accordion defaultActiveKey="1">
                  <div className="list-container">
                    <Card>
                      <Accordion.Toggle as={Card.Header} eventKey="0">
                      <span onClick={() =>{ setRendered(v => !v)}} key={key} className="cour-item">{cours.TitreCour}</span>
                      </Accordion.Toggle>
                      <Accordion.Collapse eventKey="0">
                        <div>
                          {Rendered && (
                            <PdfReader />
                          )}
                          {/**/}
                        </div>
                      </Accordion.Collapse>
                    </Card>
                    </div>
                  </Accordion> 
                </div>
                ))}  
                
                <VideoPlayer/>
            </Container>
           
          </div>
        </>
    ); 
}

export default Bts;