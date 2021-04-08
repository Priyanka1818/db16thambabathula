const mongoose = require("mongoose")
const icecreamSchema = mongoose.Schema({
    icecreamname: String,
    flavor: String,
    size: String,
    price: Number
})
module.exports = mongoose.model("icecream", icecreamSchema)