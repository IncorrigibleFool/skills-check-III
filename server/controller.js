module.exports = {
    getHouses: (req, res) => {
        const db = req.app.get('db')
        db.get_all_houses().then(houses => res.status(200).send(houses))
            .catch(err => res.send(err))
    },

    createHouse: (req, res) => {
        const db = req.app.get('db')
        const {name, address, city, state, zip} = req.body
        db.create_new_house(name, address, city, state, zip).then(house => {
            res.status(200).send(house)
        }).catch(err => res.send(err))
    },

    deleteHouse: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
        db.delete_house(id).then(() => {
            res.status(200)
        }).catch(err => res.send(err))
    }
}