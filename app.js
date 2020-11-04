const Koa = require('koa')
const app = new Koa()
const serve = require('koa-static')
const body = require('koa-body')
const dbClient = require('./models/db.js')
app.context.db = dbClient.db('testDB');

const usersApi = require('./routes/usersTable')
const coursesApi = require('./routes/coursesTable')
const actionsApi = require('./routes/actionsTable')

app.use(body({Multipart: true}))
app.use(serve('./assets'))
app.use(usersApi.routes())
app.use(coursesApi.routes())
app.use(actionsApi.routes())

var server = app.listen(3000, function() {
    const host = server.address().address;
    const port = server.address().port;
    console.log('app start listening at http://%s:%s', host, port);
});

