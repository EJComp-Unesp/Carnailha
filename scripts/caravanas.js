var md = require('markdown-it')();

module.exports = {
    generatePage: function (pageContent) {
        return `
<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1.0" />
    <meta name="description" content="Carnilha 2019">
    <meta name="author" content="Bloco Superbateria & EJComp">
    <meta name="theme-color" content="#ff7700" />
    <link rel="shortcut icon" href="./resources/img/logoredux.png" />

    <title>Carnailha 2019</title>

    <!--Bootstrap core CSS-->
    <link href="./assets/css/bootstrap.min.css" rel="stylesheet">

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
  <![endif]-->

  <!-- Custom styles for this template -->
  <link rel="stylesheet" type="text/css" href="./assets/css/custom.css">
  <link rel="stylesheet" type="text/css" href="./assets/css/hover-effect.css">
  <link rel="stylesheet" type="text/css" href="./assets/css/loaders.css">
  <link rel="stylesheet" type="text/css" href="./assets/css/all.css">
  <link rel="stylesheet" type="text/css" href="./assets/css/swiper.min.css">
  <link rel="stylesheet" type="text/css" href="./assets/css/carna-outer.css">
  <link rel="stylesheet" type="text/css" href="./assets/css/animate.css">
  <link rel="stylesheet" type="text/css" href="./assets/css/drawer.min.css">
</head>

<body class="drawer drawer--right">
    <div class="wrapper">
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
                    <!-- <li><a href="#contato">CARNAILHA APOIA</a></li> -->
                    <!-- <li><a href="#contato">GALERIA</a></li> -->
                </ul>
            </div>
        </nav>

        <section class="cover" id="home">
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
                        <a href="./index.html">
                            <img class="navbar-brand nav-brand" src="resources/img/logoredux.png">
                        </a>
                    </div>
                    <div class="navbar-collapse collapse" id="navbar">
                        <ul class="nav navbar-nav navbar-right">
                            <li class="hidden-sm">
                                <a href="./index.html">INÍCIO</a>
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
                            <li>
                                <a href="https://www.blacktag.com.br/eventos/2457/carnailha-2019" target="_blank"
                                class="lineout">ADQUIRA SEU INGRESSO</a>
                            </li>
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
                    <div class="container animated  ">
                        <div class="row">
                            <div class="col-md-8 col-sm-12 ">
                                <div class="text-block">
                                    <h1 class="">O MAIOR CARNAVAL UNIVERSITÁRIO DO BRASIL!</h1>
                                    <h4 class="">CARNAILHA 2019 - / 01 / 02 / 03 / 04 / 05 / MARÇO</h4>
                                </div>
                            </div>
                            <div class="col-md-4 col-sm-12">
                                <div class="img-block">
                                    <img class="img-responsive" src="./resources/img/logo.png">
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>

            <section class="services-sec caravanasclass">
                <div class="container">
                    <div>
                        <h1 class="text-center">CONFIRA AS CARAVANAS DISPONÍVEIS</h1>
                    <!--<input type="text" class="form-control" placeholder="FILTAR POR ESTADO, CIDADE, ID" name="nome"
                        required>-->
                        <ul class="drop-list">
                        ${
            pageContent.hasOwnProperty('caravans')
                ? pageContent.caravans.length
                    ? pageContent.caravans.map(caravan => `<div>
                                                          <h2 class="with-line">${caravan.state}
                                                                              <span></span>
                                                          </h2>
                                                          ${
                        caravan.cities.map(city => `<li>
                                                                                          <h2>${city.city}<br><small><a href="" target="_blank">Evento da Caravana</a></small></h2>
                                                                                       </li>
                                                                                       <hr>
                                                                                       ${
                            city.promoters.map(promoter => `<div class="row">
                                                                                                                          <div class="col-md-12 card">
                                                                                                                              <div class="col-md-12 card-body">
                                                                                                                                  <div class="col-md-12 text-center  right-body">
                                                                                                                                      <div class="col-md-4">
                                                                                                                                          <img class="img-responsive" src="${promoter.img}">
                                                                                                                                          <h3 class="text-center">${promoter.name}</h3>
                                                                                                                                      </div>
                                                                                                                                      <div class="col-md-8">
                                                                                                                                          <div class="col-md-4">
                                                                                                                                              <i class="fab fa-whatsapp fa-3x"></i>
                                                                                                                                              <br>${promoter.wpp}
                                                                                                                                          </div>
                                                                                                                                          <div class="col-md-4">
                                                                                                                                              <i class="fas fa-envelope fa-3x"></i>
                                                                                                                                              <br>
                                                                                                                                              <p class="text-center">${promoter.email}</p>
                                                                                                                                          </div>
                                                                                                                                          <div class="col-md-4">
                                                                                                                                              <a href="${promoter.face_link}" target="_blank">
                                                                                                                                                  <i class="fab fa-facebook-square fa-3x"></i>
                                                                                                                                                  <br>
                                                                                                                                                  <p class="text-center">${promoter.face_link}</p>
                                                                                                                                              </a>
                                                                                                                                          </div>
                                                                                                                                      </div>
                                                                                                                                  </div>
                                                                                                                                  <div></div>
                                                                                                                              </div>
                                                                                                                          </div>
                                                                                                                      </div>`)
                            }`)
                        }</div>`)
                    : ``
                : ``
            }
                        </ul>
                    </div>
                </div>
            </section>

            <footer class="">
                <section class="cfooter">
                    <div class="container">
                        <div class="row">
                            <div class="col-xs-12 col-md-4">
                                <h4 class="text-center ">SOBRE</h4>
                                <p class="">O Carnailha é o maior carnaval universitário do Brasil. Ocorre desde 2013 na
                                    cidade de Ilha Solteira
                                - SP, contando com grandes atrações e 50 horas de open bar em uma festa alucinante!</p>
                            </div>
                            <div class="col-xs-12 col-md-4">
                                <h4 class="text-center">ORGANIZAÇÃO</h4>
                                <div class="row">
                                    <div class="col-xs-6 col-md-6">
                                        <img class="img-responsive center" src="resources/img/superbatera.png">
                                    </div>
                                    <div class="col-xs-6 col-md-6">
                                        <img class="img-responsive center" src="resources/img/baterainferno.png">
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-md-4 ">
                                <h4 class="text-center">MÍDIA</h4>
                                <div class="row row-img">
                                    <div class="col-xs-6 col-md-6">
                                        <a href="https://www.facebook.com/events/885384528315484/" target="_blank">
                                            <i class="fab fa-facebook-square fa-4x"></i>
                                        </a>
                                    </div>
                                    <div class="col-xs-6 col-md-6">
                                        <a href="https://www.instagram.com/carnailha/" target="_blank">
                                            <i class="fab fa-instagram fa-4x"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div class="container low-footer">
                    <div class="row">
                        <div class="col-xs-12 col-sm-8 col-md-8">&copy;
                            <script type="text/javascript">
                                document.write(new Date().getFullYear());
                            </script> - Desenvolvido por <a href="https://ejcomp.com.br" target="_blank">EJComp | Empresa
                                Júnior da
                            Computação.</a>
                        </div>
                        <div class="col-xs-6 col-sm-4  col-md-4 pull-right text-right">We
                            <i class="fa fa-heart"></i> Carnailha</div>
                        </div>
                    </div>
                </footer>


                <script src="./assets/js/jquery.min.js" type="text/javascript"></script>
                <script src="./assets/js/bootstrap.min.js" type="text/javascript"></script>
                <script src="./assets/js/core.js" type="text/javascript"></script>
                <script src="./assets/js/numscroller.js" type="text/javascript"></script>
                <script src="./assets/js/jquery.waypoints.min.js" type="text/javascript"></script>
                <script src="./assets/js/swiper.min.js" type="text/javascript"></script>
                <script src="./assets/js/carnacounter.js" type="text/javascript"></script>
                <script src="./assets/js/wow.min.js" type="text/javascript"></script>
                <script src="./assets/js/jquery.min.js" type="text/javascript"></script>
                <script src="./assets/js/iscroll.min.js" type="text/javascript"></script>
                <!-- drawer.js -->
                <script src="./assets/js/drawer.min.js" type="text/javascript"></script>
                <script>
                    new WOW().init();
                </script>
                <script type="text/javascript">
                    function submitform() {
                        $('#submit_handle').click();
                    }

                    $(document).ready(function () {
                        $('.drawer').drawer();
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
            </div>
        </body>

        </html>`;
    }
}