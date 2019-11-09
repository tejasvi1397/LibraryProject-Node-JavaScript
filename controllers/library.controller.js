const Library = require('../models/library.model');

exports.library_create = function (req, res) {
    let library = new Library(
        {
            _id: req.body._id,
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

exports.library_update = function (req, res) {
    Library.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, library) {
        if (err) return next(err);
        res.send(library);
        res.send('Item udpated.');
    });
};

exports.library_delete = function (req, res) {
    Library.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};

exports.library_findall = function (req, res) {
    Library.find(function (err, library) {
        if (err) return next(err);
        res.send(library);
    })
};

exports.library_findbyID = function (req, res) {
    Library.findById(req.params.id, function (err, library) {
        if (err) return next(err);
        res.send(library);
    })
};