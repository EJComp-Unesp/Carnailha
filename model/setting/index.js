let Setting = require('./schema').Setting;

module.exports.create = async (data) => {
    let setting = new Setting(data);
    return await setting.save();
}   

module.exports.get = async (config = {}) => {
    return await Setting.find(config).exec();
}

module.exports.getOneById = async (id) => {
    return await Setting.findById(id).exec();
}

module.exports.update = async (id, data) => {
    let setting = await Setting.findById(id).exec();
    data.updated_at = new Date().getTime();
    setting.set(data);
    return await setting.save();
}

module.exports.delete = async (id) => {
    return !! await Setting.findByIdAndDelete(id).exec();
}