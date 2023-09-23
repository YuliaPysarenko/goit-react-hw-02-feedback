import React from "react";

// const FeedbackOptions = ({ onLeaveFeedback}) => {
//     return <div>
//         <h1>Please leavel feedback</h1>
//         <div>
//         <button type="button" className="" onClick={onLeaveFeedback}>Good</button>
//         <button type="button" className="" onClick={onLeaveFeedback}>Neutral</button>
//         <button type="button" className="" onClick={onLeaveFeedback}>Bad</button>
//         </div>
//     </div>
// }
const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return <section>
        <h1>Please leavel feedback</h1>
        {options.map(({ id, name }) => {
            return <button key={id}
                type="button"
                name= {name}
                className=""
                onClick={onLeaveFeedback}
            >{name}</button>
        })}
   </section>
}


// const FeedbackOptions = ({ buttonGood, buttonNeutral, buttonBad }) => {
//     return <div>
//         <h1>Please leavel feedback</h1>
//         <div>
//             <button type="button" className="" onClick={buttonGood}>Good</button>
//             <button type="button" className="" onClick={buttonNeutral}>Neutral</button>
//             <button type="button" className="" onClick={buttonBad}>Bad</button>
//         </div>
//     </div>
// }


// const FeedbackOptions = ({options, onLeaveFeedback}) => {
  
//     return <div>
//         <h1>Please leavel feedback</h1>
//         <div>
//             {options.map(({id,name}, index) => {
//                 <button key={id}
//                     className=""
//                     onClick={onLeaveFeedback(index)}
//                 > 
//                    {name}
//                </button> 
//             })}
//         </div>
//     </div>
// }

export default FeedbackOptions;