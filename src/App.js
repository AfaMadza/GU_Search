import React, { Component } from 'react';
//import { NavLink, Route } from 'react-router-dom';
import axios from 'axios';

import User from './components/User/User';
import classes from './App.css';
import Aux from './Auxi';

class App extends Component {
    state = {
        name: "",
        error: false,
        login: "",
        userName: "",
        avatar: ""
    }
userSearchedhandler = () => {
    
    axios.get('/users/' + this.state.userName)
        .then((response) => {
            console.log(response.data['name']);
            this.setState({name: response.data['name']});
            this.setState({login: response.data['login']});
            this.setState({avatar: response.data['avatar_url']});
            this.setState({error: false});
             })
        .catch((err) => {
            console.log(err);
            this.setState({error: true})
        });
        
console.log('name', this.state.name);
console.log('avatar', this.state.avatar);
        
};
        
  render() {
        let user = null 
        this.state.error || !this.state.login ? user = <p style={{textAlign: 'center'}}>Please enter a valid username</p> :  user = <User  name={this.state.name} login={this.state.login} avatar={this.state.avatar}/>;
        
    return (
        <Aux>
            {/* <nav>
                <ul>
                    <li><NavLink to="/search">Search</NavLink></li>
                    <li><NavLink to="/users">Users</NavLink></li>
                </ul>
            </nav> */}
            <div className={classes.center + ' ' + classes.User}> 
                <input type="text"  value={this.state.userName} onChange={(event) => this.setState({userName: event.target.value})} />
                <button onClick={this.userSearchedhandler}>Search</button>
            </div>
            <div className={classes.User}>
                {user}
            </div>
            {/* <Route path="/search" />  
            <Route path="/users" /> */}
        </Aux>
        );
    }
}

export default App;
