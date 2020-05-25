import React from 'react';
import ReactDOM from 'react-dom';
import App from "./Components/App";
import { BrowserRouter } from "react-router-dom";

import { createStore } from 'redux';
import { connect, Provider } from "react-redux";

// Начальное состояние
const initialState = {
    1: { fullname: "Марионов Андрей Владимирович", phone: "89027137293" },
    2: { fullname: "Михайлков Алексей Родионов", phone: "89312412512" },
    3: { fullname: "Ситникова Анна Сергеевна", phone: "89734812511" }
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
    document.getElementById('app')
);


// Модуль для обновления компонентов в браузере, без перезагрузки страницы
module.hot.accept();