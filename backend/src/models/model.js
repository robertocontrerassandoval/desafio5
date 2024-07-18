import pool from '../../database/confing.js'
import format from 'pg-format';




//uso de pg- format

export const getAllJoyasModelLimitFormat = async (
    order_by = 'id_DESC',
    limits = 3,
    page = 1
 
) => {
    const [attribute, direction] = order_by.split('_');
    const offset = (page - 1 ) * limits
    const allJoyas = format('SELECT * FROM inventario ORDER BY %s %s LIMIT %s OFFSET %s',
        attribute,
        direction,
        limits,
        offset)
     console.log('query:', allJoyas); //aqui se muestra el resultado de allJoyas

     const response = await pool.query(allJoyas);
     return response.rows;

}

// HATEOAS

//export const getAllJoyasHateoas = async () => {
    //const allJoyas = await pool.query('SELECT * FROM inventario');
    //return allJoyas.rows;
//};


export let obtenerJoyasPorFiltros = async ({ 
    stock_min, 
    precio_max 
}) => { 
    let filtros = []
    if (precio_max) filtros.push(`precio <= ${precio_max}`) 
        if (stock_min) filtros.push(`stock >= ${stock_min}`)
    let consulta = "SELECT * FROM inventario" 
        if (filtros.length > 0) {
            filtros = filtros.join(" AND ")
            consulta += ` WHERE ${filtros}`
        }
    const { rows: inventario } = await pool.query(consulta)
    return inventario }

