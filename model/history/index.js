let History = require('./schema').History;

module.exports.create = async (data) => {
    let history = new History(data);
    return await history.save();
}   

module.exports.get = async (config = {}) => {
    return await History.find(config).exec();
}

module.exports.getOneById = async (id) => {
    return await History.findById(id).exec();
}

module.exports.update = async (id, data) => {
    let history = await History.findById(id).exec();
    data.updated_at = new Date().getTime();
    history.set(data);
    return await history.save();
}

module.exports.delete = async (id) => {
    return !! await History.findByIdAndDelete(id).exec();
}