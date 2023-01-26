<?php
session_start();
if(!isset($_SESSION["prenom"]))
{
  header("location:PageAcceuil.php");
  echo$_SESSION["prenom"];
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Page Admin</title>
  <link rel="stylesheet" href="pageAM.css">

</head>

<body>
  <h1>Bienvenue 
    <?php echo$_SESSION["prenom"];?>
  </h1>
  <div class="b">
  <a href="Questionnaire.php">Questionnaire</a><br><br>
  <a href="CreationQuestion.php">Créer une question</a><br><br>
  <a href="deconnexion.php">Deconnexion</a>
</div>
</body>
</html>