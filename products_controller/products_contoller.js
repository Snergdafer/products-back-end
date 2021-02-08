module.exports = {


    create: (req, res) => {
        const db = req.app.get('db')
        const {name, description, price, image_url} = req.body
        db.create_product([name, description, price, image_url]).then( 
            products => {
                res.status(200).send(products)
            }
        ).catch(err => {
            res.status(500).send({errorMessage: "Something broke"})
            console.log(err)
        })
    },

    getOne: (req, res) => {
        const db = req.app.get('db')
        db.read_product(req.params.id).then( 
            products => {
                res.status(200).send(products)
            }
        ).catch(err => {
            res.status(500).send({errorMessage: "Something broke"})
            console.log(err)
        })
    },

    getAll: (req, res) => {
        const db = req.app.get('db')
        db.read_products().then(
            products => {
                res.status(200).send(products)
            }
        ).catch(err => {
            res.status(500).send({errorMessage: "Something broke"})
            console.log(err)
        })
    },

    update: (req, res) => {
        const db = req.app.get('db')
        db.update_product([req.params.id, req.query.desc]).then(
            products => {
                res.status(200).send(products)
            }
        ).catch(err => {
            res.status(500).send({errorMessage: "Something broke"})
            console.log(err)
        })
    },

    delete: (req, res) => {
        const db = req.app.get('db')
        const { id } = req.params
        db.delete_product(id).then(
            products => {
                res.status(200).send(products)
            }
        ).catch(err => {
            res.status(500).send({errorMessage: "Something broke"})
            console.log(err)
        })
    }


}