
import { delay } from 'dva/saga';
export default {

    namespace: 'counter',
  
    state: {
        counter: 1,
    },
  
    subscriptions: {
      setup({ dispatch, history }) {  // eslint-disable-line
      },
    },
  
    effects: {
      *fetch({ payload }, { call, put }) {  // eslint-disable-line
        yield put({ type: 'save' });
      },
      *asyncAdd({payload},{call,put,select}) {
        const counter = yield select(state => state.counter);
        console.log(counter)
        yield call(delay,2000);
        yield put({type:'add'});
      }
    },
  
    reducers: {
      'add'(state, action) {
        return { counter:state.counter +1 };
      },
    },
  
  };
  