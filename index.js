const express = require('express');
const { createClient } = require('redis');

const app = express();
const port = 3000;

const client = createClient(
    // set your redis client configuration
);

client.on('error', (err) => console.log('Redis Client Error', err));

app.use(express.json());

app.get('/get/:key', async (req, res) => {
    const { key } = req.params;
    try {
        const value = await client.get(key);
        res.send({ key, value });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post('/set', async (req, res) => {
    const { key, value } = req.body;
    try {
        await client.set(key, value);
        res.send({ key, value });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.put('/update/:key', async (req, res) => {
    const { key, value } = req.body;
    try {
        await client.set(key, value);
        res.json({ message: `Key ${key} updated successfully to ${value}` });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.delete('/delete/:key', async (req, res) => {
    const { key } = req.params;
    try {
        await client.del(key);
        res.json({ message: `Key ${key} deleted successfully` });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

(async () => {
    await client.connect();
    app.listen(port, () => {
        console.log(`Server listening on port ${port}`);
    });
})();