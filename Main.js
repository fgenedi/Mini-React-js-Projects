import React, {Component} from 'react'
//class
class Main extends Component{
    constructor(props){
        super(props);
        this.state={ 
            number: 0
         }
    }
    increment= ()=>{
        this.setState({number: this.state.number +1})
    }
    decrement= ()=>{
        this.setState({number: this.state.number -1})
    }
    neutral= ()=>{
        this.setState({number: 0})
    }
    render(){
        return (
            <div className='row jutify-content-center'>
            <div className='col-md-5' style={{marginTop:'200px',marginLeft:'400px', border: '5px solid black'}}>
                <h1 class="text-center">React counter</h1>
                <h1 class="text-center">{this.state.number}</h1>
                <button class="btn btn-light" onClick={this.increment}>increment</button>
                <button class="btn btn-dark" onClick={this.decrement}>decrement</button>
                <button class="btn btn-secondary" onClick={this.neutral}>neutral</button>
            </div>
            </div>
          );
    }
}
export default Main;