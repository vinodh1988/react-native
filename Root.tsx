
import { applyMiddleware, legacy_createStore } from 'redux';
import { appstate } from './Redux/Reducers/combine';
import App from './App.tsx'
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './Redux/Sagas/rootsaga.tsx';
import { QuoteAction } from './Redux/Actions/QuoteActions.tsx';

const sagaMiddleware = createSagaMiddleware();
let store=legacy_createStore(appstate,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

store.dispatch(QuoteAction())

const Root=()=> {
 return (
  <Provider store={store}>
    <App/>
  </Provider>  
 )
}

export default Root