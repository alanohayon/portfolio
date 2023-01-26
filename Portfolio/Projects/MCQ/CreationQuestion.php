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
  <title>Creer une question</title>
  <link rel="stylesheet" href="pageCR.css">
</head>

<body>
  <form action="" method="post">
    <c>Question:</c>
    <b>(ne pas utiliser les symboles ' et ")</b>
    <input type="text" name="question" placeholder="Question :"><br>
    <h1>Bonne réponse:</h1>
   <input type="text" name="rep1" placeholder="Reponse :"required><br>
   <h1>Mauvaises réponses:</h1>
   <input type="text" name="rep01" placeholder="Reponse :"required><br>
   <input type="text" name="rep02" placeholder="Reponse :"required><br>
    <input type="text" name="rep03" placeholder="Reponse :"required><br>
    <h1>Niveau de la questione:</h1>
    <input type="number" name="niv" placeholder="Niveau :"min=0 required><br>
    <input type="submit" value="Enregistrer" name="bout">
    <a href="deconnexion.php"> Deconnexion</a>
  </form>

<?php
$id = mysqli_connect("127.0.0.1:8889","root","root","qcm");
    if(isset($_POST["bout"])){
      $question=$_POST["question"];
      $rep1=$_POST["rep1"];
      $rep01=$_POST["rep01"];
      $rep02=$_POST["rep02"];
      $rep03=$_POST["rep03"];
      $niv=$_POST["niv"];

$resul= mysqli_query($id, "insert into questions values (NULL, '$question', '$niv')");
$resul= mysqli_query($id, "select * from questions where libelleQ='$question'");
$ligne1= mysqli_fetch_assoc($resul);
$idq =$ligne1["idq"];
$resul= mysqli_query($id, "insert into reponses values (NULL, '$idq', '$rep1', '1')");
$resul= mysqli_query($id, "insert into reponses values ( NULL, '$idq', '$rep01', '0')");
$resul= mysqli_query($id, "insert into reponses values (NULL, '$idq', '$rep02', '0')");
$resul= mysqli_query($id, "insert into reponses values (NULL, '$idq', '$rep03', '0')");
}
?>
</body>
</html>