import React, { Component } from 'react';
import axios  from 'axios';

import User from '../User/User';

class searchBar extends Component {
    state = {
        user = [],
        error: false,
        userName: ""
    }
    componentDidMount () {
        axios.get('/user/' + this.props.username)
            .then(response => {
                const foundUser = response;
                this.setState({user: foundUser
                })
               console.log(response);
            })
            .catch(error => {
                console.log(error);
                this.setState({error: true});
            });
    }
    userSearchedhandler = (event) => {
        this.setState({userName: event.target.value});
    }
    render () {
        let user = <p style={{textAlign: 'center'}}>Something went wrong!</p>
        if (!this.state.error){
            user = this.state.user.map( user => {
                return <User 
                    key={user.id} 
                    name={user.name} 
                    avatar={user.avatar_url}
                    searched={() => this.userSearchedHandler(user.login)}/>;
            });
        }
        return (
            <div>
                <section className="User">
                    {user}
                </section>
            </div> 
        );
    }
}

export default searchBar;