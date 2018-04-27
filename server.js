import express from 'express';
import path from 'path';
import open from 'open';
import config from './webpack.config.dev';
import webpack from 'webpack';
import bodyParser from 'body-parser';

const router = require('./backend/routes/route.js');
const port =  process.env.PORT || 3000;
const app = express();
const compiler = webpack(config);

app.use(bodyParser.json());

app.use('/css', express.static(__dirname + '/client/css'));
app.use('/route', router);

//This will use the webpack-dev-middleware to bundle the index.js file to bundle.js at the time the server starts. 
//So when index.html is called upon bundle.js is ready to be used.
app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './client/index.html'));
});

app.listen(port, (error) => {
    if (error) {
        console.log(error);
    } else {
        open(`http://localhost:${port}`);
        console.log(`Node app is running on port ${port}`);
    }
});
