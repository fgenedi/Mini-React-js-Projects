import React,{useState} from 'react'

export default function Navigation() {

    const[nstatus, setnstatus]=useState(0)
    const[nwidth, setnwidth]=useState('0px')

    
    function navClick(){
        if(nstatus===0){
            setnstatus(1);
            setnwidth('100%');  
        }
        else{
            setnstatus(0);
            setnwidth('0px');
        }
    }

    return (
        <div>
        <div className='maindiv' style={{width:nwidth}}>
           <button onClick={navClick}><i class="fas fa-bars"></i></button>
           <ul>
               <li>Home</li>
               <li>About</li>
               <li>Services</li>
               <li>Contact us</li>
           </ul>
        </div>
        </div>
    )
}
