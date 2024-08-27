//home route

const express = require('express');
const router = express.Router();


//homepage
router.get('/', (req, res) => {
    res.render('home');
})


//import userController
const userController = require('../controllers/userController');


// create a new user and add it to the users array
router.route('/new')
    .get(userController.createUserpage) //get route to create new user
    .post(userController.createUser); //post route to create new user


//export the router (last line of the file)
module.exports = router;

