import dva from 'dva';
import './index.css';
import { createBrowserHistory  as createHistory} from 'history';
import createLoading from 'dva-loading';
import createLogger from 'redux-logger';


// 自定义中间件 //中间件的原理
const logger = store => next => action => {
    console.log('dispatching', action);
    let result = next(action);
    console.log('next state', store.getState());
    return result;
  };
  
  const error = store => next => action => {
    try {
      console.log('error');
      next(action)
    } catch(e) {
      console.log('error ' + e);
    }
  };

 // 添加额外 reducers
  const extraReducers = {
    form(state = false, action) {
      switch (action.type) {
        case 'SHOW':
          return true;
        case 'HIDE':
          return false;
        default:
          return state
      }
    }
  }
  
  // 封装effect执行
  const onEffect = (effect, { put }, model, key) => {
    return function*(...args) {
      yield put({ type: 'SHOW' });
      yield effect(...args);
      yield put({ type: 'HIDE' });
    };
  }
// 1. Initialize
const app = dva({
    history : createHistory(),
    // onAction: [logger,error]      // onAction 用于注册中间件
    onAction :[createLogger],
    onEffect,
    extraReducers,
});

// 2. Plugins
// app.use({});
app.use(createLoading());

// 3. Model
// app.model(require('./models/counter').default); // 初始化一个model
// require('./models').default.forEach(key => app.model(key.default)); // 初始化多个model
require('./models').default.forEach(key => app.model(key.default))

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
