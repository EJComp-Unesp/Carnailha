var md = require('markdown-it')();
var header = require('../header');
var footer = require('../footer');

module.exports = {
    generatePage: function (pageContent) {
        return ` 
        <section class="contact-sec " id="evento">
        <div class="container-fluid">
          <div class="row">
            <div class="metro">
              <div class="col-md-12">
              ${
            pageContent.hasOwnProperty('stages')
                ? pageContent.stages.length
                    ? pageContent.stages.map((stage, index) => {
                        console.log(index);
                        if (index == 0)
                            return `
                            <div class="col-md-7 col-xs-12 metro-big wow fadeIn" data-wow-delay="0.3s"
                            style="background-image: url('${stage.img}');">
                            <div class="metro-cover">
                                <h3>${stage.name}</h3>
                            </div>
                            </div>
                            <div class="col-md-5 col-sm-12 col-xs-12">
                            `
                        else if (index <= 2)
                            return `
                            <div class="col-md-12 col-sm-12 col-xs-12 metro-half wow fadeIn " data-wow-delay="0.5s"
                                style="background-image: url('${stage.img}');">
                                <div class="metro-cover">
                                    <h3>${stage.name}</h3>
                                </div>
                            </div>
                            `
                    }
                    )
                    : ''
                : ''
            }
               
                </div>
              </div>
              <!-- <div class="pull-right">
                <h3 class="text-white"><a href="#">CONFIRA A LINE ></a></h3>
              </div> -->
            </div>
          </div>
        </div>
      </section>
        `;
    }
}