import dva from 'dva';
import './index.css';
import { createBrowserHistory  as createHistory} from 'history';


// 1. Initialize
const app = dva({
    history : createHistory()
});

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/counter').default); // 初始化一个model
// require('./models').default.forEach(key => app.model(key.default)); // 初始化多个model
require('./models').default.forEach(key => app.model(key.default))

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
