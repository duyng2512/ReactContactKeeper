const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({ msg: 'Contact Keeper API ...' });
});

const PORT = process.env.PORT || 5000;

/** Route Definition */
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contact', require('./routes/contact'));

app.listen(PORT, () => {
  console.log(`Server start on Port ${PORT}`);
});
