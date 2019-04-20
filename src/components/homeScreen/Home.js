import React, {Component} from 'react';
import Header from './../Header/Header';
import './Home.css';
import Searcher from '../Searcher/Searcher';

export default class Home extends Component{
    render(){
        return(
            <div>
                <Header title="Header Inicial" />
                <Searcher />
            </div>
        );
    }
}