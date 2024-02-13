/* 
    This playground file will cover the create database, create collection,
    insert, find, update, and delete MongoDB operations.
*/

// https://www.mongodb.com/docs/v3.4/reference/mongo-shell/

// Creates the 'go-fish' database if it doesn't exist
use('go-fish');

// Creates the 'bios' collection in the 'go-fish' database if it doesn't exist
coll = db.bios;

// Insert a document
coll.insertOne(
    { 'name': 'jimmy', 'age': 27 }
);

// Insert multiple documents
coll.insertMany([
    { 'name': 'paul', 'age': 45 },
    { 'name': 'ringo', 'age': 34 },
    { 'name': 'starr', 'age': 34 },
    { 'name': 'albert', 'age': 69 }
]);

// Find documents
coll.find(
    { 'name': 'jimmy' }
);

coll.find(
    { 'age': 69 }
);

// Returns first match
coll.findOne(
    { 'age': 34 }
);

// Specify fields to exclude in output
coll.find(
    {}, { _id: 0, name: 0 }
);

// Specify fields to include in output
coll.find(
    {}, { name: 1 }
);

coll.updateOne(
    { 'name': 'jimmy' },
    {
        $set: {
            'location': 'nyc'
        }
    }
);

coll.find(
    { 'location': 'nyc' }
);

// Will update all of the documents that match the provided query
coll.updateMany(
    {},
    {
        $set: {
            'location': 'sf'
        }
    }
)

coll.find(
    { 'location': 'sf' }
);

coll.deleteOne(
    { 'age': 34 }
);

coll.deleteMany(
    {}
);

coll.drop();