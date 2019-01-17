let Accommodation = require('./schema').Accommodation;

module.exports.create = async (data) => {
    let accommodation = new Accommodation(data);
    return await accommodation.save();
}   

module.exports.get = async (config = {}) => {
    return await Accommodation.find(config).exec();
}

module.exports.getOneById = async (id) => {
    return await Accommodation.findById(id).exec();
}

module.exports.update = async (id, data) => {
    let accommodation = await Accommodation.findById(id).exec();
    data.updated_at = new Date().getTime();
    accommodation.set(data);
    return await accommodation.save();
}

module.exports.delete = async (id) => {
    return !! await Accommodation.findByIdAndDelete(id).exec();
}