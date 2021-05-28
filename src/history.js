import React from 'react';
import './style/history.scss';

class History extends React.Component {

  getHistory = (e) => {
    let req = e.target.innerHTML;
    req = req.split(' ');
    let method = req[0];
    let url = req[1];
    console.log('method', method)
    console.log('url', url);
    this.props.handleHistory(url, method);
  };

  render() {
    return (
      <div id="history">
        <h3 className="historyText">History</h3>
        <h3 className="historyText">Click a saved search and hit re-run to view results!</h3>
        <ul>
          {Object.keys(sessionStorage).map((i, value) => {
            return (
              <li key={i} onClick={this.getHistory}>
                {sessionStorage.getItem(i, value)}
              </li>
            );
          })}
        </ul>
      </div>
    )
  }
}

export default History;