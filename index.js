const express = require('express');
const getUSStates = require('./getUSStates');


const app = express();



app.get('/api/states', async (req, res) =>{
const states = await getUSStates();
res.json(states)
})

app.use(express.static('public'))

const port = process.env.PORT || 4242

app.listen(port, () => {
    console.log(`listening at localhost: ${port}`)
})
