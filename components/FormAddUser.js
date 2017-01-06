import React, { Component } from 'react'
import { connect } from 'react-redux'
import addUserName from '../actions'

class FormAddUser extends Component {
    constructor(props) {
        super(props)
        this.state = { name: "" }
        this.saveName = this.saveName.bind(this)
        this.addUser = this.addUser.bind(this)
    }

    saveName(event) {
        this.setState({ name: event.target.value })
    }

    addUser(){
    
        let {onClickAddUser} = this.props
        console.log("prop", this.props, "oca", onClickAddUser)    
        console.log("name now: " + this.state.name)
        onClickAddUser(this.state.name)
    }

    render() {
        return (
            <div>
                <label>name</label>
                <input onBlur={this.saveName} type="text" /><br />
                <button onClick={this.addUser}>Add User</button>
            </div>
        )
    }
}

// mapStateToProps, mapDispatchToProps

let mapDispatchToProps = (dispatch) => {
    return {
        onClickAddUser: (name) => dispatch(addUserName(name))
    }
}

export default connect(null, mapDispatchToProps)(FormAddUser)
