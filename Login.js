import React,{useState} from 'react'
import './Login.css'
import swal from'sweetalert'
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css' //import bootstrap after npm install bootstrap in cli

// must expport default to know which fn exported when login is called
export default function Login(){

    const[username,setu]=useState("") //hook to set username on change in placeholder
    const[password,setp]=useState("") //hook to set password on change in placeholder

    function validate(event){
        event.preventDefault();
        if(username=="fgenedi" && password=="12345678"){
            swal('Login successful', 'enjoy browsing','success') //title, message, symbol
        }
        else{
            swal('Login unsuccessful','you have entered an invalid username and/or password', 'error')
        }
    }

    return <div  class="container">
        <div class="row">
            <div class="col-md-4 offset-md-4">
                <form onSubmit={validate}>
                    <p>user authentication</p>
                    <input type="text" placeholder="username" className='form-control' value={username}
                    onChange={(e)=>{setu(e.target.value)}}/>
                    <input type="password" placeholder="password" className='form-control' value={password}
                    onChange={(e)=>{setp(e.target.value)}}/>
                    <button type="submit" class="btn btn-outline-dark">login</button>
                </form>
             </div>
        </div>
    </div>
}