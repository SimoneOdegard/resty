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

  // handleClick = e => {
  //   e.preventDefault();
  //   let url = this.state.url;
  //   this.setState({ url });
  // }

  render() {
    return (
      <div id="form">
        <h3 id="info">Enter url and select method</h3>
        <input id="inputUrl" type ="text" onChange={this.handleURL} />
        <select id="dropDown" onChange={this.handleMethod}>
        <option value=""> Select Method </option>
        <option value="GET"> GET </option>
        <option value="PUT"> PUT</option>
        <option value="POST"> POST </option>
        <option value="DELETE"> DELETE</option>
        </select>
        <div id="results">
          <h3>{this.state.url}</h3>
          <h3>{this.state.method}</h3>
        </div>
      </div>
    )
  }
}

export default Form;