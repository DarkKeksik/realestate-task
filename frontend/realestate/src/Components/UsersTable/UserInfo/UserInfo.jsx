import React from "react";
import classes from "./UserInfo.module.css";


let UserInfo = ( props ) => {
    return (
        <a
            href={`#${props.id}`}
            className={ classes.user }
            onClick={props.modalOpenFunc}
        >
            <div className={ classes.user__info }> { props.fullname || "-" } </div>
            <div className={ classes.user__info }> { props.phone || "-" } </div>
        </a>
    );
}


export default UserInfo;