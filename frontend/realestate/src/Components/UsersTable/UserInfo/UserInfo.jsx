import React from "react";
import classes from "./UserInfo.module.css";


let UserInfo = () => {
    return (
        <a href="#test" className={ classes.user }>
            <div className={ classes.user__info }>Тестович Тестовый Тест</div>
            <div className={ classes.user__info }>89172635123</div>
        </a>
    );
}


export default UserInfo;