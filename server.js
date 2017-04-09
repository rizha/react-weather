let express = require('express');

let app = express();
const PORT  = process.env.PORT || 3000;

app.user((req, res, next) => {
  if (req.headers['x-forwarded-proto'] === 'http') {
    next();
  } else {
    res.redirect(`http://${req.hostname}${req.url}`);
  }
})
app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});