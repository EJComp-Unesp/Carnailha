let Caravan = require('./schema').Caravan;

module.exports.create = async (data) => {
    let caravan = new Caravan(data);
    return await caravan.save();
}   

module.exports.get = async (config = {}) => {
    return await Caravan.find(config).exec();
}

module.exports.getOneById = async (id) => {
    return await Caravan.findById(id).exec();
}

module.exports.update = async (id, data) => {
    let caravan = await Caravan.findById(id).exec();
    data.updated_at = new Date().getTime();
    caravan.set(data);
    return await caravan.save();
}

module.exports.delete = async (id) => {
    return !! await Caravan.findByIdAndDelete(id).exec();
}