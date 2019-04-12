import React from 'react';
const Counter = ({counter}) => {
return (
    <div>
        <h1>{counter.counter}</h1>
        <button>+</button>
    </div>
)
}
export default Counter;