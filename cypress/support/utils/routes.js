const ROUTES = {
    // login: For a valid manager
    loginURL: '/login',
    
    // users: For all users
    usersURL: '/users',

    // user: For a user by username
    userByUsernameURL: (username) => `/users?name=${username}`,

    // userID: For a user by ID
    userByIDURL: (id) => `/users/${id}`,

    // configurations: For all configurations for user 
    configurationsByID: (id) => `/users/${id}/configurations`
}
export default ROUTES
