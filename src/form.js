import React from 'react';
import superagent from 'superagent';
import './style/form.scss';

class Form extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      url: '',
      method: '',
      counter: 1
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

    // ========= STORAGE ========= //
    let url = this.state.url;
    let method = this.state.method;
    sessionStorage.setItem(this.state.counter, (`${method} ${url}`));
    let counter = this.state.counter + 1;
    this.setState({ counter });

    let requestOptions = {
      method: this.state.method,
      headers: { 'Content-Type': 'application/json' }
    };

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
        <input id="inputUrl" type ="text" onChange={this.handleURL} value={this.props.url}/>
        <select id="dropDown" onChange={this.handleMethod} value={this.props.method}>
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