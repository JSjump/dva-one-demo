import React from 'react';
import { connect } from 'dva';
import Counter from '../components/Counter';
import {counterAdd,counterAsyncAdd} from '../actions';

function Counters({counterAdd,counterAsyncAdd,counter,dispatch}) {
  // console.log(props)
  console.log(dispatch) // 若是传入了mapDispatchToPrpos,则connect链接的Components的props中不会出现dispatch
  return (
    <div>
       <Counter
       counterAdd = {counterAdd}
       counterAsyncAdd = {counterAsyncAdd}
       counter={counter}
       ></Counter>  
    </div>
  );
}

// Counters.propTypes = {
// };
const mapStateToProps = (state) => {
  return {
    counter:state.counter
  }
}

export default connect(mapStateToProps,{counterAdd,counterAsyncAdd})(Counters);
