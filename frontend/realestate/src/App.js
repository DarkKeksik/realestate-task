import React from 'react';
import UsersTable from "./Components/UsersTable/UsersTable";
import './css/general.css';

let App = (props) => {

    return (
      <div className="main">
          <div className="main__flexWrap flex-c-c wrap-1200">
              <UsersTable
                  dispatch={props.dispatch}
                  users={props.users}
              />
          </div>
      </div>
    );
}

export default App;
