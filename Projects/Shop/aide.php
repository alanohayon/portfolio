<?php
session_start();
$_SESSION['panier'] = array();
$_SESSION['panier'] = 'a1';
$_SESSION['panier'] = 'a2';
$_SESSION['a1']['qte'] = 1;
$_SESSION['a2']['qte'] = 2;
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="" method="post">
        <input type="number" name="a1"><br><br>
        <input type="number" name="a2"><br><br>
        <input type="submit" value="Envoyer" name="bout">
    </form>
<?php
 var_dump($_SESSION);
if(isset($_POST["bout"])){
   
    foreach($_POST as $key=>$value)
    $_SESSION[$key]["qte"] = $_POST[$key];
   // $_SESSION["a2"]["qte"] = $_POST["a2"];
    var_dump($_SESSION);
}
    
?>
</body>
</html>