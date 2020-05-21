import React, { useState } from 'react';
import UserInfo from "./UserInfo/UserInfo";

import 'bootstrap/dist/css/bootstrap.min.css';
import classes from "./UsersTable.module.css";

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


let UserList = ( props ) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // Вывод пользователей в таблицу
    let UsersInfo = Object.keys(props.users).map((i)=>{
        return <UserInfo
            id = { i }
            modalOpenFunc = { handleShow }
            fullname = { props.users[i]["fullname"] }
            phone = { props.users[i]["phone"] }
            key = { i }
        />;
    });


    return (
        <div className={ classes.usersTable }>
            <div className={ classes.usersTable__title }>
                <p className={ classes.usersTable__titleItem }>ФИО</p>
                <p className={ classes.usersTable__titleItem }>Телефон</p>
            </div>

            { UsersInfo }

            <Modal show={show} onHide={handleClose}>

                <Modal.Header closeButton>
                    <Modal.Title>Редактирование пользователя</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <input className="w-100 p-2 mb-1" type="text" placeholder="Введите ФИО" />
                    <input className="w-100 p-2" type="text" placeholder="Введите телефон" />
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}> Закрыть </Button>
                    <Button variant="primary" onClick={handleClose}> Сохранить </Button>
                </Modal.Footer>

            </Modal>
        </div>
    );

}


export default UserList;