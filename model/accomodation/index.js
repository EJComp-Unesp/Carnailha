let Accomodation = require('./schema').Accomodation;

module.exports.create = async (data) => {
    let accomodation = new Accomodation(data);
    return await accomodation.save();
}   

module.exports.get = async (config = {}) => {
    return await Accomodation.find(config).exec();
}

module.exports.getOneById = async (id) => {
    return await Accomodation.findById(id).exec();
}

module.exports.update = async (id, data) => {
    let accomodation = await Accomodation.findById(id).exec();
    data.updated_at = new Date().getTime();
    accomodation.set(data);
    return await accomodation.save();
}

module.exports.delete = async (id) => {
    return !! await Accomodation.findByIdAndDelete(id).exec();
}