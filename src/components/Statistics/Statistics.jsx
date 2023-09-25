import React from "react";
import Notification from 'notiflix';
import PropTypes from 'prop-types';


const Statistics = ({ good, neutral, bad,total, positivePercentage}) => {
      return <div>
          <div>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total: {total}</p> 
          <p>Positive feedback: {positivePercentage} %</p>
          </div>
         </div>  
}

Statistics.propType = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
}

export default Statistics;