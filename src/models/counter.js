
import { delay } from 'dva/saga';
export default {

    namespace: 'counter',
  
    state: {
        count: 1,
    },
  
    subscriptions: {
      setup({ dispatch, history }) {  // eslint-disable-line
        window.onresize = () => {
          dispatch({type:'add'})
        }
      },
      aaa({dispatch, history}) {
          document.addEventListener('click',() => {
            dispatch({type:'asyncAdd'})
          })
      }
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
        return { count:state.count +1 };
      },
    },
  
  };
  