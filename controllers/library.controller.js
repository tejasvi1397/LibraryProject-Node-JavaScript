const Library = require('../models/library.model');

exports.library_create = function (req, res) {
    let library = new Library(
        {
            name: req.body.name,
            type: req.body.type,
            image: req.body.image,
            quantity: req.body.quantity,
            loan_period: req.body.loan_period
        }
    );

    library.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Item Added successfully')
    })
};