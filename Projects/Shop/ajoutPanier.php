<?php
session_start();
$Id = ($_SESSION["Id"]);
extract($_POST);
$_SESSION["qte"] = $qte;
$a= $_SESSION["a"];
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
  <title>Document</title>
  <link rel="stylesheet" href="panier.css">
</head>
<body>
<h1>Liste produits</h1>
<script src="panier.js"></script>

<?php

// affichage des produits avec les quantitées
if($a != 0 ){
  for($i = 1; $i<=$a; $i++){ 
    if($_SESSION['panier'][$i]["id"] == $Id){
      echo '<script>existedej();</script>';
      $u=1;
      break;
    }
  }if($u != 1){
      $a++;
      $_SESSION['panier'][$a]["id"] = array();
      $_SESSION['panier'][$a]["qte"] = array();
      $_SESSION['panier'][$a]["id"] = $Id;
      $_SESSION['panier'][$a]["qte"] = $qte; 
      echo '<script>ajtProd();</script>';

      }
}else{
    $a=0;
    // echo$i;
    $a++;
    // echo$a;
    $_SESSION['panier'] = array();
    $_SESSION['panier'][$a]["id"] = array();
    $_SESSION['panier'][$a]["qte"] = array();
    $_SESSION['panier'][$a]["id"] = $Id;
    $_SESSION['panier'][$a]["qte"] = $qte; 
    echo '<script>ajtProd();</script>';

  }
  $_SESSION['a'] = $a ; 


  header("location:afficheProd.php?Id=$Id");


// var_dump($_SESSION);
?>

</body>
</html>