var md = require('markdown-it')();

module.exports = {
    generatePage: function (pageContent) {
        return `
        <div class="row text-center wow slideInUp" data-wow-delay="0.1" style="color: white; visibility: visible; animation-name: slideInUp;">
            <div class="col-xs-12 text-center center">
            ${
                pageContent.hasOwnProperty('partners')
                    ? pageContent.partners.length
                        ? pageContent.partners.map(partner =>`
                        <div class="col-xs-4 text-center center">
                            <img class="img-responsive big" src="${partner.img}">
                        </div>`)
                    : ``
                    : ``
            }
            </div>
        </div>
    `;
    }
}