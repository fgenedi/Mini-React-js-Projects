import React, {useState} from 'react'
//functional
function Main(){
    const [inputValue, setInputValue]=useState('')

    function display(value){
        setInputValue(inputValue + value)
    }
    function clear(){
        setInputValue('')
    }
    function calculate(){
        var answer= eval(inputValue)
        setInputValue(answer)
    }
    return(
        <div className='row justify-content-center' >
            <div className='col-md-5 shadow-lg p-3 mb-5 bg-clear rounded'  style={{marginTop:'170px'}}>
            <h1 class="text-center">React CALCI</h1>
            <table class="table table-hover"> 
                <tr>
                   <input type='text' value={inputValue}/>
                    <button onClick={()=>{clear()}}>C</button>
                </tr>
                <tr>
                    <button onClick={()=>{display('1')}}>1</button>
                    <button onClick={()=>{display('2')}}>2</button>
                    <button onClick={()=>{display('3')}}>3</button>
                    <button onClick={()=>{display('/')}}>/</button>
                </tr>
                <tr>
                    <button onClick={()=>{display('4')}}>4</button>
                    <button onClick={()=>{display('5')}}>5</button>
                    <button onClick={()=>{display('6')}}>6</button>
                    <button onClick={()=>{display('-')}}>-</button>
                </tr>
                <tr>
                    <button onClick={()=>{display('7')}}>7</button>
                    <button onClick={()=>{display('8')}}>8</button>
                    <button onClick={()=>{display('9')}}>9</button>
                    <button onClick={()=>{display('+')}}>+</button>
                </tr>
                <tr>
                    <button onClick={()=>{display('.')}}>.</button>
                    <button onClick={()=>{display('0')}}>0</button>
                    <button onClick={()=>{calculate()}}>=</button>
                    <button onClick={()=>{display('*')}}>*</button>
                </tr>
            </table>
            </div>
            </div>
    )
}
export default Main