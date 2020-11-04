const router = require('koa-router')()

router.get('/get_course_plan/:courseId', async (ctx, next) => {
    try {
        let table = ctx.db.collection('courses')
        let id = ctx.params.courseId
        let res = await table.findOne({'courseId': id})
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
                    "courseName": res.courseName,
                    "plan": res.plan
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