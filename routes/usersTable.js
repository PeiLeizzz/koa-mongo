const router = require('koa-router')()

router.get('/get_user_plan/:userId', async(ctx, next) => {
    try{
        let table = ctx.db.collection('users')
        let id = ctx.params.userId
        let res = await table.findOne({'userId': id})
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
                    "userName": res.userName,
                    "planTable": res.planTable
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