import React, { Component } from 'react';
import ShowModels from './ShowModels';
import './ShowModalModels.css'

export default class ShowModalModels extends Component{
    
   
    handleClick = async ( element ) =>{
       
       localStorage.setItem('myObj', element.obj);
       localStorage.setItem('myMtl', element.mtl);
       console.log("mtl"+element.mtl)
    }  
    showArray = () => {
        const arraysUrl = this.props.urls;
         const arrays = arraysUrl.map( (element, i) => {
            return (
            <button key={i} onClick={() => { this.handleClick( element ) }}>
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