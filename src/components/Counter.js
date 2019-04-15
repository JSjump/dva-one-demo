import React from 'react';
const Counter = ({counter}) => {
return (
    <div>
        <h1>{counter.count}</h1>
        <button>+</button>
    </div>
)
}
export default Counter;