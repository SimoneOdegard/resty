import React from 'react';
import './style/help.scss';

class Help extends React.Component {
  render() {
    return (
      <div id="help">
        <h3 className="helpText">How to use RESTy</h3>
        <ul>
          <li>
            1. Find an API you want to test.
          </li>
          <li>
            2. Enter your API URL into the input box.
          </li>
          <li>
            3. Select your REST method with the dropdown box.
          </li>
          <li>
            4. Click 'Go!' to receive results.
          </li>
        </ul>
        <h3 className="helpText">How to use RESTy History</h3>
        <ul>
          <li>
            1. Click History to view search history.
          </li>
          <li>
            2. Click the history item you'd like to search.
          </li>
          <li>
            3. The form will auto-populated with your selected history item. Click "Re-Run!" to receive results.
          </li>
        </ul>
      </div>
    )
  }
}

export default Help;