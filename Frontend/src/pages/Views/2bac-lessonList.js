import React from 'react'
import { Link } from 'react-router-dom';
import lessonContent from "../db/2abcLessonContent";
import "bootstrap/dist/css/bootstrap.min.css";
import {CardDeck, Card, Container, Button} from "react-bootstrap";


const _2bacLessonList = () => {

    const styles = {
        btsContent:{
            background: '#45AE4E',
            display: 'flex',
           },
           section_bt:{
              
           }
    }

    return (
        <div>
            <div className={styles.section_bts}>
            <Container>
                <CardDeck style={styles.BtsCardDeck}>
                    {lessonContent.map((branche, key) => (
                    <div className="justify-content-center col-lg-5 col-md-6">   
                    <Card>
                        <Card.Img style={styles.img} variant="top" src={branche.image} />
                        <Card.Body>
                        <Card.Title><Link className="lesson-links" key={key} to={`/2bac/${branche.idfiliere}`}>{branche.filiere}</Link></Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                        </Card.Body >
                        <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                    </div>
                    ))}
                </CardDeck>
            </Container>      
            </div>
        </div>
    )
}


export default _2bacLessonList;