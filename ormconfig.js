module.exports = {
    "type": process.env.TYPE_CONNECTION,
    "host": process.env.HOST_DB,
    "port": process.env.HOST_PORT,
    "username": process.env.USERNAME_DB,
    "password": process.env.PASSWORD_DB,
    "database": process.env.DATABASE,
    "entities": [process.env.ENTITIES],
    "synchronize": process.env.SYNCHRONIZE
}