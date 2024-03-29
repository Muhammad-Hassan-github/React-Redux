import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware, compose , combineReducers} from 'redux'
import thunk from 'redux-thunk' 
import {Provider} from 'react-redux'
import nameReducer from './reducers/nameReducer'
import rollnoReducer from './reducers/rollnoReducer'


const masterReducer = combineReducers({
    name:nameReducer,
    rollno:rollnoReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(masterReducer,{name:'Hassan',rollno:['a','b']},composeEnhancers(applyMiddleware(thunk)) )
ReactDOM.render( <Provider store={store}> <App /> </Provider>, document.getElementById('root') );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker. unregister();
