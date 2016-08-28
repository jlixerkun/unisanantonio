<!doctype html>
<?php
$page = $_GET['page'];
?>
<html class="no-js" lang="">


<head>
  <meta charset="utf-8">
  <meta http-equiv="x-ua-compatible" content="ie=edge">
  <title>Universidad de San Antonio</title>
  <meta name="description" content="">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="favicon" href="img/favicon.ico">
  <link rel="stylesheet" href="components/css/font-awesome.min.css" />
  <link rel="stylesheet" href="components/css/bulma.css" />
  <link rel="stylesheet" href="components/css/style.css" />
  <script src="components/js/all.js"></script>
</head>

<body>
  <header class="main-header">
    <div class="container">
      <nav class="nav level">
        <div class="nav-left">
          <a class="nav-item is-brand" href="http://localhost/unisanantonio/index.php?page=home">
            <img src="img/logoUSA.png" alt="Universidad de San Antonio">
          </a>
        </div>
        <span class="nav-toggle">
          <span></span>
        <span></span>
        <span></span>
        </span>
        <div class="nav-right nav-menu level-item">
          <a class="nav-item <?php if($page=="programas"){echo 'is-active';}?> " href="programas.php?page=programas">Programas</a>
          <a class="nav-item" href="#">Noticias</a>
          <a class="nav-item" href="#">Galerías</a>
          <a class="nav-item" href="#">Inscripciones</a>
          <a class="nav-item" href="#">Contacto</a>
          <span class="nav-item">
            <a class="button is-primary" href="login.php">
              <span class="icon">
                <i class="fa fa-user"></i>
              </span>
              <span>Iniciar sesión</span>
            </a>
          </span>
        </div>
      </nav>
    </div>
  </header>
