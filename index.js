const mongoose = require('mongoose');

// mongoose.connect("mongodb://127.0.0.1:27017/testDb")
// .then(()=>console.log("connected"))
// .catch((err)=>console.log(err))

mongoose.connect("mongodb+srv://prasadkarunanayaka2016:pr1s1dk1run1n1y1k1@cluster0.nekwrd2.mongodb.net/?retryWrites=true&w=majority")
    .then(()=>console.log("connected"))
    .catch((err)=>console.log(err))