import React, {Component} from 'react';
import Header from './../Header/Header';
import './Home.css';

export default class Home extends Component{
    render(){
        return(
            <div>
                <Header title="Header Inicial" />
                <p>Tela inicial</p>
            </div>
        );
    }
}