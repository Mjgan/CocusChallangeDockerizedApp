const express = require('express');
const bodyParser = require('body-parser');

const app = express();


app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <link rel="stylesheet" href="styles.css">
      </head>
      <body>
        <section>
          <h2> Cocus Challange</h2>
          <h3>this is just a demo</h3>
        </section>
      </body>
    </html>
  `);
});
app.listen(80);
