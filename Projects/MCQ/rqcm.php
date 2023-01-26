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
  <title>Page de resultat</title>
  <link rel="stylesheet" href="pageR.css">
</head>
<body>
<form action="EnregistrementResultat.php" method="post"> <!-- resultat.php -->
<?php
if(isset($_POST["bout"])){ 
/* print_r($_POST); */
$note=0;
$i=1 ;
    $id = mysqli_connect("127.0.0.1:8889","root","root","qcm");
foreach($_POST as $idq=>$idr){ 
if($idq!="bout"){ 
echo "$i)";
$resul3 = mysqli_query($id, "select * from reponses where idr='$idr' and idq='$idq'  and verite=1");
$ligne3 = mysqli_fetch_assoc($resul3);  
$resul4 = mysqli_query($id, "select * from reponses where idr='$idr' and idq='$idq' and verite=0");
$ligne4 = mysqli_fetch_assoc($resul4);  
$reponse= $ligne3["idr"];//reponse vrai de l'idq
$verite= $ligne4["verite"];

if($reponse==$idr){ 
$note=$note+2;
echo"&nbsp;Bonne reponse<br><hr>";//iil enregistre dans idq la reponse saisie par lutilisateur donc /* idq=repond idq=idr */
 }
elseif($verite==0){   
  $resul5 = mysqli_query($id, "select distinct libelleQ,libeller 
  from reponses,questions
  where reponses.idq ='$idq'and questions.idq='$idq' 
  and verite=1");
  $ligne5 = mysqli_fetch_assoc($resul5);  
  $quest = $ligne5["libelleQ"];
  $verite = $ligne5["libeller"];
  echo"&nbsp;MAUVAISE REPONSE A LA QUESTION:<br>$quest<br><br>LA BONNE REPONSE ETAIT:<br>$verite<hr>";
      }
    }$i++;
}
  }
  echo" note $note/20";
  $_SESSION["note"] = $note;

  ?>
  <input type="submit" name="bouton"value="Enregistrer" >
  <a href="deconnexion.php"> Deconnexion</a>
</form>

</body>
</html>