import React, { Component } from 'react';
import logo from './../../logo.svg';
import Modal from 'react-modal';
import ShowModalModels from './showModalModels';
import ShowModels from './ShowModels';
import Header from '../Header/Header';
import SearchModel from './SearchModel';
import api from './../../api/Api';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };
  Modal.setAppElement('#root');  
export default class ModalModels extends Component{

    constructor() {
        super();
    
        this.state = {
          modalIsOpen: false,
          urls:[],
        };
    
        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
      }
      
    
      openModal() {
        this.setState({modalIsOpen: true});
      }
    
      afterOpenModal() {
        // references are now sync'd and can be accessed.
      }
    
      closeModal() {
        this.setState({modalIsOpen: false});
      }
    
    render(){
        const urls =  [ { url: 'https://picsum.photos/200/300'},{ url: 'https://picsum.photos/200/300'}, { url: 'https://picsum.photos/200/300'},{ url: 'https://picsum.photos/200/300'}, {url:'https://picsum.photos/200'} ]
        return(
            <div>
        <button onClick={this.openModal}>Open Modal</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
           
            <Header title="Show Models"/>
            <SearchModel />
          <button onClick={this.closeModal}>close</button>
        </Modal>
      </div>
        );
    }
}