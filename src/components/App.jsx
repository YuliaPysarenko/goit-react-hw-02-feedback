
import  React, { Component } from "react";
import Statistics from "./Statistics";
import FeedbackOptions from "./FeedbackOptions";
import Section from "./Section";
import Notification from "./Notification";
import css from './App.module.css'

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

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
    
    return (<div className={css.section}>
      <Section  title="Please leavel feedback">
        <FeedbackOptions
        options={objKey}
        onLeaveFeedback={this.buttonClick} /> 
      </Section>
       
      <Section title="Statistics">
        {totalFeedback === 0 ? (<Notification message="There is no feedback" />)
          : (<Statistics     
        good={good}
        neutral={neutral}
        bad={bad}
        total={totalFeedback}
        positivePercentage={positiveFeedback} />
            )}
        
      </Section></div>) 
   
    
  }
}

export default App;