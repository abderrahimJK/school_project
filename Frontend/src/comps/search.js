import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
import  { Spring }  from 'react-spring/renderprops'
import { Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './search.css'


const Search = () => {
    const [searchTerm, setSearchTerm]= useState('') ;
    const [Collection, setCollection] = useState([]);

    


    const handelSubmit = (e) =>{
        e.preventDefault();
        
        if(searchTerm){
            console.log(searchTerm)
        axios.get(`http://localhost:5000/cours/${searchTerm}`).then((res) =>{
            if(res && res.data){
                setCollection(res.data);
                return res.data;
            }
        })
        setSearchTerm('');
    }
    }
    const handelChange = (e)=>{
        setSearchTerm(e.target.value);

    }

    return (

        <>
        <Container>
            <Spring
                from={{opacity: 0 , marginTop: -500 }}
                to={{opacity: 1 , marginTop: 0}}
            >
                {props =>(
                    <div style={props}>
                
                    <form onSubmit={handelSubmit}>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">@</span>
                            <input type="search" className="form-control" value={searchTerm} onChange={handelChange} placeholder="Search her..." />

                        </div>
                        <div className="searchResult">
                            {Collection.map( (cours, key) =>(
                                <li key={key} className="cour-item"><Link to={`/bts/${cours.nomcour}`} >{cours.nomcour}</Link></li>
                            ))}
                        </div>
                    </form>
            
                </div>
                )}
            
            </Spring> 
        </Container>
        </>
    )
}

export default Search;
