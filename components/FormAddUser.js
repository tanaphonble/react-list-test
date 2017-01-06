import React, { Component } from 'react'

class FormAddUser extends Component {
    render() {
        return (
            <div>
                <label>name</label>
                <input type="text" /><br />
                <button>Add User</button>
            </div>
        )
    }
}

export default FormAddUser