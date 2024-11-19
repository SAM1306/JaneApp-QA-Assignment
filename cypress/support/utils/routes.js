const ROUTES = {
    // login: For a valid manager
    login: '/login',
    
    // users: For all users
    users: '/users',

    // user: For a user by username
    userByUsername: (username) => `/users?name=${username}`,

    // userID: For a user by ID
    userByID: (id) => `/users/${id}`,

    // configurations: For all configurations for user 
    configurationsByID: (id) => `/users/${id}/configurations`
}
export default ROUTES
