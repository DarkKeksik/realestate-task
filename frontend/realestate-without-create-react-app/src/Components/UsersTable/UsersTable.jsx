import React, {Component} from 'react';
import UserInfo from "./UserInfo/UserInfo";
import classes from "./UsersTable.module.css";
import {NavLink} from "react-router-dom";

// Временно
import classesUserInfo from "./UserInfo/UserInfo.module.css";
import {setUsers} from "../../actions/users";
import {connect} from "react-redux";
import axios from "axios";


class UserList extends Component {

    // Как только произойдет рэндер
    componentWillMount() {
        const { setUsers } = this.props;
        axios.get("./users.json").then(({data}) => {
            setUsers(data);
        })
    }

    render() {
        const { users } = this.props;


        return (
            <div className={classes.usersTable}>
                <div className={classes.usersTable__title}>
                    <p className={classes.usersTable__titleItem}>ФИО</p>
                    <p className={classes.usersTable__titleItem}>Телефон</p>
                </div>

                { !users ? "Загрузка пользователей..." : users.map( user => ( <UserInfo user={user} /> ) ) }

                <div>

                </div>

            </div>
        )
    }
}


const mapStateToProps = ({ users }) => ({
    users: users.items
});

const mapDispatchToProps = dispatch => ({
    setUsers: users => dispatch(setUsers(users))
});

// Склеиваем методы и состояния
export default connect(mapStateToProps, mapDispatchToProps)(UserList);