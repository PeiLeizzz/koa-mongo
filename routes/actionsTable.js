const router = require('koa-router')()

router.get('/get_action_detail/:actionId', async(ctx, next) => {
    try{
        let table = ctx.db.collection('actions')
        let id = ctx.params.actionId
        let res = await table.findOne({'actionId': id})
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
                    "actionName": res.actionName,
                    "intro": res.actionIntro
                }
            }
        }
    }
    catch (e) {
        console.log(e)
        return {
            status: {
                "code": 500,
                "msg": "error"
            }
        }
    }
})

module.exports = router