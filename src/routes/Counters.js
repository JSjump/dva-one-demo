import React from 'react';
import { connect } from 'dva';
import Counter from '../components/Counter';
import {counterAdd,counterAsyncAdd} from '../actions';

function Counters({counter,dispatch,counterAdd,counterAsyncAdd}) {
  return (
    <div>
       <Counter
       counterAdd = {counterAdd}
       counterAsyncAdd = {counterAsyncAdd}
       counter={counter}
       dispatch={dispatch}></Counter>  
    </div>
  );
}

Counters.propTypes = {
};
const mapStateToProps = (state) => {
  return {
    counter:state.counter
  }
}

export default connect(mapStateToProps,{counterAdd,counterAsyncAdd})(Counters);
