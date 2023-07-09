const express = require('express');
const app = express();

 require('dotenv').config()
 const port = process.env.PORT || 3000 ;
 const routes = require('./routes');


// Configure JSON body parser
app.use(express.json());

// Mount routes
app.use('/api', routes);

// Handle 404 errors
app.use((req, res) => {
  res.status(404).json({ message: 'Not found' });
});

// Handle errors
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: 'Internal server error' });
});

app.listen(port, () => {
    console.log(`Server started on port : ${port}`);
  });
