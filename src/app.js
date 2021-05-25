import React from 'react';
import Header from './header.js';
import Footer from './footer.js';
import Form from './form.js';
import './style/style.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Header />
        <Form />
        <Footer />
      </>
    )
  }
}

export default App;