/* API HANDLER MODULE */

/*
    This function will communicate with the API
    regarding logging in.
*/
function login(email, password) {
    console.log("Login attempt:");
    console.log(email);
    console.log(password);

    return true; // simulate working login
}

/*
    This function will communicate with the API
    regarding signing up.
*/
function signup(username, email, password) {
    console.log("Signup attempt:");
    console.log(username);
    console.log(email);
    console.log(password);

    return true; // simulate working signup
}

export { login, signup };