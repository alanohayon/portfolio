<?php
session_start()

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
<h1>Drop Shipping</h1>
  <?php
$a= $_SESSION["a"];
echo"<a href='panier.php'><button type='button' class='btn btn-light'><img src='ImageProduit/panier.png' width='30'><span class='badge badge-warning'>$a</span>
</button>
<a/>";
?>
</head>
<body>
<div class="row">

<?php
$id = mysqli_connect("127.0.0.1:8889","root","root","VenteLigne"); 
$resul = mysqli_query($id, "select * from produit where Stock>0"); 
while($ligne = mysqli_fetch_assoc($resul)){
  $imgprod = $ligne["Image"];
  $nom = $ligne["Nom"];
  $prix = $ligne["Prix"];
  echo"<div class='image >";
  echo"<a href='afficheProd.php?Id=". $ligne["Id"]."'>";
  echo"<a href='afficheProd.php?Id=". $ligne["Id"]."'><img src='ImageProduit/$imgprod' width = '215' alt='$imgprod'><br>$nom</a><br><br>Prix : $prix €";
  echo"</div>";

}
?> 

</div>



</body>
</html>