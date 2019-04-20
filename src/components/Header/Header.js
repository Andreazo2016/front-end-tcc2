import React, {Component} from 'react';
import './Header.css';

export default class Header extends Component{
    render(){
        return(
            <div className="container-header">
                <p>{this.props.title}</p>
            </div>
        );
    }
}