const users = [
    {
        id: 1,
        name: 'Tony Stark',
        hero: 'Iron Man',
        address: 'Stark Tower'

    },
    {
        id: 2,
        name: 'Wanda Maximoff',
        hero: 'Scarlet Witch',
        address: 'Sokovia'
    },
    {
        id: 3,
        name: 'Peter Parker',
        hero: 'Spider-Man',
        address: 'New York'
    },
    {
        id: 4,
        name: 'Steve Rogers',
        hero: 'Captain America',
        address: 'Brooklyn'
    },
    {   id: 5,
        name: 'Natasha Romanoff',
        hero: 'Black Widow',
        address: 'Stalingrad'
    },
    {
        id: 6,
        name: 'Bruce Banner',
        hero: 'The Hulk',
        address: 'Dayton'
    }
];




// to access all users:
function getUsers() {
    return users;
}

// to access a single user:
//getUser(1) returns the user with id 1 ({ id: 1, name: 'Tony Stark', hero: 'Iron Man', address: 'Stark Tower'})
function getUser(id) {
    let user = users.find(element => element.id === parseInt(id))
    if(typeof user !== 'undefined'){
        return user;
    } else {
        return 'Error: User not found';
    }
}


// to update a single user:
let updateUserData = (userData, id) => {
    try {
        if (userData.name.length === 0 || userData.hero.length === 0 || userData.address.length === 0){
            return 'Error: Data incomplete'; //checks if data is complete

        } else { //if data is complete
            let user = users.find(element => element.id === parseInt(id))
            if(typeof user !== 'undefined'){ //checks if user exists
                user.name = userData.name; //updates user data
                user.hero = userData.hero;
                user.address = userData.address;

                console.log("User updated: " + user.name);
                return "User updated: " + user.name;

            } else {
                return 'Error: User not found'; //if user does not exist
            }
        }
    } catch(err) { //catches errors
        return err;}
};


function deleteUser(id) {
    let user = users.find(element => element.id === parseInt(id)) //select the user by the id
    const index = users.indexOf(user) // get the index of the user
    if(typeof user !== 'undefined'){
        users.splice(index,1) // .splice(index of object to delete, number of objects that shall be deleted from the users array)
        console.log("User deleted: " + user.name);
        return "User deleted: " + user.name //returns the deleted users name

    } else {
        return 'Error: User not found'; // if the user has already been deleted
    }
}



function createUser(userData) {
    try {
        if (userData.name.length === 0 || userData.hero.length === 0 || userData.address.length === 0) {
            console.log("Error: Data incomplete");
            return 'Error: Data incomplete'; //checks if data is complete

        } else { //if user does not exist, create user
            let user = {
                id: users.length + 1,
                name: userData.name,
                hero: userData.hero,
                address: userData.address
            };
            users.push(user); //adds user to users array
            console.log("User created: " + user.name);
            return "User created: " + user.name;
        }
    } catch(err) { //catches errors
            return err;
        }
}



//export functions to make them available for other js pages
module.exports = {
    getUsers,
    getUser,
    updateUserData,
    createUser,
    deleteUser
}

