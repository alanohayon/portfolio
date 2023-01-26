<?php
session_start();
if(!isset($_SESSION["prenom"]))
{
  header("location:PageAcceuil.php");
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Questionnaire</title>
  <link rel="stylesheet" href="pageQ.css">

</head>
<body>
  <h1>Questionnaire</h1>
  <form action="rqcm.php" method="post"> 
<?php
$id = mysqli_connect("127.0.0.1:8889","root","root","qcm"); 
$resul = mysqli_query($id, "select* from questions order by rand() limit 10");
$i=1;
while($ligne = mysqli_fetch_assoc($resul)){
  $idq= $ligne["idq"];
  echo"$i)";
  echo"".$ligne["libelleQ"]."<br><br>";
  $resul2= mysqli_query($id, "select * from reponses where $idq=idq");
  while($ligne2 = mysqli_fetch_assoc($resul2)){
  echo"<input type='radio' name='$idq' value='".$ligne2['idr']."' required> ".$ligne2['libeller']."<br>";
  }echo"<br><hr>";
   $i++;
}
?>  
  <input type="submit" name="bout" value="envoyer">
  <a href="deconnexion.php"> Deconnexion</a>
  </form>
</body>
</html>