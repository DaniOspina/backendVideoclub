// import {config as dotenv} from 'dotenv';
// dotenv(); 

const config = {
    host: /*process.env.DB_HOST ||*/ 'us-cdbr-east-04.cleardb.com',
    user: /*process.env.DB_USER ||*/ 'bbe57833499def',
    password: /*process.env.DB_PASSWORD ||*/ '674f257d',
    database: /*process.env.DB_DATABASE ||*/ 'heroku_1cb279cfe07419a',
}

module.exports = config
// mysql://bbe57833499def:674f257d@us-cdbr-east-04.cleardb.com/heroku_1cb279cfe07419a?reconnect=true