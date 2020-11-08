const userModel = require('../models/user')

class UserService {
    async getPlan(userId) {
        try {
            let daysPlan = await userModel.findOne({'id': userId})
            return daysPlan
        }
        catch (e) {
            console.log(e);
        }
    }

    async insertUser(data) {
        try {
            let res = await userModel.create(data)
        }
        catch (e) {
            console.log(e)
        }
    }
}

module.exports = new UserService()