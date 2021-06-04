import React, {useState} from "react";
import axios from "axios";
var FormData = require('form-data');
var fs = require('fs');


 export const Register = ()=> {
  
  const [itemchecked , setitemchecked]= useState(false);
  const [username , setUsername] = useState('');
  const [password , setPassword] = useState('');
  const [email , setEmail] = useState('');
  const [functional , setFunctional]= useState('etudient');

 const  handleSubmit = (event) =>{
    // Prevent default behavior
    event.preventDefault();

    const data = new FormData(event.target);
    // Access FormData fields with `data.get(fieldName)`
    // For example, converting to upper case
    data.set('username', data.get('username'));
    data.set('password', data.get('password'));
    data.set('function', data.get('function'));

    // Do your Axios stuff here

    const config = {     
      headers: { 'content-type': 'multipart/form-data' }
    }


     axios.post('http://localhost:5000/login', data, config ).then(response => {
        console.log(response);
    })
    .catch(error => {
        console.log(error);
    })
  }

  
 return (

  <from onsubmit={handleSubmit}>
      <div className="base-container" >
        <div className="header">Register</div>
        <div className="content">
          
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" placeholder="email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password" />
              {
                itemchecked && (
                <div className="form-group">
                  <label htmlFor="password">Code Enseignant</label>
                  <input type="password" name="function" placeholder="#------" />
                </div> 
                )
              }
            </div>
            <div className="checkbox">
              <label htmlFor="checkbox">Enseignant</label>
              <input type="checkbox" name="admin" onClick={ () =>{setitemchecked(v => !v)} }/>
          </div>
          </div>
          
        </div>
        
        <div className="footer">
          <button  type="submit" className="btn">
            Register
          </button>
          
        </div>
      </div>
    </from>
  );

}

