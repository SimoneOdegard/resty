import React from 'react';
import ReactJson from 'react-json-view';
import './style/results.scss';

const Results = (props) => {
  return (
    <div id="jsonBox">
      <section className="results">
        <ReactJson src={props.people} />
        {/* <ul>
          {Object.keys(props.people).map((item, idx) => {
            return(
              <li key={idx}>
                <a href={props.people[item]}>{item}</a>
              </li>
            );
          })}
        </ul> */}
      </section>
    </div>
  )
}

export default Results;