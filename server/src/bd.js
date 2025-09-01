const {Pool} = require('pg');
const pool=new Pool({
    user:'postgres',
    host:'localhost',
    database:'Hospital management system',
    password:'ABC123TM0',
    port:5433
})
module.exports =pool;