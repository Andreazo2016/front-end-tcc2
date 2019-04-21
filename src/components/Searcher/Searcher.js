import React, { Component } from 'react';
import SearchModel from './SearchModel';
import './searcher.css'
import ModalModels from './Modal';

export default class Searcher extends Component {
    render(){
        return(
            <div className="container-search">
                 <ModalModels nameBtn={this.props.name} show={this.props.show} title={this.props.title}/>
            </div>
        );
    }
}