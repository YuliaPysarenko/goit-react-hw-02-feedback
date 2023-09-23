
import  React, { Component } from "react";
import Statistics from "./Statistics";
import FeedbackOptions from "./FeedbackOptions";
import Section from "./Section";
import buttonJson from "../json/button.json"


class App extends Component {
   // static defaultProps = {};
  // static propTypes = {};
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

  // buttonClick = () => {
  //   this.setState(preClick => ({
  //     good: preClick.good + 1,
  //   }))
  //   this.setState(preClick => ({
  //     neutral: preClick.neutral + 1,
  //   }))
  //   this.setState(preClick => ({
  //     bad: preClick.bad + 1,
  //   }))
  // }

  buttonClick = () => {
    this.buttonClickGood()
    this.buttonClickNeutral()
    this.buttonClickBad()
   }

  // buttonClick = (index) => {
  //    this.setState(preClick => ({
  //     good: index,
  //     neutral: index,
  //     bad: index,
  //   }))
  // }


  // buttonOnClick = () => {
  //   this.setState({
  //     good: this.buttonClickGood,
  //     neutral: this.buttonClickNeutral,
  //     bad: this.buttonClickBad,
  //   })
  // }

  render() {
    const { good } = this.state;
    const { neutral } = this.state;
    const { bad } = this.state;
  
    
    const countTotalFeedback = good + neutral + bad;    
    const countPositiveFeedbackPercentage = Math.round(good / countTotalFeedback * 100);
    
    return <section>
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
     

      <Section title=""/>
      
      {/* <FeedbackOptions
        buttonGood={this.buttonClickGood}
        buttonNeutral={this.buttonClickNeutral}
        buttonBad={this.buttonClickBad} /> */}
        
   <FeedbackOptions
        options={ buttonJson}
        onLeaveFeedback={this.buttonClick} /> 
     
      
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={countTotalFeedback}
        positivePercentage={countPositiveFeedbackPercentage}
      />
    </section>
    
  }
}

export default App;