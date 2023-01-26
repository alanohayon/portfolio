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
  <title>Document</title>
  <link rel="stylesheet" href="pageE.css">
</head>

<body>

<?php
$note=$_SESSION["note"];
$prenom=$_SESSION["prenom"];
$idu=$_SESSION["idu"];
echo"<div class='r'>
$prenom, $idu votre note $note/20 a été enregistrer.<br></div>
<a href='deconnexion.php'>Deconnexion</a>
<a href='Questionnaire.php'>Rejouer</a>
";
$id = mysqli_connect("127.0.0.1:8889","root","root","qcm");
$resul= mysqli_query($id, "insert into resultats values ('$idu','$note',null)");
?>

</body>
</html>
