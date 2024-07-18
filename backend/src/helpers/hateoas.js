const HATEOAS = async (entity, data) => {
    const results = data.map((item) => {
        return {
            nombre: item.nombre,
            href: `http://localhost:3000/${entity}/${item.id}` //revisarrrrrr
        }
    }).slice(0,6)

    const totalJoyas = data.length
    //const totalStock = data.algo
    const dataConHateoas = {
        totalJoyas,
        results
    }

    return dataConHateoas;
}

export default HATEOAS;