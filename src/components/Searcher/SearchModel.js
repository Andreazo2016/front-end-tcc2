import React, {Component} from 'react';
import ModalModels from './Modal';
import ShowModalModels from './showModalModels';
import './SearchModel.css';
import api from './../../api/Api';

export default class SearchModel extends Component{
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.state = { urls: [] };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      getModels = async ( keywords ) => {
        const data = api.get(`/assets?keywords=${keywords}&format=OBJ&key=AIzaSyBEqxqylCl-ppAEm0OVTLtNZ--1pwdcmYc`);
        return data;
      }
       handleSubmit(event) {
        const keywords = this.state.value;
        const promisse =  this.getModels( keywords );

        promisse.then( response => {
          const {assets} =  response.data;
          const listUrl  = assets.map( ( obj ) => {
            return { url: obj.thumbnail.url };
          }); 
          this.setState({urls: listUrl})
          console.log(listUrl);
        } )
        .catch( error => {
          console.log( error );
        })
        
        event.preventDefault();
      }
    
    render(){
        return(
            <div >
              <div className="container-search">
                <form onSubmit={this.handleSubmit}>
                    <label>
                    <input type="text" value={this.state.value} onChange={this.handleChange}  className="input-model"/>
                    </label>
                    <input type="submit" value="Submit" className="btn-submit"/>
                </form>
                </div>
                <ShowModalModels urls={this.state.urls}  />
            </div>
        );
    }
}