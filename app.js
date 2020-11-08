const Koa = require('koa')
const app = new Koa()
const serve = require('koa-static')
const body = require('koa-body')
const { connect } = require('./models/connect')
// const dbClient = require('./models/db.js')
// app.context.db = dbClient.db('testDB');

//const usersApi = require('./routes/usersTable')
const userApi = require('./routes/user')
const coursesApi = require('./routes/coursesTable')
const actionsApi = require('./routes/actionsTable')

app.use(body({Multipart: true}))
app.use(serve('./assets'))
app.use(userApi.routes())
app.use(coursesApi.routes())
app.use(actionsApi.routes())

let server = app.listen(3000, function() {
    const host = server.address().address;
    const port = server.address().port;
    console.log('app start listening at http://%s:%s', host, port);
});

(async () => {
    await connect(); // 执行连接数据库任务
})();