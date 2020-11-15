const courseModel = require('../models/courses')

class CourseService{
    async getCourse(courseId) {
        try {
            let courseDetail = await courseModel.findOne({'id': courseId})
            return courseDetail
        }
        catch (e) {
            console.log(e);
        }
    }

    async insertCourse(data) {
        try {
            let res = await courseModel.create(data)
        }
        catch (e) {
            console.log(e)
        }
    }
}

module.exports = new CourseService()