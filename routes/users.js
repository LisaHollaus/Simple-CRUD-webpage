const express = require ('express');
const router = express.Router();


//import userController
const userController = require('../controllers/userController');

//router for users/...
router.get('/', userController.getUsers); //get all users

router.route('/:id') //gives us the possibility to chain the methods
    .get(userController.getUser) //get specific user by id
    .post(userController.updateUser) //update specific user by id
    .post(userController.deleteUser); //delete specific user by id

router.get('/:id/edit', userController.editUser) //edit specific user


//export the router (last line of the file)
module.exports = router;



