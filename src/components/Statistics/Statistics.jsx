import React from "react";

const Statistics = ({ good, neutral, bad,total, positivePercentage}) => {
      return <div>
          <h1>Statistics</h1>
          <div>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total: {total}</p> 
          <p>Positive feedback: {positivePercentage} %</p>
          </div>
       
         </div>  
}

export default Statistics;