import React from 'react';
import UsersTable from "./components/UsersTable/UsersTable";
import './styles/general.css';

import { BrowserRouter, Route, Switch } from "react-router-dom";

let App = (props) => {

    return (
        <BrowserRouter>
            <div className="main">
              <div className="main__flexWrap flex-c-c wrap-1200">
                  <Switch>
                      <Route exact path="/" render={()=>
                          <UsersTable
                              dispatch={props.dispatch}
                              users={props.users}
                          />
                      } />
                      <Route exact path="/test" render={()=>
                          <UsersTable
                              dispatch={props.dispatch}
                              users={props.users}
                          />
                      } />
                  </Switch>
              </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
