<!doctype html>
<html>

<head>
  <meta charset="UTF-8">
  <title>Inicie sesión</title>
  <meta name="description" content="">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="favicon" href="img/favicon.ico">
  <link rel="stylesheet" href="components/css/font-awesome.min.css" />
  <link rel="stylesheet" href="components/css/bulma.css" />
  <link rel="stylesheet" href="components/css/style.css" />
</head>

<body>
<div class="login-body">
  <div class="container centrar-vertical">
    <div class="login-container">
      <a href="http://localhost/unisanantonio">
        <img src="img/logoUSA-02.png" alt="Universidad de San Antonio">
      </a>
      <form method="post" action="index.php">
        <label class="label">Usuario</label>
        <p class="control">
          <input class="input" type="text" name="usuario" placeholder="usuario">
        </p>
        <label class="label">Contraseña</label>
        <p class="control">
          <input type="password" name="password" class="input" placeholder="contraseña">
        </p>
        <p class="control">
          <label class="checkbox">
            <input type="checkbox">
            Recordarme en este equipo
          </label>
        </p>
        <p class="control">
          <a class="button is-primary" onclick="form.submit();">Iniciar sesión</a>
          <a class="button is-link" href="http://localhost/unisanantonio">Cancelar</a>
        </p>
        <p class="control">
          <a href="#">Olvidé mi contraseña</a>
        </p>
      </form>
    </div>
  </div>
</div>



</body>

</html>
