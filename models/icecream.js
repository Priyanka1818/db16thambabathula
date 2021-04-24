const mongoose = require("mongoose")
const icecreamSchema = mongoose.Schema({
    icecreamname: {
        type: String,
        minlength: 4,
        maxlength: 12,
    },
    flavor: {
        type: String,
        maxlength: 10,
        minlength: 2,
    },
    size: {
        type: String,
        minlength: 5,
        maxlength: 12,
    },
    price: {
        type: Number,
        max: [50, "Maximum price should be less than 50"],
        min: [10, "Minimum price should be less than 10"],
    }
})
module.exports = mongoose.model("icecream", icecreamSchema)