const users = []

const addUser = ({ id, username, room }) => {
    username = username.trim().toLowerCase()
    room = room.trim().toLowerCase()

    if (!room || !username) {
        return {
            error: 'Username and room are required'
        }
    }

    const existingUser = users.find((user) => user.room === room && user.username === username)

    if (existingUser) {
        return {
            error: 'Username is in use'
        }
    }

    const user = { id, username, room }
    users.push(user)
    return { user }
}

const removeUser = (id) => {
    const index = users.findIndex((user) => user.id === id)
    console.log(index)
    if (index !== -1) {
        
        return users.splice(index, 1)[0]
    }
}

const getUser = (id) => {
    return users.find((user) => user.id === id)
}

const getUsersInRoom = (room) => {
    return users.filter((user) => user.room === room)
}

// addUser({
//     id: 1,
//     username: 'kevin',
//     room: 'test'
// })

// addUser({
//     id: 2,
//     username: 'kevin2',
//     room: 'test'
// })

// removeUser(1)

// const users1 = getUsersInRoom('test')
// console.log(users1)

module.exports = {
    addUser,
    removeUser,
    getUser,
    getUsersInRoom
}