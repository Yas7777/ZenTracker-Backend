// Import dependencies.
import 'dotenv/config';
import express from 'express';
import * as entries from './moods-model.mjs';

const PORT = process.env.PORT;
const app = express();
app.use(express.json());


// CREATE controller ******************************************
app.post ('/entries', (req,res) => {
    entries.createEntry(
        req.body.mood,
        req.body.note,
        req.body.date
        )
        .then(entry => {
            res.status(201).json(entry);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ error: 'Creation of a document failed due to invalid syntax.' });
        });
});


// RETRIEVE controller ****************************************************
// GET mood by ID
app.get('/entries/:_id', (req, res) => {
    const entryId = req.params._id;
    entries.findentryById(entryId)
        .then(entry => {
            if (entry !== null) {
                res.json(entry);
            } else {
                res.status(404).json({ Error: 'Document not found' });
            }
         })
        .catch(error => {
            res.status(400).json({ Error: 'Request to retrieve document failed' });
        });

});

// GET mood
app.get('/entries', (req, res) => {
    let filter = {};

    entries.findEntries(filter, '', 0)
        .then(entries => {
            res.send(entries);
        })
        .catch(error => {
            console.error(error);
            res.send({ Error: 'Request to retrieve documents failed' });
        });

});

// UPDATE controller ************************************
app.put('/entries/:_id', (req, res) => {
    entries.replaceEntry(
        req.params._id,
        req.body.mood,
        req.body.note,
        // req.body.reps,
        // req.body.weight,

        req.body.date
    )
        .then(entry => {
            res.json(entry)

        })


    .catch(error => {
        console.error(error);
        res.status(400).json({ Error: 'Request to update a document failed' });
    });
});

// DELETE Controller ******************************
app.delete('/entries/:_id', (req, res) => {
    entries.deleteById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                res.status(204).send();
            } else {
                res.status(404).json({ Error: 'Document not found' });
            }
        })
        .catch(error => {
            console.error(error);
            res.send({ error: 'Request to delete a document failed' });
        });
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});