const router = require('koa-router')()
const userService = require('../service/user')

router.get('/get_user_plan/:userId', async (ctx) => {
    try {
        let id = ctx.params.userId
        let res = await userService.getPlan(id)
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
                    "planTable": res.planTable
                }
            }
        }
    }
    catch (e) {
        console.log(e)
    }
})

router.post('/add_user', async (ctx, next) => {
    try {
        let user = ctx.request.body
        let res = await userService.getPlan(user.userId)
        if (res != null) {
            ctx.body = '已存在'
            return
        }
        const newUser = {
            'id': user.userId,
            'name': user.name,
            'planTables': [
                [
                    {
                        'id': user.courseId,
                        'length': user.length,
                    }
                ]
            ]
        }
        res = await userService.insertUser(newUser)
        ctx.body = res
    }
    catch (e) {
        console.log(e)
    }
})

module.exports = router