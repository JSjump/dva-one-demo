import React from 'react';
import { connect } from 'dva';
import Counter from '../components/Counter';

function Counters({counter,dispatch}) {
  return (
    <div>
       <Counter counter={counter} dispatch={dispatch}></Counter>  
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

export default connect(mapStateToProps)(Counters);
