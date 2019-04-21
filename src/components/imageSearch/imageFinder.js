import React, { Component } from 'react';
import api from './../../api/Api';
import ShowImageModal from './showImageModal';

export default class ImageFinder extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.state = { urls: [] };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  getModels = async (keywords) => {
    const data = api.get(`/image/${keywords}`);
    return data;
  }
  handleSubmit(event) {
    const keywords = this.state.value;
    const promisse = this.getModels(keywords);
    promisse.then( data => {
      const { results } = data.data;
    const listUrls =  results.map( obj => {
      const { urls } = obj;
        return {url: urls.full};
      })
      console.log(listUrls);
      this.setState({urls:listUrls});
    })
    .catch( erro => {
      console.log( erro );
    })

    event.preventDefault();
  }

  render() {
    return (
      <div >
        <div className="container-search">

          <form onSubmit={this.handleSubmit}>
            <label>
              <input type="text" value={this.state.value} onChange={this.handleChange} className="input-model" />
            </label>
            <input type="submit" value="Submit" className="btn-submit" />
          </form>
        </div>
        <ShowImageModal urls={this.state.urls} />
      </div>
    );
  }
}