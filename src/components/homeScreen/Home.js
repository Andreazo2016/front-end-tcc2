import React, {Component} from 'react';
import Header from './../Header/Header';
import './Home.css';
import Searcher from '../Searcher/Searcher';
import { AsyncStorage } from 'AsyncStorage';
import Show3dModel from '../3dModels/Show3dModels';

export default class Home extends Component {
  
    state = {
        obj:"",
        mtl:""
    }
    componentDidMount(){
        setInterval(() => {
            const newObj = localStorage.getItem('myObj');
            const newMtl = localStorage.getItem('myMtl');
            this.setState({obj:newObj});
            this.setState({mtl:newMtl});
        }, 5000); 
    }
    render(){
       
        return(
            <div>
                <Header title="Header Inicial" />
                <Searcher />
                {console.log(this.state.obj)}
                {console.log(this.state.mtl)}
                 <Show3dModel obj={this.state.obj} mtl={this.state.mtl}/>
            </div>
        );
    }
}