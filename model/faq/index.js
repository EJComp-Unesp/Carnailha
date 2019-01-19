let FAQ = require('./schema').FAQ;

module.exports.create = async (data) => {
    let faq = new FAQ(data);
    return await faq.save();
}   

module.exports.get = async (config = {}) => {
    return await FAQ.find(config).exec();
}

module.exports.getOneById = async (id) => {
    return await FAQ.findById(id).exec();
}

module.exports.update = async (id, data) => {
    let faq = await FAQ.findById(id).exec();
    data.updated_at = new Date().getTime();
    faq.set(data);
    return await faq.save();
}

module.exports.delete = async (id) => {
    return !! await FAQ.findByIdAndDelete(id).exec();
}