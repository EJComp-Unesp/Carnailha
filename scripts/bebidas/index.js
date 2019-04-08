var md = require('markdown-it')();
var header = require('../header');
var footer = require('../footer');

module.exports = {
    generatePage: function (pageContent) {
        return `  <!--Stat Section-->
        <section class="contact-sec stat-sec stat-section" id="stat-sec">
          <div class="container wow fadeIn" data-wow-delay="0.3s">
            <div class="">
              <h2 class="text-center">50 HORAS DO MELHOR OPEN-BAR</h2>
            </div>
            <div class="row">
              <div class="col-xs-12 drinks">
              ${
            pageContent.hasOwnProperty('drinks')
                ? pageContent.drinks.length
                    ? pageContent.drinks.map(drink =>
                        `
                        <div class="col-md-2 col-xs-6 col-sm-4">
                            <div class="img-round wow bounceIn center" data-wow-delay="0.1s">
                                <img src="${drink.icon}" class="img-responsive">
                            </div>
                        </div>
                        `)
                    : ''
                : ''
            }
              </div>
            </div>
            <br>
            <div class="row text-center stat wow fadeIn" data-wow-delay="0.5s">
            ${
            pageContent.hasOwnProperty('drinks')
                ? pageContent.drinks.length
                    ? pageContent.drinks.map(drink =>
                        `
                        <div class="col-md-2 col-xs-12 col-sm-4">
                        <div class="col-xs-12">
                          <img src="${drink.icon}">
                        </div>
                        <div class="col-xs-12">
                          <span class='numscroller' data-min='1' data-max='${drink.quantity}' data-delay='2' data-increment='${drink.quantity/5}'>${drink.quantity}</span>
                        </div>
                        <div class="col-xs-12">
                          <h3>${drink.name}</h3>
                        </div>
                      </div>
                        `)
                    : ''
                : ''
            }
            </div>
      
          </div>
      
          <h2 class="text-center">
            <small> *Dados edição 2018</small>
          </h2>
      
        </section>
        `;
    }
}