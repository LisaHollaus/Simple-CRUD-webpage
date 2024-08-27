const userModule = require('../models/userModel');



// gets information about the users from the Model and sends it to the view
function getUsers(req, res, next) {
    const users = userModule.getUsers();
    res.render('users', {users});
}

// gets information about a single user, specified by id, from the model and sends it to the view
function getUser(req, res, next) {
    const user = userModule.getUser(req.params.id);
    res.render('user', {user});
}


// edit a user from the users array by id and button
function editUser(req, res, next) {
        const user = userModule.getUser(req.params.id); //gets us {id: 1, name: 'Tony',...}
        res.render('editUser', {user});
}


function updateUser(req, res, next) {
    const submitValue = req.body.Edit;
    if ( submitValue === "Edit") { // if condition to make sure this function only gets executed if you click the Edit button
        const user = userModule.updateUserData(req.body, req.params.id); //gets us {id: 1, name: 'Tony',...}
        res.send(user)
    }
    else {
        next() // if you click the Delete button, the function deleteUser will be executed;
    } // is needed because they are both post routes
}


// delete a user from the users array by id and button
// submitValue to make sure that this function only works with a click on the Delete button
function deleteUser(req, res, next) {
    const submitValue = req.body.Delete;
    if ( submitValue === "Delete") {
        const user = userModule.deleteUser(req.params.id); //gets us {id: 1, name: 'Tony',...}
        res.send(user);
    }
}


// render the create user page
function createUserpage(req, res, next) {
        res.render('createUser');
}

// create a new user and add it to the users array
function createUser(req, res, next) {
    const user = userModule.createUser(req.body);
    res.send(user);
}



//export functions to make them available for other js pages
module.exports = {
    getUsers,
    getUser,
    updateUser,
    createUser,
    editUser,
    deleteUser,
    createUserpage
}
