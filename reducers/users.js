let users = (state = ["a", "b", "c"], action) => {
    switch (action.type) {
        case "ADD_USER_NAME":
            return [...state, action.name]
        case "HELLLOOOO":
            return [...state]
        default:
            return state
    }
}

export default users
