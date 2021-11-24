import React, { useState } from 'react'

export default function Main() {
    const[username, setusername]=useState('') //hooks to take input and set
    const[email, setemail]=useState('')
    const[password, setpassword]=useState('')
    const[cpassword, setcpassword]=useState('')

    const[eusername, seteusername]=useState('') //error hooks to display on error
    const[eemail, seteemail]=useState('')
    const[epassword, setepassword]=useState('')
    const[ecpassword, setecpassword]=useState('')

    const[ucolour, setucolour]=useState('') //border colour hooks
    const[ecolour, setecolour]=useState('')
    const[pcolour, setpcolour]=useState('')
    const[cpcolour, setcpcolour]=useState('')

    

    function validate (){
        console.log(username + email + password + cpassword) //print in console to validate entry 
        //username validation
        if(username.length>=8){
            seteusername('')
            setucolour('green')
        }
        else{
            seteusername('username must be atleast 8 characters long')
            setucolour('red')
        }
        //email validation
        if(email.includes('@gmail') || email.includes('@hotmail') || email.includes('@yahoo') || email.includes('@icloud')){
            seteemail('')
            setecolour('green')
        }
        else{
            seteemail('please enter a valid email address')
            setecolour('red')
        }
        //password validation
        if(password.length>=8){
            setepassword('')
            setpcolour('green')
        }
        else{
            setepassword('password must be atleast 8 characters long')
            setpcolour('red')
        }
        //confirm password validation
        if(cpassword===password){
            setecpassword('')
            setcpcolour('green')
        }
        else{
            setecpassword('passwords do not match')
            setcpcolour('red')
        }

    }

    return (
        <div className="row justify-content-center">
            <div className="col-md-4 shadow p-3 mb-5 bg-white rounded">
                <h1>Form Validation</h1>
                <input type="text" placeholder='username' className='form-cotrol' style={{borderColor: ucolour}}
                value={username} onChange={(e)=>{setusername(e.target.value)}} />
                <p>{eusername}</p>
                <input type="text" placeholder='email' className='form-cotrol' style={{borderColor: ecolour}}
                value={email} onChange={(e)=>{setemail(e.target.value)}} />
                <p>{eemail}</p>
                <input type="text" placeholder='password' className='form-cotrol' style={{borderColor: pcolour}}
                value={password} onChange={(e)=>{setpassword(e.target.value)}}/>
                <p>{epassword}</p>
                <input type="text" placeholder='confirm password' className='form-cotrol' style={{borderColor: cpcolour}}
                value={cpassword} onChange={(e)=>{setcpassword(e.target.value)}} />
                <p>{ecpassword}</p>
                <button type="button" class="btn btn-success" onClick={validate}>Submit</button>
            </div>
        </div>
    )
}
