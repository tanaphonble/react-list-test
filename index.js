import React, { Component } from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import AddUserPage from './components/AddUserPage'
import FormAddUser from './components/FormAddUser'
import UserList from './components/UserList'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import users from './reducers/users'

let store = createStore(users)

class UserListWrapper extends Component {
    render() {
        let users = ["a", "b", "c"]
        return (
            <UserList users={users} />
        )
    }
}

render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={AddUserPage}>
                <IndexRoute component={FormAddUser} />
                <Route path="list" component={UserListWrapper}></Route>
            </Route>
        </Router>
    </Provider>
    ,
    document.getElementById('root')
)