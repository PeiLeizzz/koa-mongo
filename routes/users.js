const router = require('koa-router')()
const userService = require('../service/users')
const courseService = require('../service/courses')

router.get('/get_user_plan/:userId', async (ctx) => {
    try {
        let res = {}
        let id = ctx.params.userId
        let data = await userService.getPlan(id)
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
            for (let i = 0; i < data.planTable.length; i++) {
                let day = data.planTable[i]
                for (let j = 0; j < day.length; j++) {
                    let courseId = day[j].id
                    let courseRes = await courseService.getCourse(courseId)
                    if (courseRes != null) {
                        data.planTable[i][j]._doc.name = courseRes.name
                        data.planTable[i][j]._doc.logo = courseRes.logo
                    }
                    else {
                        data.planTable[i][j]._doc.name = ""
                        data.planTable[i][j]._doc.logo = ""
                    }
                }
            }
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

router.post('/add_user', async (ctx, next) => {
    try {
        let user = ctx.request.body
        let res = await userService.getPlan(user.id)
        if (res != null) {
            return
        }
        res = await userService.insertUser(user)
        ctx.body = res
    }
    catch (e) {
        console.log(e)
    }
})

module.exports = router