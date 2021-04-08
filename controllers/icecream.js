var icecream = require('../models/icecream');
// List of all icecream
exports.icecream_list = async function (req, res) {
    try {
        theicecream = await icecream.find();
        res.send(theicecream);
    }
    catch (err) {
        res.send(`{"error": ${err}}`)
        res.status(500);
    }
    // res.send('NOT IMPLEMENTED: icecream list');
};
// for a specific icecream.
exports.icecream_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: icecream detail: ' + req.params.id);
};
// Handle icecream create on POST.
exports.icecream_create_post = async function (req, res) {
    console.log(req.body)
    let document = new icecream();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costumetype":"goat", "cost":12, "size":"large"}
    document.icecreamname = req.body.icecreamname;
    document.habitat = req.body.habitat;
    document.classification = req.body.classification;
    document.price = req.body.price;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.send(`{"error": ${err}}`)
        res.status(500);
    }
};
// Handle icecream delete form on DELETE.
exports.icecream_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: icecream delete DELETE ' + req.params.id);
};
// Handle icecream update form on PUT.
exports.icecream_update_put = function (req, res) {
    res.send('NOT IMPLEMENTED: icecream update PUT' + req.params.id);
};

// VIEWS
// Handle a show all view
exports.icecream_view_all_Page = async function (req, res) {
    try {
        theicecream = await icecream.find();
        console.log("njfndw")
        res.render('icecream', { title: 'icecream Search Results', results: theicecream });
    }
    catch (err) {
        res.send(`{"error": ${err}}`)
        res.status(500);
    }
};