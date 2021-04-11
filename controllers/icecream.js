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
// for a specific Costume.
exports.icecream_detail = async function(req, res) {
    console.log("detail"  + req.params.id)
    try {
        result = await icecream.findById( req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
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
    document.flavor = req.body.flavor;
    document.size = req.body.size;
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
// Handle icecream delete on DELETE.
exports.icecream_delete = async function(req, res) {
    console.log("delete "  + req.params.id)
    try {
        result = await icecream.findByIdAndDelete( req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};

// Handle Costume update form on PUT.
exports.icecream_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await icecream.findById( req.params.id)
        // Do updates of properties
        if(req.body.icecreamname) toUpdate.icecreamname = req.body.icecreamname;
        if(req.body.flavor) toUpdate.flavor = req.body.flavor;
        if(req.body.size) toUpdate.size = req.body.size;
        if(req.body.price) toUpdate.price = req.body.price;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`);
    }
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