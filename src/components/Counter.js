import React from 'react';
const Counter = ({counter,dispatch}) => {

return (
    <div>
        <h1>{counter.counter}</h1>
        <button onClick={() => dispatch({type:'counter/add'})}>+</button>
        <button onClick={() => dispatch({type:'counter/asyncAdd'})}>async+</button>
    </div>
)
}
export default Counter;