const router = require('koa-router')()
const actionService = require('../service/actions')

router.get('/get_action/:actionId', async (ctx) => {
    try {
        let res = {}
        let id = ctx.params.actionId
        let data = await actionService.getAction(id)
        if (data === null) {
            res = {
                status: {
                    "code": 404,
                    "msg": "not found"
                }
            }
            ctx.body = res
        }
        else {
            res = {
                status: {
                    "code": 200,
                    "msg": "ok"
                },
                data: data
            }
            ctx.body = res
        }
    }
    catch (e) {
        console.log(e)
    }
})

router.post('/add_action', async (ctx, next) => {
    try {
        let action = ctx.request.body
        let res = await actionService.getAction(action.id)
        if (res != null) {
            return
        }
        await actionService.addAction(action)
        ctx.body = res
    }
    catch (e) {
        console.log(e)
    }
})

module.exports = router