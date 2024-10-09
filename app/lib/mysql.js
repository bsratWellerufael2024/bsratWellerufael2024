import mysql from 'mysql2/promise'
const connectionConfigration={
    host:"localhost",
    user:'root',
    password:"toor",
    database:"realestate_db"
}
export async function connectToDatabase(params) {
     const connection =await mysql.createConnection(connectionConfigration)
     return connection
}