import React from 'react';
import { withRouter, Link } from 'dva/router';
import PropTypes from 'prop-types';
const Counter = ({counter,dispatch,counterAdd,counterAsyncAdd},context) => {

return (
    <div>
<<<<<<< HEAD
        <h1>{counter.count}</h1>
        <button>+</button>
=======
        <h1>{counter.counter}</h1>
        <Link to='/'>lick go back</Link>
        <button onClick={() => context.router.history.push('/')}>context go back</button>
        <button onClick={() => dispatch({type:'counter/add'})}>+</button>
        <button onClick={() => dispatch({type:'counter/asyncAdd'})}>async+</button>
        <p>
        <button onClick={() => counterAdd()}>+</button>
        <button onClick={() => counterAsyncAdd()}>async+</button>
        </p>
>>>>>>> 45997db53641e05c0807a8b9cd081eef41788e2e
    </div>
)
}
Counter.contextTypes = {
    router:PropTypes.object
}
export default Counter;