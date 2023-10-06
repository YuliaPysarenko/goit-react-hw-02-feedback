import React from "react";
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return <section>
      
        {options.map(({ name }) => {
            return <button key={name}
                type="button"
                name= {name}
                className={css.button}
                onClick={onLeaveFeedback}
            >{name}</button>
        })}
   </section>
}

FeedbackOptions.propType = {
    options: PropTypes.func,
    onLeaveFeedback: PropTypes.func,
}


export default FeedbackOptions;