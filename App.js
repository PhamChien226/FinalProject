import React, { Component } from "react";
import AppRootContainer from "./containers/AppRootContainer";
import { Provider } from "react-redux";
import { combineReducers, createStore, applyMiddleware } from "redux";
import { allreducers } from "./reducers/index";
//ReduxSaga
import createSagaMiddleware from "redux-saga";
//Middleware

const sagaMiddleware = createSagaMiddleware();
import rootSaga from "./sagas/rootSaga";

let store = createStore(allreducers, applyMiddleware(sagaMiddleware));
// let store = createStore(allreducers)
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppRootContainer />
      </Provider>
    );
  }
}
sagaMiddleware.run(rootSaga);
