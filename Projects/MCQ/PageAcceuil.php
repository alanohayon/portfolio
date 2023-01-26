<?php
session_start()
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Page d'acceuil</title>
  <link rel="stylesheet" href="pageA.css">
</head>

<body>
<h1> Se connecter</h1>

<div class="f">
  <form action="" method="post">
    <input type="email" name="mail" placeholder="Mail :"required><br><br>  
    <input type="password" name="mdp" placeholder="Mot de passe :" required><br><br>
    <input type="submit" value="Connexion" name="bout" >
  </form>
  <a href="inscription.php">S'inscrire</a>
</div>


<?php                 
    $mail = $_POST["mail"];
    $mdp = $_POST["mdp"];
    $id = mysqli_connect("127.0.0.1:8889","root","root","qcm");
    if(isset($_POST["bout"])){
    $req = "select * from user where mail='$mail' and mdp='$mdp' " ;
    $resultat = mysqli_query($id, $req);
    $recu = mysqli_fetch_assoc($resultat); //recuperation de la requet
    $mailb =$recu["mail"];
    $mdpb =$recu["mdp"];
    $idu =$recu["idu"];
    $niv =$recu["niveau"];
    $prenom =$recu["prenom"];
      if($mail== $mailb and $mdp==$mdpb and $niv==2){ 
        $_SESSION["idu"] = $idu;
        $_SESSION["prenom"] = $prenom;
          header("location:PageAdmin.php");
        }
    if($mail== $mailb and $mdp==$mdpb and $niv==1) {
      $_SESSION["idu"] = $idu;
      $_SESSION["prenom"] = $prenom;
      header("location:Questionnaire.php");
        }else
         echo"Mail ou mot de passe incorrect !";
  }

?>
</body>
</html>