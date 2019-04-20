import React, { Component } from 'react';
import ShowModels from './ShowModels';
import './ShowModalModels.css'
export default class ShowModalModels extends Component{
    
    click = (e) =>{
        e.preventDefault();
        console.log("Was clicked");
       
    }  
    showArray = ()=>{
        const arraysUrl = this.props.urls;
         const arrays = arraysUrl.map( (element, i) => {
            console.log(element.url);
            return (
            <button key={i} onClick={this.click}>
                      <ShowModels  url={element.url} alt={i} />
            </button>
            );
        });

        return arrays.slice(0,4);

    }  
    render(){
         
        return(
            <div className="container-models">
              {
                this.showArray() 
              }
            </div>
        );
    }
}