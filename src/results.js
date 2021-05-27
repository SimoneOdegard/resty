import React from 'react';
import ReactJson from 'react-json-view';
import './style/results.scss';

const Results = (props) => {
  return (
    <div id="jsonBox">
      <h3 id="resultsText">Results</h3>
      <section className="results">
        <ReactJson src={props.results} />
      </section>
    </div>
  )
}

export default Results;