
import  React, { Component } from "react";
import Statistics from "./Statistics";
import FeedbackOptions from "./FeedbackOptions";
import Section from "./Section";
import Notification from "./Notification";
import css from './App.module.css'

import buttonJson from "../json/button.json"


class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }
  
  buttonClickGood = () => {
    this.setState(preClick => ({
      good: preClick.good + 1,
    }))
  }

  buttonClickNeutral = () => {
    this.setState(preClick => ({
      neutral: preClick.neutral + 1,
    }))
  }

  buttonClickBad = () => {
    this.setState(preClick => ({
      bad: preClick.bad + 1,
    }))
  }

  buttonClick = (e) => {
    const targetName = e.target.name

    if ( targetName === 'Good') {
      this.buttonClickGood()
    }
   else if ( targetName === 'Neutral') {
         this.buttonClickNeutral()
    }
    else if ( targetName === 'Bad') {
          this.buttonClickBad()
    }   
  }
  
  render() {
    const { good } = this.state;
    const { neutral } = this.state;
    const { bad } = this.state;
  
    
    const countTotalFeedback = good + neutral + bad;    
    const countPositiveFeedbackPercentage = Math.round(good / countTotalFeedback * 100);
    
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
        options={buttonJson}
        onLeaveFeedback={this.buttonClick} /> 
      </Section>
       
      <Section title="Statistics">
        {this.state.good === 0 && this.state.bad === 0 && this.state.neutral === 0
          ? (
            <Notification message="There is no feedback" />
          )
          : (<Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={countTotalFeedback}
        positivePercentage={countPositiveFeedbackPercentage} />
            )}
        
      </Section>
    </section>
    
  }
}

export default App;