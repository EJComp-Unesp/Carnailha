let Gallery = require('./schema').Gallery;

module.exports.create = async (data) => {
    let gallery = new Gallery(data);
    return await gallery.save();
}   

module.exports.get = async (config = {}) => {
    return await Gallery.find(config).exec();
}

module.exports.getOneById = async (id) => {
    return await Gallery.findById(id).exec();
}

module.exports.update = async (id, data) => {
    let gallery = await Gallery.findById(id).exec();
    data.updated_at = new Date().getTime();
    gallery.set(data);
    return await gallery.save();
}

module.exports.delete = async (id) => {
    return !! await Gallery.findByIdAndDelete(id).exec();
}