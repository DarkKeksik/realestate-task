import React from "react";
import classes from "./UserInfo.module.css";
import { NavLink } from "react-router-dom";


let UserInfo = ( props ) => {
    return (
        <NavLink
            to={`user?id=${props.user.id}`}
            className={classes.user}
        >
            <div className={classes.user__info}>{ props.user.name }</div>
            <div className={classes.user__info}>{ props.user.phone }</div>
        </NavLink>
    );
}


export default UserInfo;