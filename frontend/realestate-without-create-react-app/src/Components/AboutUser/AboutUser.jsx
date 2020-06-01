import React from 'react';
import classes from "./AboutUser.module.css";


import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from "react-router-dom";
import {setUsers} from "../../actions/users";
import {connect} from "react-redux";


let AboutUser = ( props ) => {

    console.log(props);

    return (
        <div className={ classes.AboutUser }>
            <div className={ classes.AboutUser__title }>
                Информация о пользователе
            </div>
            <div className={ classes.AboutUser__body }>
                <InputGroup>
                    <InputGroup.Prepend>
                        <InputGroup.Text>ФИО</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        aria-label="ФИО"
                        aria-describedby="inputGroup-sizing-default"
                    />
                </InputGroup>
                <InputGroup>
                    <InputGroup.Prepend>
                        <InputGroup.Text>Телефон</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        aria-label="Телефон"
                        aria-describedby="inputGroup-sizing-default"
                    />
                </InputGroup>
            </div>
            <div className={ classes.AboutUser__panel }>
                <Button className="mr-2" variant="outline-success" size="lg">
                    Сохранить
                </Button>
                <Button className="mr-2" variant="outline-danger" size="lg">
                    Удалить
                </Button>
                <NavLink
                    className="btn btn-outline-dark btn-lg"
                    to="../"
                > Назад </NavLink>
            </div>
        </div>
    );

}


const mapStateToProps = ({ users }) => ({
    users: users.items
});

const mapDispatchToProps = dispatch => ({
    setUsers: users => dispatch(setUsers(users))
});

// Склеиваем методы и состояния
export default connect(mapStateToProps, mapDispatchToProps)(AboutUser);