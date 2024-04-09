const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://rahulconestoga:MongoDBSev890@cluster1.f8c4ieo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'assignment4DB'
})
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

module.exports = mongoose;
