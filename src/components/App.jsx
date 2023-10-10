
import  React, { Component } from "react";
import Statistics from "./Statistics";
import FeedbackOptions from "./FeedbackOptions";
import Section from "./Section";
import Notification from "./Notification";
import css from './App.module.css'

// import buttonJson from "../json/button.json"


class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

//    options = [
//   { "id": 1, "name": "Good" },
//   { "id": 2, "name": "Neutral" },
//   { "id": 3, "name": "Bad" }
// ]


  	constTotalFeedback = () => {
		const { good, neutral, bad } = this.state;
		const result = good + neutral + bad;
		return result;
	};

	countPositiveFeedbackPercentage = () => {
		const result = this.constTotalFeedback();
		const { good } = this.state;
		const percentage = (good * 100) / result;
		return Math.round(percentage);
  };
  

  	buttonClick = (e) => {
    const name = e.target.name;
      	this.setState(prevState => ({
			[name]: prevState[name] + 1,
		}));
 
	};

  render() {
    const { good, neutral, bad} = this.state;    
    const totalFeedback = this.constTotalFeedback();    
    const positiveFeedback = this.countPositiveFeedbackPercentage();
     const objKey = Object.keys(this.state);
    
    return <section className={css.section}>
         {/* <div
    style={{
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 40,
      color: '#010101'
    }}
  ></div> */}
     

      <Section title="Please leavel feedback">
        <FeedbackOptions
        options={objKey}
        onLeaveFeedback={this.buttonClick} /> 
      </Section>
       
      <Section title="Statistics">
        {totalFeedback  === 0 ? (
            <Notification message="There is no feedback" />
        ) : (<Statistics     
        good={good}
        neutral={neutral}
        bad={bad}
        total={totalFeedback}
        positivePercentage={positiveFeedback} />
            )}
        
      </Section>
    </section>
    
  }
}

export default App;