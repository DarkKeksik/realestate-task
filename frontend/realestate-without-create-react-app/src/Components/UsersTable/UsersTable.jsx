import React from 'react';
import UserInfo from "./UserInfo/UserInfo";
import classes from "./UsersTable.module.css";


let UserList = ( props ) => {

    // Вывод пользователей в таблицу
    let UsersInfo = Object.keys(props.users).map((i)=>{
        return <UserInfo
            id = { i }
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
        </div>
    );

}


export default UserList;