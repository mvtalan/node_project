const express = require('express');
require('dotenv').config();
const fs = require('fs').promises;

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', async(req,res) => {

    try {

        // read file START ===============

        // const data = await fs.readFile('example.txt', 'utf-8');
        // res.send(data);

        // read file END =================

        const fileName = 'example2.txt';
        const content = "This is the sample text written to the file.";

        await fs.writeFile(fileName, content, 'utf-8');
        res.send(content); 

    }catch(error){

        console.error('Something went wrong: ', error);
        res.status(500).send('Internet server error.');
    }

})


app.listen(PORT, () => {
    console.log(`Connected on port ${PORT}`);
})