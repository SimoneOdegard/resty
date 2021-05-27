import React from 'react';
import Header from './header.js';
import Footer from './footer.js';
import Form from './form.js';
import Results from './results.js';
import History from './history.js';
import { If, Then, Else } from './if';
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
    }
  }

  toggleLoading = () => {
    this.setState({ loading: !this.state.loading });
  }

  handleForm = (count, results, url, method) => {
    this.setState({ count, results, url, method });
  }

  handleHistory = (url, method) => {
    this.setState({ url, method });
  }

  render() {
    return (
      <>
        <Header />
        <Form 
        prompt="Go!"
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
        <Footer />
      </>
    )
  }
}

export default App;