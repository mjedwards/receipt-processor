import express from 'express';
import cors from 'cors';
import receiptRoutes from './routes/receiptRoutes.js';

const app = express();

app.use([cors(), express.json(), express.urlencoded({extended: true})]);

// Routes
app.get('/', (req, res) => {
    res.send('hello!');
});

// Receipt Processor Route(s)
app.use('/receipts', receiptRoutes);


const PORT = 8080;

app.listen(PORT, (err, res) => {
    console.log(`Server is running on port ${PORT}`);
});