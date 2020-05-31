import React, { Component } from "react";

import UsersTable from "./components/UsersTable/UsersTable";
import AboutUser from "./components/AboutUser/AboutUser";

import './components/general.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="main">
                    <div className="main__flexWrap flex-c-c wrap-1200">

                        <Switch>
                            <Route exact path="/" render={() =>
                                <UsersTable />
                            }/>
                            <Route path="/user" render={() =>
                                <AboutUser />
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
}


export default App;