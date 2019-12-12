var md = require('markdown-it')();


module.exports = {
    generatePage: function (pageContent) {
        return `<head>
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
                    <link rel="stylesheet" type="text/css" href="./assets/css/carna.css">
                    <link rel="stylesheet" type="text/css" href="./assets/css/animate.css">
                    <link rel="stylesheet" type="text/css" href="./assets/css/drawer.min.css">
                </head>`
    }
}