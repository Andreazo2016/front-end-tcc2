import React, { Component } from 'react';
import ShowModels from './../Searcher/ShowModels';

export default class ShowImageModal extends Component{
    
   
    handleClick =  ( element ) =>{
       
    
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