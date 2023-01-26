<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Inscription</title>
  <link rel="stylesheet" href="pageI.css">

</head>
<body>
 <h1> S'inscrire</h1>
<form action="" method="post">  
  <input type="text" name="nom" placeholder="Nom :"required><br>
  <input type="text" name="prenom" placeholder="Prènom :"required><br>
  <input type="email" name="mail" placeholder="Mail :"required><br>
  <input type="password" name="mdp" placeholder="Mot de passe :"required><br>
  <input type="password" name="vmdp" placeholder="Verifier mot de passe :" required><hr>
  <input type="submit" value="S'inscrire" name="bout">
</form>

  <?php
  $id = mysqli_connect("127.0.0.1:8889","root","root","qcm"); 
  if($_POST["bout"]){ 
      $mdp=$_POST["mdp"];
      $vmdp=$_POST["vmdp"];
  if($mdp== $vmdp){
  if(isset($_POST["bout"])){
    $nom=$_POST["nom"];
    $prenom=$_POST["prenom"];
    $mail=$_POST["mail"];
    $mdp=$_POST["mdp"];
    
    $resul = mysqli_query($id, "insert into user values (NULL, '$nom', '$prenom', '$mail','$mdp', '1')" );

 header("location:Questionnaire.php");

  }
}else{
  echo"Verification du mot de passe incorrecte";
  }
}
?>
</body>
</html>