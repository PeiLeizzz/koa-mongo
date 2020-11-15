const router = require('koa-router')()
const courseService = require('../service/courses')

router.get('/get_course_plan/:courseId', async (ctx, next) =>{
    try{
        let id = ctx.params.courseId
        let res = await courseService.getCourse(id)
        console.log(res)
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
                    "actions": res.actions
                }
            }
        }
    }
    catch (e) {
        console.log(e)
    }
})


router.post('/add_course', async (ctx, next) => {
    try {
        let course = ctx.request.body
        let res = await courseService.getCourse(course.courseId)
        if (res != null) {
            ctx.body = "已存在"
            return
        }
        const newCourse = {
            "id": course.courseId,
            "name": course.name,
            "length": course.length,
            "actions": course.actions,
            "logo": course.logo,
            "info": course.info
        }
    }
    catch (e) {
        console.log(e)
    }
})
module.exports = router