// App Set //
const PORT = process.env.PORT || 5000;
const axios = require('axios').default;
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());

const url = 'https://e3ad99b4-6e1c-4a82-a77a-125c6f969460-us-east-2.apps.astra.datastax.com/api/rest/v2/namespaces/tickets/collections/tasks';
const token = 'AstraCS:MJyMkhsyGOWNhMqAAEIfzWzy:356cd418b3f6ead97fad7929a225e982e43fbb94224e30e736f6ae293c0b53b9';

app.post('/tickets', async (req, res) => {
    const formData = req.body.formData;
    const options = {
        method: 'POST',
        headers: {
            Accepts: 'application/json',
            'X-Cassandra-Token': token,
            'Content-Type': 'application/json'
        },
        data: formData
    }

    try {
            const response = await axios(url, options)
            res.status(200).json(response.data) 
        } catch (err) {
            console.log('Error in POST', err)
            res.status(500).json({message: err})
        }
    })

/** Listen * */
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
  });