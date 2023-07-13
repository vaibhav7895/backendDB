const mongoose = require('mongoose');

const connection = mongoose.connect('mongodb+srv://vaibhav:vaibhav@atlascluster.jd8jgk8.mongodb.net/nem_mock?retryWrites=true&w=majority');

module.exports={connection}