<?php
session_start();

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
<h1>Panier</h1>
<script src="panier.js"></script>

<?php
echo"<a href='vitrine.php'><button type='button' class='btn btn-light'><img src='ImageProduit/shop.png' width='30'>
</button>
<a/>";

// affichage des produits avec les quantitées
$z = -1;
for($i = 1; $i<=$a; $i++){ 
 $Id=$_SESSION['panier'][$i]["id"];
 $qte=$_SESSION['panier'][$i]["qte"];


 $id = mysqli_connect("127.0.0.1:8889","root","root","VenteLigne"); 
 $resul = mysqli_query($id, "select * from produit where Id='$Id'"); 
 $ligne = mysqli_fetch_assoc($resul);
 $imgprod = $ligne["Image"];
 $stck = $ligne["Stock"];
 $nom = $ligne["Nom"];
 $prx = $ligne["Prix"];

 echo"<div class='imgPanier'>";
 echo"<a1><a href='afficheProd.php?Id=". $ligne["Id"]."'>$nom</a1><br><br>";

 echo"<img src='ImageProduit/$imgprod' width = '160' alt='$imgprod'></a>";
 echo"<a3> Prix à l'unité : $prx €</a3>";
 echo"<a2>Quantite : <input type='number' value='$qte' id='$i' name='qte' min='1' max='$stck' onclick='somme()''></a2>
";
echo"<a0><form action='' method='post' ><input type='submit' value='Supprimer' name='del' ></form></a0>";
 echo"</div>";
echo"<input type='hidden' id='$z' value='$prx' >";
echo"<input type='hidden' id='a' value='$a' >";

$z--;
// if(isset($_POST["del"])){
//   $ch = 1;
//   $i1= $i;
// }
}

echo"<div class='somme'>";
echo"<a href='delete.php'><button type='button' class='btn btn-light'>Effacer tout mon panier</button></a><z id='S'></z>";
echo"<script>somme();</script>";

// if( $ch == 1){
//   echo$i;
  // $_SESSION['panier'][$i1]["id"] = 0;
  // $_SESSION['panier'][$i1]["qte"] = 0;
  // echo '<script>suppProd();</script>';
  // $a = 2;
// }
// echo"<br>$a<br>";
// var_dump($_SESSION);

echo"</div>";

?>


</body>
</html>