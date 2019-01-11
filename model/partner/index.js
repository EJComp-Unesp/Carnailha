let Partner = require('./schema').Partner;

module.exports.create = async (data) => {
    let partner = new Partner(data);
    return await partner.save();
}   

module.exports.get = async (config = {}) => {
    return await Partner.find(config).exec();
}

module.exports.getOneById = async (id) => {
    return await Partner.findById(id).exec();
}

module.exports.update = async (id, data) => {
    let partner = await Partner.findById(id).exec();
    data.updated_at = new Date().getTime();
    partner.set(data);
    return await partner.save();
}

module.exports.delete = async (id) => {
    return !! await Partner.findByIdAndDelete(id).exec();
}