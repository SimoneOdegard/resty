import React from 'react';
import Header from './header.js';
import Footer from './footer.js';
import Form from './form.js';
import Results from './results.js';
import './style/style.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      count: 0,
      results: []
    }
  }

  toggleLoading = () => {
    this.setState({ loading: !this.state.loading });
  }

  handleForm = (count, results) => {
    this.setState({ count, results });
  }

  render() {
    return (
      <>
        <Header />
        <Form prompt="Go!" toggleLoading={this.toggleLoading} handler={this.handleForm} />
        <Results people={this.state.results} />
        <Footer />
      </>
    )
  }
}

export default App;