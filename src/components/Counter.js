import React from 'react';
import { withRouter, Link } from 'dva/router';
import PropTypes from 'prop-types';
const Counter = ({counter,counterAdd,counterAsyncAdd},context) => {
// console.log(dispatch)
return (
    <div>
        <h1>{counter.count}</h1>
        <Link to='/'>lick go back</Link>
        <button onClick={() => context.router.history.push('/')}>context go back</button>
        <br/>
        {/* <button onClick={() => dispatch({type:'counter/add'})}>+</button>
        <button onClick={() => dispatch({type:'counter/asyncAdd'})}>async+</button> */}
        <p>
        <button onClick={() => counterAdd()}>+</button>
        <button onClick={() => counterAsyncAdd()}>async+</button>
        </p>
    </div>
)
}
Counter.contextTypes = {
    router:PropTypes.object
}
export default Counter;