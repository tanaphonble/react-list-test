import React, { Component, createClass } from 'react'

// <UserList users={list}>

class UserList extends Component {
    render() {
        return (
            <ul>
                {this.props.users.map
                    ((user, index) => (<li key={index}>{user}</li>))
                }
            </ul>
        )
    }
}

export default UserList