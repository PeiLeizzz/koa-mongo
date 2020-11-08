const Koa = require('koa')
const app = new Koa()
const serve = require('koa-static')
const body = require('koa-body')
const { connect } = require('./models/connect')

const userApi = require('./routes/users')
const actionApi = require('./routes/actions')
const courseApi = require('./routes/courses')
//const coursesApi = require('./routes/coursesTable')

app.use(body({ Multipart: true }))
app.use(serve('./assets'))
app.use(userApi.routes())
app.use(courseApi.routes())
app.use(actionApi.routes())

let server = app.listen(3000, function() {
    const host = server.address().address;
    const port = server.address().port;
    console.log('app start listening at http://%s:%s', host, port);
});

(async () => {
    await connect(); // 执行连接数据库任务
})();