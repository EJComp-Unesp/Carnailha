let Testimonial = require('./schema').Testimonial;

module.exports.create = async (data) => {
    let testimonial = new Testimonial(data);
    return await testimonial.save();
}   

module.exports.get = async (config = {}) => {
    return await Testimonial.find(config).exec();
}

module.exports.getOneById = async (id) => {
    return await Testimonial.findById(id).exec();
}

module.exports.update = async (id, data) => {
    let testimonial = await Testimonial.findById(id).exec();
    data.updated_at = new Date().getTime();
    testimonial.set(data);
    return await testimonial.save();
}

module.exports.delete = async (id) => {
    return !! await Testimonial.findByIdAndDelete(id).exec();
}