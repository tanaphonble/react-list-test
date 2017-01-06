import React, { Component } from 'react'
import { Link } from 'react-router'

class AddUserPage extends Component {
    render() {
        return (
            <div>
                <h1>Add PAGE</h1>
                <Link to="/">Add</Link>
                <span>|</span>
                <Link to="/list">List</Link>
                {this.props.children}
            </div>
        )
    }
}

export default AddUserPage