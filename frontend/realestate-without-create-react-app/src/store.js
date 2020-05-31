/*
 applyMiddleware позволяет внести посредников при манипуляции с состояниями
 в моем случае redux-logger который логирует действия с хранилищем redux
 */

import { createStore, applyMiddleware } from 'redux';
import logger from "redux-logger";

import rootReducer from "./reducers/rootReducer";

export default () => {
    const store = createStore(rootReducer , applyMiddleware(logger));
    return store;
}