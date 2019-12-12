var md = require('markdown-it')();

module.exports = {
    generatePage: function (pageContent) {
        return `


  <footer class="">
  <section class="cfooter">
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-md-4">
          <h4 class="text-center ">SOBRE</h4>
          <p class="">O Carnailha é o maior carnaval universitário do Brasil. Ocorre desde 2013 na cidade de Ilha
            Solteira - SP, contando
            com grandes atrações e 50 horas de open bar em uma festa alucinante!</p>
        </div>
        <div class="col-xs-12 col-md-4">
          <h4 class="text-center">ORGANIZAÇÃO</h4>
          <div class="row">
            <div class="col-xs-6 col-md-6">
              <img class="img-responsive center" src="resources/img/superbatera.png">
            </div>
            <div class="col-xs-6 col-md-6">
              <img class="img-responsive center" src="resources/img/baterainfernomini.png">
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
        </script> - Desenvolvido por <a href="https://ejcomp.com.br" target="_blank">EJComp | Empresa Júnior da
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
<script src="./assets/js/iscroll.min.js" type="text/javascript"></script>
<!-- drawer.js -->
<script src="./assets/js/drawer.min.js" type="text/javascript"></script>
<script>
  new WOW().init();
</script>`}
}