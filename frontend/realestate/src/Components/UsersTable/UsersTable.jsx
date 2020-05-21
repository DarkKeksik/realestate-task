import React from "react";
import UserInfo from "./UserInfo/UserInfo";
import classes from "./UsersTable.module.css";


let UserList = () => {
    return (
        <div className={ classes.usersTable }>
            <div className={ classes.usersTable__title }>
                <p className={ classes.usersTable__titleItem }>ФИО</p>
                <p className={ classes.usersTable__titleItem }>Телефон</p>
            </div>
            <UserInfo />
            <UserInfo />
            <UserInfo />
            <UserInfo />
            <UserInfo />
            <UserInfo />
        </div>
    );
}


export default UserList;