import React, { Component } from 'react';
import SearchModel from './SearchModel';
import './searcher.css'

export default class Searcher extends Component {
    render(){
        return(
            <div className="container-search">
                 <SearchModel />
            </div>
        );
    }
}