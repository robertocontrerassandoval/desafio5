//configuracion base de datos

import pg from 'pg';

const pool = new pg.Pool({
    host:'localhost',
    user:'postgres',
    password:'2857',
    database:'joyas',
    allowExitOnIdle: true
})

pool.query('SELECT NOW()', (err,res) => {
    if(err) {
        console.log('Error de conexion de la base de datos', err.mesage);
    } else {
        console.log('✅ BD conected ✅', res.rows.now);
    }
})

export default pool;