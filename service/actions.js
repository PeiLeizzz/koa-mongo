const actionModel = require('../models/actions')

class ActionService {
    async getAction(actionId) {
        try {
            let action = await actionModel.findOne({'id': actionId})
            console.log(action)
            return action
        }
        catch (e) {
            console.log(e);
        }
    }

    async addAction(data) {
        try {
            let res = await actionModel.create(data)
        }
        catch (e) {
            console.log(e)
        }
    }
}

module.exports = new ActionService()