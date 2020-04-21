const express = require('express');
const connectDB = require('./config/db');
const path = require('path');
const app = express();

/** Connect Mongo DB */
connectDB();

/** Init Middleware 
*  middleware layer that you want to add (it can be generic to all paths, 
  or triggered only on specific path(s) your server handles), and it will 
  add onto your Express middleware stack.
*/
app.use(express.json({ extend: false }));

app.get('/', (req, res) => {
  res.json({ msg: 'Contact Keeper API ...' });
});

const PORT = process.env.PORT || 5000;

/** Route Definition */
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contact', require('./routes/contact'));

/** Serve Static assets in production */
if (process.env.NODE_ENV === 'production') {
  /** Set static folder */
  app.use(express.static('client/build'));
  app.get('*', (req, res) =>
    res.sendFile(path.resolve(_dirname, 'client', 'build', 'index.html'))
  );
}

app.listen(PORT, () => {
  console.log(`Server start on Port ${PORT}`);
});
