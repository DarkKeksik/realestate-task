import React from "react";
import classes from "./UserInfo.module.css";
import { NavLink } from "react-router-dom";


let UserInfo = ( props ) => {
    return (
        <NavLink
            to={`user?id=${ props.id }`}
            className={ classes.user }
            onClick={props.modalOpenFunc}
        >
            <div className={ classes.user__info }> { props.fullname || "-" } </div>
            <div className={ classes.user__info }> { props.phone || "-" } </div>
        </NavLink>
    );
}


export default UserInfo;