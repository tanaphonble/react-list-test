import React, { Component, createClass } from 'react'

// <UserList users={list}>

class UserList extends Component {
    render() {
        return (
            <ol>
                {this.props.users.map
                    ((user, index) => (<li key={index}>{user}</li>))
                }
            </ol>
        )
    }
}

export default UserList