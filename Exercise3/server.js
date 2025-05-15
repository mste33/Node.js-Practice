const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.use(express.static('./'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/exercise3.html');
});

app.post('/check', (req, res) => {
    const name = req.body.name;
    const phone = req.body.phone;
    
    // Check if phone number is correct (123-456-7890)
    let isCorrect = false;
    if (phone.length === 12) {
        if (phone[3] === '-' && phone[7] === '-') {
            isCorrect = true;
        }
    }
    
    // Send response
    if (isCorrect) {
        res.send(`Good! ${name}, your phone number ${phone} is correct!`);
    } else {
        res.send(`Sorry ${name}, your phone number ${phone} is wrong. Use format: 123-456-7890`);
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
}); 