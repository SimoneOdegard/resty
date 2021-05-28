import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './header.js';
import Footer from './footer.js';
import Form from './form.js';
import Results from './results.js';
import History from './history.js';
import Help from './help.js';
import { If, Then } from './if';
import './style/style.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      count: 0,
      results: '',
      url: '',
      method: '',
      displayModal: false
    }
  }

  toggleLoading = () => {
    this.setState({ loading: !this.state.loading });
  }

  handleURL = e => {
    let url = e.target.value;
    this.setState({ url: url });
  }

  handleMethod = e => {
    let method = e.target.value;
    this.setState({ method: method });
  }

  handleForm = (count, results, url, method) => {
    this.setState({ count, results, url, method });
  }

  handleHistory = (url, method) => {
    this.setState({ url, method });
  }

  displayModal = () => {
    this.setState ({ displayModal: true });
  }
  

  render() {
    return (
      <>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/">
              <Form 
              prompt="Go!"
              handleURL={this.handleURL}
              handleMethod={this.handleMethod}
              toggleLoading={this.toggleLoading}
              handler={this.handleForm}
              url={this.state.url}
              method={this.state.method}
              />
              <If condition={this.state.results}>
                <Then>
                  <Results results={this.state.results}/>
                </Then>
              </If>
            </Route>
            <Route exact path="/history">
              <Form 
              prompt="Re-Run!"
              handleURL={this.handleURL}
              handleMethod={this.handleMethod}
              toggleLoading={this.toggleLoading}
              handler={this.handleForm}
              url={this.state.url}
              method={this.state.method}
              />
              <History 
              handleHistory={this.handleHistory}
              />
              <If condition={this.state.results}>
                <Then>
                  <Results results={this.state.results}/>
                </Then>
              </If>
            </Route>
            <Route exact path="/help">
              <Help />
            </Route>
          </Switch>
        </BrowserRouter>
        <Footer />
      </>
    )
  }
}

export default App;