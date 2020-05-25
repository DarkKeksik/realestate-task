import React from "react";
import UsersTable from "./UsersTable/UsersTable";
import AboutUser from "./AboutUser/AboutUser";

import './general.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";

let App = ( props ) => {
    return (
        <BrowserRouter>
            <div className="main">
                <div className="main__flexWrap flex-c-c wrap-1200">
                    <Switch>
                        <Route exact path="/" render={() =>
                            <UsersTable
                                dispatch={props.dispatch}
                                users={props.users}
                            />
                        }/>
                        <Route path="/user" render={() =>
                            <AboutUser
                                dispatch={props.dispatch}
                                users={props.users}
                            />
                        }/>
                        <Route render={() =>
                            <div>): Страница не найдена 404 :(</div>
                        } />
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    )
}


export default App;