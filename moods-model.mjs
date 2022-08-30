// Import dependencies.
import mongoose from 'mongoose';
import 'dotenv/config';

// Connect based on the .env file parameters.
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);
const db = mongoose.connection;

// Confirm that the database has connected and print a message in the console.
db.once("open", (err) => {
    if(err){
        res.status(500).json({ error: '500:Connection to the server failed.' });
    } else  {
        console.log('Successfully connected to MongoDB Mood collection using Mongoose.');
    }
});

// SCHEMA: Define the collection's schema.
const entrySchema = mongoose.Schema({
    mood: { type: String, required: true },
	note: { type: String, required: true },
    date: { type: Date, required: true }
});


// Compile the model from the schema.
const Entry = mongoose.model("Entry", entrySchema);


// CREATE model *****************************************
const createEntry = async (mood, note, date) => {
    const entry = new Entry({
        mood: mood,
        note: note,
        date: date
    });
    return entry.save();
}


// RETRIEVE models *****************************************
// Retrieve based on a filter and return a promise.
const findEntries = async (filter) => {
    const query = Entry.find(filter);
    return query.exec();
}

// Retrieve based on the ID and return a promise.
const findEntryById = async (_id) => {
    const query = Entry.findById(_id);
    return query.exec();
}


// DELETE model based on ID  *****************************************
const deleteById = async (_id) => {
    const result = await Entry.deleteOne({_id: _id});
    return result.deletedCount;
};


// REPLACE model *****************************************************
const replaceEntry = async (_id, mood, note, date) => {
    const result = await Entry.replaceOne({_id: _id }, {
        mood:mood,
        note: note,
        date:date
    });
    return result.modifiedCount;
}

// Export our variables for use in the controller file.

export { createEntry, findEntries, findEntryById, replaceEntry, deleteById }