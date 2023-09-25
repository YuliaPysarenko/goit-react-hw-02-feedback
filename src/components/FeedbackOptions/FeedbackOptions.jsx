import React from "react";
import PropTypes from 'prop-types';

const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return <section>
        {/* <h1>Please leavel feedback</h1> */}
        {options.map(({ name }) => {
            return <button key={name}
                type="button"
                name= {name}
                className=""
                onClick={onLeaveFeedback}
            >{name}</button>
        })}
   </section>
}

FeedbackOptions.propType = {
    options: PropTypes.arrayOf(
        PropTypes.objectOf({
     name:PropTypes.string.isRequired,
        })),
    onLeaveFeedback: PropTypes.funk,
}


export default FeedbackOptions;