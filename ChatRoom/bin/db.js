var mongoose = require( 'mongoose' );
var Schema   = mongoose.Schema;

var messagePool = new Schema({
    user_id    : String,
    content    : String,
    updated_at : Date
});

mongoose.model( 'Todo', Todo );
mongoose.connect( 'mongodb://localhost/db' );