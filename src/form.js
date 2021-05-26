import React from 'react';
import './style/form.scss';

class Form extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      url: '',
      method: ''
    }
  }

  handleURL = e => {
    let url = e.target.value;
    this.setState({ url });
  }

  handleMethod = e => {
    let method = e.target.value;
    this.setState({ method });
  }

  handleSubmit = async e => {
    e.preventDefault();
    
    // use to not hardcode the website?
    // let requestOptions = {
    //   method: this.state.method,
    //   headers: { 'Content-Type': 'application/json' };
    // }

    let raw = await fetch('https://swapi.dev/api/people/');
    let data = await raw.json();
    let count = data.count;

    let people = data.results;

    // the code below will have people return the name and url
    // let people = data.results.reduce((list, person) => {
    //   list[person.name] = person.url;
    //   return list;
    // }, {});

    this.props.handler(count, people);
    this.props.toggleLoading();
    console.log(JSON.stringify(data.results));
  }

  render() {
    return (
      <form id="form" onSubmit={this.handleSubmit}>
        <h3 id="info">Enter url and select method</h3>
        <input id="inputUrl" type ="text" onChange={this.handleURL} />
        <select id="dropDown" onChange={this.handleMethod}>
        <option value=""> Select Method </option>
        <option value="GET"> GET </option>
        <option value="PUT"> PUT</option>
        <option value="POST"> POST </option>
        <option value="DELETE"> DELETE</option>
        </select>
        <button id="goButton">{this.props.prompt}</button>
        <div id="results">
          <h3>{this.state.url} {this.state.method}</h3>
        </div>
      </form>
    )
  }
}

export default Form;