<?php
session_start();
// $panier = $_SESSION['panier'];
// $a = $_SESSION['a'] ; 
// for($i = 0; $i<=$a; $i++){ 
//   for($j = 0; $j<=$a; $j++){ 
//        echo$panier[$i][$j];
//   }
// }
session_destroy();
  header("location:vitrine.php");

?>
