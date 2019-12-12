var md = require('markdown-it')();
var header = require('../header');
var footer = require('../footer');

module.exports = {
    generatePage: function (pageContent) {
        return `<section class="services-sec " id="novidades" id="services">
        <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
          <!-- Indicators -->
          <ol class="carousel-indicators">
            <li data-slide-to="0" class="active"></li>
            <li data-slide-to="1"></li>
          </ol>
    
          <!-- Wrapper for slides -->
          <div class="carousel-inner" role="listbox">
          ${
            pageContent.hasOwnProperty('sliders')
                ? pageContent.sliders.length
                    ? pageContent.sliders.map(slider => `
                    ${
                        slider.slides.map(slide => `
                        <div class="item">
                            <img class="img-responsive" src="${slide.img}">
                            <div class="carousel-caption wow fadeInDown">
                                <a href="${slide.link}">
                                <h3 class="">${slide.title}</h3>
                                </a>
                                <p>${slide.description}</p>
                            </div>
                        </div>`)
                        }
                     `)
                    : ''
                : ''
            }
          </div>
    
          <!-- Controls -->
          <a class="left carousel-control" role="button" data-slide="prev" data-target="#carousel-example-generic">
            <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
            <span class="sr-only">Próximo</span>
          </a>
          <a class="right carousel-control" role="button" data-slide="next" data-target="#carousel-example-generic">
            <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
            <span class="sr-only">Anterior</span>
          </a>
        </div>
      </section>`;
    }
}