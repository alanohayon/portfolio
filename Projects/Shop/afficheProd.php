<?php
session_start();
$Id = $_GET[ "Id"]; 

$_SESSION["Id"] = $Id;

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
<h1>Détails Porduit</h1>
<script src="panier.js"></script>

<?php
$a= $_SESSION["a"];
echo"<input type='hidden' id='id' value='$Id' >";
echo"<a href='vitrine.php'><button type='button' class='btn btn-light'><img src='ImageProduit/shop.png' width='30'>
</button>
<a/><a href='panier.php'><button type='button' class='btn btn-light'><img src='ImageProduit/panier.png' width='30'><span class='badge badge-warning'>$a</span>
</button>
<a/>";


$id = mysqli_connect("127.0.0.1:8889","root","root","VenteLigne"); 
$resul = mysqli_query($id, "select * from produit where Id='$Id'"); 
$ligne = mysqli_fetch_assoc($resul);
$imgprod = $ligne["Image"];

$marque = $ligne["Marque"];
$nom = $ligne["Nom"];
$det = $ligne["Detail"];
$prix = $ligne["Prix"];
$stck = $ligne["Stock"];
echo"<div  class = 'detImage' ><m>$marque</m><br><n>$nom</n><div class = 'text' ><br><br>$det</div><br><br><img src='ImageProduit/$imgprod' width = '370' alt='$imgprod'>";
echo"<p>$prix €</p>";
echo"<form action='' method='post'>
<input type='number' value='1' name='qte' min='1' max='$stck'>
<input type='submit' value='Ajouter au panier' name='bout'>
</form> ";
echo"<div>";
if(isset($_POST["bout"])){
  $Id = ($_SESSION["Id"]);
extract($_POST);
$_SESSION["qte"] = $qte;
$a= $_SESSION["a"];

// affichage des produits avec les quantitées
if($a != 0 ){
  for($i = 1; $i<=$a; $i++){ 
    if($_SESSION['panier'][$i]["id"] == $Id){
      echo '<script>existedej();</script>';
      $u=1;
      break;
    }
  }if($u != 1){
      $q == 2;
      $a++;
      $_SESSION['panier'][$a]["id"] = array();
      $_SESSION['panier'][$a]["qte"] = array();
      $_SESSION['panier'][$a]["id"] = $Id;
      $_SESSION['panier'][$a]["qte"] = $qte; 
      echo '<script>ajtProd();</script>';
      $_SESSION['a'] = $a ; 
      }
}else{
    $a=0;

    $a++;
    
    $_SESSION['panier'] = array();
    $_SESSION['panier'][$a]["id"] = array();
    $_SESSION['panier'][$a]["qte"] = array();
    $_SESSION['panier'][$a]["id"] = $Id;
    $_SESSION['panier'][$a]["qte"] = $qte; 
    echo '<script>ajtProd();</script>';
    $_SESSION['a'] = $a ; 

  }

}

?>

</body>
</html>