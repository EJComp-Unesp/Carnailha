let Slider = require('./schema').Slider;

module.exports.create = async (data) => {
    let slider = new Slider(data);
    return await slider.save();
}   

module.exports.get = async (config = {}) => {
    return await Slider.find(config).exec();
}

module.exports.getOneById = async (id) => {
    return await Slider.findById(id).exec();
}

module.exports.update = async (id, data) => {
    let slider = await Slider.findById(id).exec();
    data.updated_at = new Date().getTime();
    slider.set(data);
    return await slider.save();
}

module.exports.delete = async (id) => {
    return !! await Slider.findByIdAndDelete(id).exec();
}