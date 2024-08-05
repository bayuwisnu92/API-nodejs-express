const express = require('express');
const path = require('path'); 
const dotenv = require('dotenv');
dotenv.config();
const app = express();
app.use(express.static(path.join(__dirname, 'public')));
const port = process.env.PORT || 3000;
const connectDB = require('./database/db')
connectDB()


// Rute API
const apiRoutes = require('./routes/api');
// Rute Web documentasi
const webRouter = require('./routes/web')
app.use('/api', apiRoutes);
app.use(webRouter)
// Rute utama


// Jalankan server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
