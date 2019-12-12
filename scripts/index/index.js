var md = require('markdown-it')();
var header = require('../header');
var footer = require('../footer');

module.exports = {
    generatePage: function (pageContent) {
        return `<!DOCTYPE html>
<html lang="pt-br">
${header.generatePage()}
<body class="drawer drawer--right">
  <div class="loader loader-bg">
    <div class="loader-inner ball-pulse">
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>

  <nav class="drawer-nav" role="navigation">
    <div class="drawer-menu">
      <ul class="hamburger" style="">
        <a class="hidden-xs hamburger" id="drawerbtn2">
          <i class="fas fa-bars fa-2x" aria-hidden="true" style="z-index: 1 !important;"></i>
        </a>
      </ul>
      <ul class="nav">
        <!-- <li><a href="#carna2019">HISTÓRICO</a></li> -->
        <!-- <li><a href="#carna2019">ALOJAMENTO</a></li> -->
        <li>
          <a href="./alojamentos.html">ALOJAMENTOS</a>
        </li>
        <li>
          <a href="./caravanas.html">CARAVANAS</a>
        </li>
        <!-- <li><a href="#faq">LINE UP</a></li> -->
        <!-- <li><a href="#contato">HORÁRIOS DO BUSÃO</a></li> -->
        <li>
          <a href="./faq.html">FAQ</a>
        </li>
        <li>
          <a href="./mapa.html">MAPA</a>
        </li>
        <!-- <li><a href="#contato">CARNAILHA APOIA</a></li> -->
        <!-- <li><a href="#contato">GALERIA</a></li> -->
      </ul>
    </div>
  </nav>

  <section class="cover" id="home">
    <video loop muted autoplay poster="" class="fullscreen-bg__video">
      <source src="resources/video/introredux.webm" type="video/webm">
    </video>
    <section class="subcover">
      <nav class="navbar navbar-default navbar-fixed-top top-bar" data-offset-top="200" data-spy="affix">
        <div class="container">
          <div class="navbar-header">
            <button aria-controls="navbar" aria-expanded="false" data-target="#navbar" data-toggle="collapse"
              class="navbar-toggle collapsed" type="button">
              <span class="sr-only">Alterar menu</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a href="#home">
              <img class="navbar-brand nav-brand" src="resources/img/logoredux.png">
            </a>
          </div>
          <div class="navbar-collapse collapse" id="navbar">
            <ul class="nav navbar-nav navbar-right">
              <li class="hidden-sm">
                <a href="#home">INÍCIO</a>
              </li>
              <li>
                <a href="./index.html#evento">O EVENTO</a>
              </li>
              <li>
                <a href="./index.html#info">INFORMAÇÕES</a>
              </li>
              <li>
                <a href="./index.html#contato">CONTATO</a>
              </li>
              <!-- <li>
                <a href="#!" target="_blank" class="lineout">ADQUIRA
                  SEU INGRESSO</a>
              </li> -->
              <div class="visible-xs nav">
                <!-- <li><a href="#home">HISTÓRICO</a></li> -->
                <!-- <li><a href="#carna2019">ALOJAMENTO</a></li> -->
                <li class="hidden-md hidden-lg">
                  <a href="./alojamentos.html">ALOJAMENTO</a>
                </li>
                <li class="hidden-md hidden-lg">
                  <a href="./caravanas.html">CARAVANAS</a>
                </li>
                <!-- <li><a href="#faq">LINE UP</a></li> -->
                <!-- <li><a href="#contato">HORÁRIOS DO BUSÃO</a></li> -->
                <li class="hidden-md hidden-lg">
                  <a href="./faq.html">FAQ</a>
                </li>
                <li class="hidden-md hidden-lg">
                  <a href="./mapa.html">MAPA</a>
                </li>
                <!-- <li><a href="#contato">CARNAILHA APOIA</a></li>
                <li><a href="#contato">GALERIA</a></li> -->
              </div>
              <li>
                <a class="hidden-xs" id="drawerbtn">
                  <i class="fa fa-bars fa-2x" aria-hidden="true" style="z-index: 1 !important;"></i>
                </a>
              </li>
            </ul>
          </div>
          <!--/.nav-collapse -->
        </div>
      </nav>

      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-8 ">
            <div class="text-block wow fadeInLeft" data-wow-delay="0.5s">
              <img class="img-responsive center  hidden-md hidden-lg wow fadeIn" src="resources/img/carna2k19.png">
              <h1 class="">O MAIOR CARNAVAL UNIVERSITÁRIO DO BRASIL!</h1>
              <h4 class="">CARNAILHA 2019 - 01 A 05 DE MARÇO</h4>
              <div class="action-bar text-center">
                <div id="clockdiv">
                  <div class="col-xs-6 col-sm-3 col-md-3 ">
                    <div class="inner">
                      <div class="space"></div>
                      <span class="days"></span>
                      <div class="smalltext">DIAS</div>
                    </div>
                  </div>
                  <div class="col-xs-6 col-sm-3 col-md-3">
                    <div class="inner">
                      <div class="space"></div>
                      <span class="hours"></span>
                      <div class="smalltext">HORAS</div>
                    </div>
                  </div>
                  <div class="col-xs-6 col-sm-3 col-md-3">
                    <div class="inner">
                      <div class="space"></div>
                      <span class="minutes"></span>
                      <div class="smalltext">MINUTOS</div>
                    </div>
                  </div>
                  <div class="col-xs-6 col-sm-3 col-md-3">
                    <div class="inner">
                      <div class="space"></div>
                      <span class="seconds"></span>
                      <div class="smalltext">SEGUNDOS</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-4">
            <div class="img-block">
              <img class="img-responsive visible-md visible-lg wow bounceIn" data-wow-delay="0.7s"
                src="resources/img/carna2k19.png">
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
  <section class="services-sec " id="middle">
    <div class="text-center">
      <div class="ticket-sec" data-toggle="tooltip" data-placement="top" title="Ingressos esgotados!">
        <div class="">
          <img src="./resources/img/no-entry-sign_1f6ab.png" style="position: absolute;">
          <i class="fas fa-ticket-alt fa-3x"></i>
          <br>

          <a class="" href="#!">
            <h4 id="flip" class="btn text-center lineout">COMPRE SEU
              INGRESSO
            </h4>
          </a>
        </div>
      </div>
    </div>
  </section>
  <section class="services-sec " id="novidades" id="services">
    <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
      <!-- Indicators -->
      <ol class="carousel-indicators">
        <li data-slide-to="0" class="active"></li>
        <li data-slide-to="1"></li>
      </ol>

      <!-- Wrapper for slides -->
      <div class="carousel-inner" role="listbox">
        <div class="item">
          <img class="img-responsive" src="resources/img/bg-01.jpg">
          <div class="carousel-caption wow fadeInDown">
            <a href="https://www.facebook.com/events/885384528315484/">
              <h3 class="">AINDA NÃO CURTIU O EVENTO?</h3>
            </a>
            <p>Confira nosso evento no Facebook e confira as novidades.</p>
          </div>
        </div>
        <div class="item active">
          <img class="img-responsive" src="resources/img/bg-02.jpg">
          <div class="carousel-caption  wow fadeInDown">
            <a
              href="https://www.facebook.com/BlocoSuperBateria/photos/gm.902143136639623/1143040935846655/?type=3&theater">
              <h3 class="">VOCÊ JÁ ENTROU NOS GRUPOS DO CARNAILHA 2019?</h3>
            </a>
            <p>Confira nossos grupos no Facebook, para compartilhar e obter as informações!</p>
          </div>
        </div>
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
  </section>

  <section class="contact-sec " id="evento">
    <div class="container-fluid">
      <div class="row">
        <div class="metro">
          <div class="col-md-12">
            <div class="col-md-7 col-xs-12 metro-big wow fadeIn" data-wow-delay="0.3s"
              style="background-image: url('./resources/img/PALCO principal tati (site) alteração 2.png');">
              <div class="metro-cover">
                <h3>PALCO PRINCIPAL</h3>
              </div>
            </div>
            <div class="col-md-5 col-sm-12 col-xs-12">
              <div class="col-md-12 col-sm-12 col-xs-12 metro-half wow fadeIn " data-wow-delay="0.4s"
                style="background-image: url('./resources/img/PALCO ELETRONICO.png');">
                <div class="metro-cover">
                  <h3>PALCO ELETRÔNICO</h3>
                </div>
              </div>
              <div class="col-md-12 col-sm-12 col-xs-12 metro-half wow fadeIn " data-wow-delay="0.5s"
                style="background-image: url('./resources/img/baterias.png');">
                <div class="metro-cover">
                  <h3>BATERIAS</h3>
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="pull-right">
            <h3 class="text-white"><a href="#">CONFIRA A LINE ></a></h3>
          </div> -->
        </div>
      </div>
    </div>
  </section>

  <!--Stat Section-->
  <section class="contact-sec stat-sec stat-section" id="stat-sec">
    <div class="container wow fadeIn" data-wow-delay="0.3s">
      <div class="">
        <h2 class="text-center">50 HORAS DO MELHOR OPEN-BAR</h2>
      </div>
      <div class="row">
        <div class="col-xs-12 drinks">
          <div class="col-md-2 col-xs-6 col-sm-4">
            <div class="img-round wow bounceIn center" data-wow-delay="0.1s">
              <img src="./resources/img/bebidas/skol.png" class="img-responsive">
            </div>
          </div>
          <div class="col-md-2 col-xs-6 col-sm-4">
            <div class="img-round wow bounceIn center" data-wow-delay="0.2s">
              <img src="./resources/img/bebidas/askov.png" class="img-responsive">
            </div>
          </div>
          <div class="col-md-2 col-xs-6 col-sm-4">
            <div class="img-round wow bounceIn center" data-wow-delay="0.3s">
              <img src="./resources/img/bebidas/energ.png" class="img-responsive">
            </div>
          </div>
          <div class="col-md-2 col-xs-6 col-sm-4">
            <div class="img-round wow bounceIn center" data-wow-delay="0.4s">
              <img id="bebida" src="./resources/img/bebidas/bebida 1.png" class="img-responsive">
            </div>
          </div>
          <div class="col-md-2 col-xs-6 col-sm-4">
            <div class="img-round wow bounceIn center" data-wow-delay="0.5s">
              <img src="./resources/img/bebidas/aragua_logotipo.png" class="img-responsive">
            </div>
          </div>
          <div class="col-md-2 col-xs-6 col-sm-4">
            <div class="img-round wow bounceIn center" data-wow-delay="0.6s">
              <img id="corote" src="./resources/img/bebidas/Corote-Sabores-(5).png" class="img-responsive">
            </div>
          </div>
        </div>
      </div>
      <br>
      <div class="row text-center stat wow fadeIn" data-wow-delay="0.5s">
        <div class="col-md-2 col-xs-12 col-sm-4">
          <div class="col-xs-12">
            <img src="./resources/img/bebidas/svg/beer-1.svg">
          </div>
          <div class="col-xs-12">
            <span class='numscroller' data-min='1' data-max='36600' data-delay='2' data-increment='50'>36600</span>
          </div>
          <div class="col-xs-12">
            <h3>LITROS DE CERVEJA</h3>
          </div>
        </div>
        <div class="col-md-2 col-xs-12 col-sm-4">
          <div class="col-xs-12">
            <img src="./resources/img/bebidas/svg/bottle-1.svg">
          </div>
          <div class="col-xs-12">
            <span class='numscroller' data-min='1' data-max='3300' data-delay='3' data-increment='10'>3300</span>
          </div>
          <div class="col-xs-12">
            <h3>LITROS DE VODKA</h3>
          </div>
        </div>
        <div class="col-md-2 col-xs-12 col-sm-4">
          <div class="col-xs-12">
            <img src="./resources/img/bebidas/svg/coke-1.svg">
          </div>
          <div class="col-xs-12">
            <span class='numscroller' data-min='1' data-max='6600' data-delay='4' data-increment='14'>6600</span>
          </div>
          <div class="col-xs-12">
            <h3>LITROS DE ENERGÉTICO</h3>
          </div>
        </div>
        <div class="col-md-2 col-xs-12 col-sm-4">
          <div class="col-xs-12">
            <img src="./resources/img/bebidas/svg/bottle.svg">
          </div>
          <div class="col-xs-12">
            <span class='numscroller' data-min='1' data-max='3720' data-delay='5' data-increment='10'>3720</span>
          </div>
          <div class="col-xs-12">
            <h3>LITROS DE REFRIGERANTE</h3>
          </div>
        </div>
        <div class="col-md-2 col-xs-12 col-sm-4">
          <div class="col-xs-12">
            <img src="./resources/img/bebidas/svg/water-bottle.svg">
          </div>
          <div class="col-xs-12">
            <span class='numscroller' data-min='1' data-max='24960' data-delay='6' data-increment='30'>24960</span>
          </div>
          <div class="col-xs-12">
            <h3>LITROS DE ÁGUA</h3>
          </div>
        </div>
        <div class="col-md-2 col-xs-12 col-sm-4">
          <div class="col-xs-12">
            <img src="./resources/img/bebidas/svg/cocktail-2.svg">
          </div>
          <div class="col-xs-12">
            <span class='numscroller' data-min='1' data-max='13000' data-delay='6' data-increment='15'>13000</span>
          </div>
          <div class="col-xs-12">
            <h3>LITROS DE COQUETEL ALCOÓLICO</h3>
          </div>
        </div>
      </div>

    </div>

    <h2 class="text-center">
      <small> *Dados edição 2018</small>
    </h2>

  </section>

  <!-- <section class="contact-sec map-frame " id="info">
    <h2 class="text-center map-over" style="">- ONDE É? -</h2>
    <iframe class="map-content" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d71137.9654160739!2d-51.3678138199514!3d-20.435240384275136!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9499f8721870cc65%3A0xf6bd188d5f7de344!2sIlha+Solteira%2C+SP%2C+15385-000!5e0!3m2!1spt-BR!2sbr!4v1534732049104"
      width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
  </section> -->

  <section class="contact-sec info-sec faq " id="info">
    <div class="container wow fadeIn">
      <h2 class="text-center ">INFORMAÇÕES
        <br>
      </h2>
      <div class="row text-center " style="color:white;">
        <div class="col-xs-6 col-sm-3 col-md-3 wow zoomIn" data-wow-delay="0.1s">
          <a href="./faq.html">
            <div class="border-icon">
              <i class="fa fa-info fa-6x"></i>
            </div>
            <h3>FAQ</h3>
          </a>
        </div>
        <div class="col-xs-6 col-sm-3 col-md-3 wow zoomIn" data-wow-delay="0.4s">
          <a href="./caravanas.html">
            <div class="border-icon">
              <i class="fa fa-shuttle-van fa-6x"></i>
            </div>
            <h3>CARAVANAS</h3>
          </a>
        </div>
        <div class="col-xs-6 col-sm-3 col-md-3 wow zoomIn" data-wow-delay="0.2s">
          <a href="./alojamentos.html">
            <div class="border-icon">
              <i class="fa fa-home fa-6x"></i>
            </div>
            <h3>ALOJAMENTO</h3>
          </a>
        </div>
        <div class="col-xs-6 col-sm-3 col-md-3 wow zoomIn" data-wow-delay="0.3s">
          <a href="./mapa.html">
            <div class="border-icon">
              <i class="fa fa-map-marker-alt fa-6x"></i>
            </div>
            <h3>MAPA</h3>
          </a>
        </div>
        <div class="col-xs-6 col-sm-3 col-md-3 wow zoomIn" data-wow-delay="0.2s" data-toggle="tooltip"
          data-placement="top" title="Em breve!">
          <a href="#!">
            <div class="border-icon">
              <i class="fa fa-angle-double-right  fa-6x"></i>
            </div>
            <h3>LINE UP</h3>
          </a>
        </div>
        <div class="col-md-offset-1 col-xs-6 col-sm-3 col-md-4 wow zoomIn" data-wow-delay="0.2s" data-toggle="tooltip"
          data-placement="top" title="Em breve!">
          <a href="#!">
            <div class="border-icon">
              <i class="fa fa-book fa-6x"></i>
            </div>
            <h3>GUIA DO FOLIÃO</h3>
          </a>
        </div>
        <div class="col-md-offset-1 col-xs-6 col-sm-3 col-md-3 wow zoomIn" data-wow-delay="0.2s" data-toggle="tooltip"
          data-placement="top" title="Em breve!">
          <a href="#!">
            <div class="border-icon">
              <i class="fa fa-bus fa-6x"></i>
            </div>
            <h3>HORÁRIOS DO BUSÃO</h3>
          </a>
        </div>
      </div>
    </div>
  </section>

  <section class="contact-sec " id="contato">
    <div class="container wow fadeIn">
      <h2 class="text-center ">CONTATO
        <br>
        <small>Deixe um recado, responderemos rapidinho ; )</small>
      </h2>
      <br>
      <br>
      <form action="./assets/php/mailer/contato.php" id="formp" method="post">
        <div class="row wow fadeIn" data-wow-delay="0.2">
          <div class="col-md-6  col-md-offset-1">
            <div class="row form-sec">
              <div class="col-md-12">
                <input type="text" class="form-control" placeholder="Nome:" name="nome" required>
              </div>
              <div class="col-md-12">
                <input type="text" class="form-control" placeholder="Email:" name="oemail" required>
              </div>
              <div class="col-md-12">
                <input type="text" class="form-control" placeholder="Fone:" name="telefone">
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="col-md-12">
              <textarea rows="3" class="form-control" placeholder="Olá :D...." name="mensagem" required></textarea>
            </div>
          </div>
          <div class="col-md-12 text-center">
            <input type="submit" id="submit_handle" style="display: none" name="Enviar">
            <a href="javascript:{}" type="submit" onclick="submitform();" id="form-submit" class="btn btn-transparent"
              style="margin-top: 0">Enviar mensagem
              <i class="fa fa-send"></i>
            </a>
          </div>
        </div>
      </form>
    </div>
  </section>

  <section class="contact-sec parceiros-sec" id="parceiros">
    <div class="container wow fadeIn" data-wow-delay="">
      <h2 class="text-center ">PARCEIROS
        <br>
      </h2>
      <div class="row text-center wow slideInUp" data-wow-delay="0.1" style="color:white;">
        <div class="col-xs-12 text-center center">
          <div class="col-xs-3 text-center center">
            <img class="img-responsive big" src="resources/img/Logo Guni - brancaredux.png">
          </div>
          <div class="col-xs-3 text-center center">
            <img class="img-responsive big" src="resources/img/bebidas/corote.png"
              >
          </div>
          <div class="col-xs-3 text-center center">
            <img class="img-responsive big" src="resources/img/bebidas/skol_logo.png"
              >
          </div>
          <div class="col-xs-3 text-center center">
            <img class="img-responsive big" src="resources/img/logo_askov_.png" >
          </div>
        </div>
      </div>
      <!-- <div class="row text-center small wow slideInUp" data-wow-delay="0.2" style="color:white;">
        <div class="col-xs-4 col-md-3 col-md-2">
          <a href="#">
            <img class="img-responsive big" src="resources/img/superbatera.png">
          </a>
        </div>
        <div class="col-xs-4 col-md-3 col-md-2">
          <a href="#">
            <img class="img-responsive big" src="resources/img/superbatera.png">
          </a>
        </div>
        <div class="col-xs-4 col-md-3 col-md-2">
          <a href="#">
            <img class="img-responsive big" src="resources/img/superbatera.png">
          </a>
        </div>
        <div class="col-xs-4 col-md-3 col-md-2">
          <a href="#">
            <img class="img-responsive big" src="resources/img/superbatera.png">
          </a>
        </div>
        <div class="col-xs-4 col-md-3 col-md-2">
          <a href="#">
            <img class="img-responsive big" src="resources/img/superbatera.png">
          </a>
        </div>
        <div class="col-xs-4 col-md-3 col-md-2">
          <a href="#">
            <img class="img-responsive big" src="resources/img/superbatera.png">
          </a>
        </div>
      </div> -->
    </div>
  </section>
  
  ${footer.generatePage()}

  <script type="text/javascript">
    if ($(window).width() <= 800) {
      $('.wow').addClass('wow-removed').removeClass('wow');
    } else {
      $('.wow-removed').addClass('wow').removeClass('wow-removed');
    }

    $('a[href*="#"]')
      // Remove links that don't actually link to anything
      .not('[href="#"]')
      .not('[href="#0"]')
      .click(function (event) {
        // On-page links
        if (
          location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
          location.hostname == this.hostname
        ) {
          // Figure out element to scroll to
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          // Does a scroll target exist?
          if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
              scrollTop: target.offset().top - 100
            }, 1000, function () {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) { // Checking if the target was focused
                return false;
              } else {
                $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              };
            });
          }
        }
      });

    function submitform() {
      $('#submit_handle').click();
    }

    $(document).ready(function () {
      corote =  (Math.floor(Math.random()*(4-1+1)+1));
      refri =  (Math.floor(Math.random()*(3-1+1)+1));
      $('.drawer').drawer();

      $('[data-toggle="tooltip"]').tooltip();
      $('#corote').attr('src', "./resources/img/bebidas/Corote-Sabores-(" + corote +").png");
      $('#bebida').attr('src', "./resources/img/bebidas/bebida " + refri +".png");
      if (window.location.hash == "#sucesso") {
        window.location.hash = "";
        alert("Contato enviado com sucesso!");
      } else if (window.location.hash == "#falha") {
        window.location.hash = "";
        alert("Falha ao enviar!");
      }
    });

    $("#drawerbtn").click(function () {
      $('.drawer').drawer('toggle');
    });

    $("#drawerbtn2").click(function () {
      $('.drawer').drawer('toggle');
    });

    $("#subscribe").click(function (e) {
      e.preventDefault();
      $.ajax({
        url: "https://mailer.ejcomp.com.br/subscribe",
        method: "post",
        data: {
          email: $("#email_newsletter").val(),
          list: "2"
        },
        dataType: "json",
        success: function (data) {
          console.log(data);
        }
      })
    });
  </script>
</body>

</html>`;
    }
}