import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore } from 'redux';
import { connect, Provider } from "react-redux";

// Начальное состояние
const initialState = {
    id1: { fullname: "Марионов Андрей Владимирович", phone: "89027137293" },
    id2: { fullname: "Михайлков Алексей Родионов", phone: "89312412512" },
    id3: { fullname: "Ситникова Анна Сергеевна", phone: "89734812511" }
}

// События смены состояния
const ACTION_CHANGE_NAME = "ACTION_CHANGE_NAME";
const ACTION_CHANGE_PHONE = "ACTION_CHANGE_PHONE";

// const changeName = (newName) => {
//     return {
//         type: ACTION_CHANGE_NAME,
//         payload: newName
//     }
// }
// const changePhone = (newPhone) => {
//     return {
//         type: ACTION_CHANGE_PHONE,
//         payload: newPhone
//     }
// }


const rootReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case ACTION_CHANGE_NAME:
            return { ...state, fullname: action.payload };
        case ACTION_CHANGE_PHONE:
            return { ...state, phone: action.payload };
        default:
            return state;
    }
}

const store = createStore( rootReducer );


const mapStateProps = ( state ) => {
    return {
        users: state
    };
};

const WrapperAppComponent = connect(mapStateProps)(App);

ReactDOM.render(
    <Provider store={ store }>
        <WrapperAppComponent />
    </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
