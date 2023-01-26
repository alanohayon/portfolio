function existedej(){
  Id = document.getElementById('id').value;  
  alert("Vous avez deja ajouté se produit dans votre panier !!");
  document.location.href='http:afficheProd.php?Id='+Id;

}

function ajtProd(){
  alert("Le produit a été ajouté !");
  Id = document.getElementById('id').value;  
  document.location.href='http:afficheProd.php?Id='+Id;

}

// function suppProd(){
//   alert("supp");
//   document.location.href='http:panier.php';

// }

function somme(){
  a = document.getElementById("a").value;
  s = 0;
  j = -1;

  for(i = 1; i<=a; i++){
      prx = document.getElementById(j).value;  
      qte = document.getElementById(i).value;  
      s = s + (prx*qte);
      j--;

  }


  if(a ==1 ){
    document.getElementById("S").innerHTML = "Sous-total ("+a+" article): "+s+" €";
  }else{
    document.getElementById("S").innerHTML = "Sous-total ("+a+" articles ): "+s+" €";
  }


}
  