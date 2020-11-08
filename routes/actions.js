const router = require('koa-router')()
const actionService = require('../service/actions')

router.get('/get_action/:actionId', async (ctx) => {
    try {
        let id = ctx.params.actionId
        let res = await actionService.getAction(id)
        if (res === null) {
            return {
                status: {
                    "code": 404,
                    "msg": "not found"
                }
            }
        }
        else {
            ctx.body = res
            return {
                status: {
                    "code": 200,
                    "msg": "ok"
                },
                data: {
                    "name": res.name,
                    "point": res.point,
                    "info": res.info,
                    "logo": res.logo,
                    "video": res.video
                }
            }
        }
    }
    catch (e) {
        console.log(e)
    }
})

router.post('/add_action', async (ctx, next) => {
    try {
        let action = ctx.request.body
        let res = await actionService.getAction(action.actionId)
        if (res != null) {
            ctx.body = "已存在"
            return
        }
        const newAction = {
            "id": action.actionId,
            "name": action.name,
            "point": action.point,
            "info": action.info,
            "logo": action.logo,
            "video": action.video
        }
        res = await actionService.addAction(newAction)
        ctx.body = res
    }
    catch (e) {
        console.log(e)
    }
})

module.exports = router