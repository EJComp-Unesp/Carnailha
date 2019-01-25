let Stage = require('./schema').Stage;

module.exports.create = async (data) => {
    let stage = new Stage(data);
    return await stage.save();
}   

module.exports.get = async (config = {}) => {
    return await Stage.find(config).exec();
}

module.exports.getOneById = async (id) => {
    return await Stage.findById(id).exec();
}

module.exports.update = async (id, data) => {
    let stage = await Stage.findById(id).exec();
    data.updated_at = new Date().getTime();
    stage.set(data);
    return await stage.save();
}

module.exports.delete = async (id) => {
    return !! await Stage.findByIdAndDelete(id).exec();
}