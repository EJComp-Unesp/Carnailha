let Organizer = require('./schema').Organizer;

module.exports.create = async (data) => {
    let organizer = new Organizer(data);
    return await organizer.save();
}   

module.exports.get = async (config = {}) => {
    return await Organizer.find(config).exec();
}

module.exports.getOneById = async (id) => {
    return await Organizer.findById(id).exec();
}

module.exports.update = async (id, data) => {
    let organizer = await Organizer.findById(id).exec();
    data.updated_at = new Date().getTime();
    organizer.set(data);
    return await organizer.save();
}

module.exports.delete = async (id) => {
    return !! await Organizer.findByIdAndDelete(id).exec();
}