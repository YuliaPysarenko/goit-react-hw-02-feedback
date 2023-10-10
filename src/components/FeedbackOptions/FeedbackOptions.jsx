import React from "react";
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';
import shortid from 'shortid';

const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return <section>
         {options.map((option ) => {
            return <button key={shortid.generate()}
                type="button"
                name= {option}
                className={css.button}
                onClick={onLeaveFeedback}
            >{option}</button>
        })}
  
   </section>
}

FeedbackOptions.propType = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func,
}


export default FeedbackOptions;