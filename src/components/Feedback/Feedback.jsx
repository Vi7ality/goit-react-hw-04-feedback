import PropTypes from 'prop-types'
import React, { Component } from "react";



    
class Feedback extends Component {
    static defaultProps = {
      
  };

    static propTypes = {};
    
    state = {
  good: 0,
  neutral: 0,
  bad: 0
}

  render() {
    return     <div>
<h1>Please, leave feedback</h1>
      <ul>
        <li><button type="button">Good</button></li>
        <li><button type="button">Neutral</button></li>
        <li><button type="button">Bad</button></li>
      </ul>
      <div>
        <h2>Statistics</h2>
        <ul>
          <li>
            <p>Good:</p>
            <p></p>
          </li>
          <li>
            <p>Neutral:</p>
            <p></p>
          </li>
          <li>
            <p>Bad:</p>
            <p></p>
          </li>
        </ul>
      </div>
    </div>;
  }
}
