import React from 'react';
import { connect } from 'dva';
import Counter from '../components/Counter';

function Counters({counter}) {
  return (
    <div>
       <Counter counter={counter}></Counter>  
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
