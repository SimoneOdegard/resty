import React from 'react';
import superagent from 'superagent';
import './style/form.scss';

class Form extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      counter: 1
    }
  }

  handleSubmit = async e => {
    e.preventDefault();

    // storage
    let url = this.props.url;
    let method = this.props.method;
    sessionStorage.setItem(this.state.counter, (`${method} ${url}`));
    let counter = this.state.counter + 1;
    this.setState({ counter });

    try {
      let raw = await superagent(method, url);
      let data = raw.body;

      let count = data.count;
  
      this.props.handler(count, data, url, method);
      this.props.toggleLoading();
    } catch (e) {
      this.props.handler(e);
    }

  }

  render() {
    return (
      <form id="form" onSubmit={this.handleSubmit}>
        <h3 id="info">Enter url and select method</h3>
        <input id="inputUrl" type ="text" onChange={this.props.handleURL} value={this.props.url}/>
        <select id="dropDown" onChange={this.props.handleMethod} value={this.props.method}>
        <option value=""> Select Method </option>
        <option value="GET"> GET </option>
        <option value="PUT"> PUT </option>
        <option value="POST"> POST </option>
        <option value="DELETE"> DELETE </option>
        </select>
        <button id="goButton">{this.props.prompt}</button>
        <div id="results">
          <h3>{this.props.url} {this.props.method}</h3>
        </div>
      </form>
    )
  }
}

export default Form;