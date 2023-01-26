<?php
session_start();
$joueur = $_SESSION["joueur"];
echo"<br>";

?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="jeu.css">
  <title>Morpion</title>
</head>
<body>
  <?php
  
  if($joueur  == 2){
    echo"Joueur $joueur à toi de jouer :";
  }else{
    $joueur = 1;
    echo"Joueur $joueur à toi de jouer :";
  }
  
    if(isset($_POST["boot"]) and $error != 1){
      extract($_POST);
        if($_SESSION['jeu'][$boot] != 1 and $_SESSION['jeu'][$boot] != 2 ){
          if($joueur  == 2){
            $_SESSION['jeu'][$boot] = array();
            $_SESSION['jeu'][$boot] = $joueur;
            $joueur = 1;
            $_SESSION["joueur"] = $joueur;
            header("location:jeu.php");
          }else{
            $joueur=1;
            $_SESSION['jeu'][$boot] = array();
            $_SESSION['jeu'][$boot] = $joueur;
            $joueur=2;
            $_SESSION["joueur"] = $joueur;
            header("location:jeu.php");
          }
        }else{
          echo '<script type="text/JavaScript"> 
     alert("Veuillez choisir une case valide !");
     </script>';
        }
      }else{
        if($erreur  == 1){
          echo"Veuillez jouer !! ";
        }
      }

  ?>

<form action='' method='post' >
  <div class="care">
    <?php
    for($i=0;$i<9;$i++){
      if($_SESSION['jeu'][$i] == 2 ){  
        echo"<button type=submit>
        <img src=circle.png>
        </button>";
      }if ($_SESSION['jeu'][$i] == 1) {
        echo"<button type=submit>
        <img src=cross.png>
        </button>";
      } 
      else {
        if($_SESSION['jeu'][$i] == 1 OR $_SESSION['jeu'][$i] == 2  ){      
        }else{
          echo"<button type='submit' name='boot' value='$i'></button>";
        }
      }
    }
    $tableauVerif = [[1,0,0,0,1,0,0,0,1],[1,1,1,0,0,0,0,0,0],[1,0,0,1,0,0,1,0,0],[0,1,0,0,1,0,0,1,0],[0,0,1,0,0,1,0,0,1],[0,0,1,0,1,0,1,0,0],[0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,1,1,1]];
    $tableauVerif2 = [[2,0,0,0,2,0,0,0,2],[2,2,2,0,0,0,0,0,0],[2,0,0,2,0,0,2,0,0],[0,2,0,0,2,0,0,2,0],[0,0,2,0,0,2,0,0,2],[0,0,2,0,2,0,2,0,0],[0,0,0,2,2,2,0,0,0],[0,0,0,0,0,0,2,2,2]];
  
  for($j=0;$j<8;$j++){
    $point1= 0;
    $point2= 0;
    for($i=0;$i<9;$i++){
      if($_SESSION['jeu'][$i] == 1 and $tableauVerif[$j][$i] == 1){
        $point1 += 1;
        if($point1 == 3){
        $_SESSION["point1"] = $point1 ;
        }
      }elseif($_SESSION['jeu'][$i] == 2 and  $tableauVerif2[$j][$i] == 2){
        $point2 += 1;
        if($point2 == 3){
        $_SESSION["point2"] = $point2 ;
        }
      }
    }
  }

  $point1 = $_SESSION["point1"] ;
  $point2 = $_SESSION["point2"] ;

  if($point1 == 3 or $point2 == 3){
    if($joueur ==2 ){
      echo '<script type="text/JavaScript"> 
      alert("Joueur 1 à gagné !!");
      document.location.href="delete_session.php"; 
      </script>';
    }else{
      echo '<script type="text/JavaScript"> 
      alert("Joueur 2 à gagné !!");
      document.location.href="delete_session.php"; 
      </script>';
    }
  }

  $egalite = 0;

  for($i=0;$i<9;$i++){
    if(($_SESSION['jeu'][$i] == 1 or $_SESSION['jeu'][$i] == 2)){
      $egalite++;
      if($egalite == 9){
        echo '<script type="text/JavaScript"> 
        alert("EGALITE!!");
        document.location.href="delete_session.php"; 
        </script>';
      }
    }
  }


  ?>

  </div>
  </form>
  <a href='delete_session.php'>Recommencer</a>
</body>
</html>