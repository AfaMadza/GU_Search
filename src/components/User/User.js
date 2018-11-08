import React from 'react';

import './User.css';

const user = (props) => (
    <div className="User">
        <h1 style={{textAlign: 'center'}}>{props.name}</h1>
        <h1 style={{textAlign: 'center'}}>{props.login}</h1>
        <div>
            <img src={props.avatar} alt="User Avatar" />
        </div>
    </div>
);
export default user;