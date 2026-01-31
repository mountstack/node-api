require('dotenv').config();
const express = require('express'); 

const app = express();

const port = process.env.PORT || 8000;

app.get('/', (req, res) => { 
  res.json({
    message: 'Hello World: v5', 
    port: `App listening at http://45.76.145.81:${port}`, 
  }); 
}); 

app.listen(port, () => {
  console.log(`App listening at http://45.76.145.81:${port}`);
}); 