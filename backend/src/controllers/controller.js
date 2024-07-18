import HATEOAS from "../helpers/hateoas.js";
import {  getAllJoyasModelLimitFormat, obtenerJoyasPorFiltros } from "../models/model.js";




//uso de pg- format

export const getOrderAndLimitJoyas = async (req, res) => {
    try {
        const {order_by, limit, page} = req.query // como lo paso
        const joyas = await getAllJoyasModelLimitFormat(order_by, limit, page); //esto biene de modelo

        const allJoyasConHateoas = await HATEOAS('joyas', joyas);

        res.status(200).json({ inventario: joyas,inventario: allJoyasConHateoas });


    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

//HATEOAS


// filtros

    export const getJoyasPorFiltro = async (req, res) => {
        try {
            const queryStrings = req.query
    const inventario = await obtenerJoyasPorFiltros (queryStrings) 
    res.status(200).json(inventario)
        } catch (error) {
            res.status(500).json({error: error.message});
        }
    
    }
