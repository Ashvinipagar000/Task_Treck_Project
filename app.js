// const express = require('express');
// const app = express();
// const db = require('./user/models/usermodel');

// app.use(express.json());
// app.use('/api/users', require('./user/routes/userroute'));

// sequelize.authenticate().then(() => {
//   console.log("DB synced");
//   app.listen(3000, () => {
//     console.log("Server running on http://localhost:3000");
//   });
// });

const express = require('express');
const app = express();
const cors = require('cors');
  const corsOptions = {
    origin: 'http://localhost:4200',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
  };
  
  app.use(cors(corsOptions));
  console.log("✅ CORS middleware initialized for http://localhost:4200");
  
// Import your sequelize connection from the correct file
// const sequelize = require('./sequelize'); // <-- Make sure this path points to your actual sequelize config file
const User = require('./user/models/usermodel'); // Import model (optional if already synced elsewhere)
const { sequelize } = require('./sequelize'); 
app.use(express.json());
app.use('/Nodeapi/users', require('./user/routes/userroute'));

// Authenticate DB and start server
sequelize.authenticate()
  .then(() => {
    console.log('✅ SQL DB connected');
    app.listen(3000, () => {
      console.log('🚀 Server running on http://localhost:3000');
    });
  })
  .catch((err) => {
    console.error('❌ Unable to connect to DB:', err);
  });


  
