var tabMot =  ["voiture","enveloppe","scene",	"encadrement","polution","parapluie","armoire","salon","television","foulard","maison","famille","ordinateur","pharmacie","pendu","piscine","mer","alarme","animal","montre","horloge","hopital", "chaise", "bureau", "fumer","peinture","tableau","virus","prise","incendie","pompier","elephant","helicoptere"];

var tabAlphabet =  ["a","z","e","r","t","y","u","i","o","p","m","l","k","j","h","g","f","d","s","q","w","x", "c", "v", "b","n"];

var tabLettre = [];
let longLettre ;
var i=0;
let chifAl =  Math.floor(Math.random() * 33);
let mots = tabMot [chifAl];
let mot = mots.split('');
let longMot=mot.length; 
let motAsterix= "*".repeat(longMot);
let tabMotAsterix = motAsterix.split('');
let tabMotAsterixAff = tabMotAsterix.join('');
let clic=0;


function choisirMot(){
  chifAl =  Math.floor(Math.random() * 33);
  mot = tabMot [chifAl];
  longMot = mot.length; 
  motAsterix = "*".repeat(longMot);
  tabMotAsterix = motAsterix.split('');
  tabMotAsterixAff = tabMotAsterix.join('');
  motCache=document.getElementById('motCacheAff');
  motCache.innerHTML = tabMotAsterixAff;
  restart = document.getElementById('start');
  restart.innerHTML = "Recommencer";
  tabLettre.splice(0, tabLettre.length);
  longLettre = 0;
  restart = document.getElementById('lettreTeste');
  restart.innerHTML = "";
  i=0;
  var canvas = document.getElementById('can');
  var ctx = canvas.getContext('2d');
  ctx.clearRect(10, 10, 300, 300);
  clic=1;
}

function testLettreDansLeMot(){
  lettre = document.getElementById('lettre').value;
  lettre = lettre.toLowerCase();

  if(clic == 1)
  {   
      if(tabAlphabet.includes(lettre) == true)
      { 
          if(mot.includes(lettre) == true)
          {
             remplacerLettre();
          }
              if(mot.includes(lettre) == false)
              {
                 mauvaiseLettre();
              }
      }else
        {
          alert("Veuillez saisir une lettre valide !!")
        }
  }else
   {
     alert("Veuillez cliquer sur Commencer");
   }

document.getElementById('lettre').value = "";
document.getElementById("lettre").focus();

}


function remplacerLettre(){
  lettre = document.getElementById('lettre').value;
  lettre = lettre.toLowerCase();
  f =1;

  for(j=0; j<longMot; j++)
  {
        if(lettre == tabMotAsterixAff[j])
        {
           alert("lettre déjà testé");
           f = 0;
         }break;    
  }

  if(f != 0)
  { 
    for(j=0; j<longMot; j++)
    {
           if(lettre == mot.charAt(j))
           {  
              tabMotAsterix [j] = lettre;
           }
    }

    tabMotAsterixAff = tabMotAsterix.join('');
    motcache = document.getElementById('motCacheAff');
    motcache.innerHTML = tabMotAsterixAff;

    if(tabMotAsterixAff == mot)
    {
      alert('Bien joué, le mot était '+tabMotAsterix.join(""));
      if (confirm("Si vous désirez rejouer cliqué sur ok.")) 
      {
        choisirMot();
      }
      else {
        alert("Vous pourrez toujours retenter ta chance en cliquant sur Recommencer !")
      }
    }
  }

}


function mauvaiseLettre(){
  lettre = document.getElementById('lettre').value;
  lettre = lettre.toLowerCase();
  f =1;

  for(j=0; j<longMot; j++)
  {
        if(lettre == tabLettre[j])
        {
           alert("lettre déjà testé");
            f = 0;
        }
  }

  if(f != 0)
  { 
   dessinerPendu();
  }
  
}


var canvas = document.getElementById('can');
var ctx = canvas.getContext('2d');
function dessinerPendu(){
  alert(lettre + ' ne fait pas partie du mot ' + mot)
  tabLettre [i] = lettre;
  i++;  
  lettreTest = document.getElementById('lettreTeste');
  lettreTest.innerHTML = tabLettre;
  longLettre = tabLettre.length; 

  if(longLettre == 1)
  {
    alert("nombre d'erreur : " + longLettre );
    //ligne de bas en haut
    ctx.beginPath();
    ctx.moveTo(50, 25);
    ctx.lineTo(50, 125);
    ctx.moveTo(50, 125);
    ctx.lineTo(125, 125);
    ctx.stroke();

  }

  if(longLettre == 2)
  {
    alert("nombre d'erreur : " + longLettre );
    //ligne de haut a droite
    ctx.beginPath();
    ctx.moveTo(50, 25);
    ctx.lineTo(110, 25);
    ctx.stroke();

  }  

  if(longLettre == 3)
  {
    alert("nombre d'erreur : " + longLettre );
    //ligne corde
    ctx.beginPath();
    ctx.moveTo(110, 25);
    ctx.lineTo(110,50);
    ctx.stroke();

  }

  if(longLettre == 4)
  {
    alert("nombre d'erreur : " + longLettre );
      //tete
    ctx.beginPath();
    ctx.arc(110, 60, 10, 0, Math.PI * 2, true);  // Cercle extérieur
    ctx.moveTo(114,64);
    ctx.arc(110, 65, 4, 0, Math.PI, true);  // Bouche (sens horaire)
    ctx.moveTo(107, 57);
    ctx.arc(106, 57, 1.5, 0, Math.PI * 2, true);  // Oeil gauche
    ctx.moveTo(115, 57);
    ctx.arc(114, 57, 1.5, 0, Math.PI * 2, true);  // Oeil droite
    ctx.moveTo(110,70); //la ligne commence (x;y)
    ctx.lineTo(110,95);//la ligne fini (x;y)
    ctx.stroke();

  }

  if(longLettre == 5)
  {
    alert("nombre d'erreur : " + longLettre );
    //bras droit
    ctx.beginPath();
    ctx.moveTo(110,70);
    ctx.lineTo(120,85);
    ctx.stroke();

  }
  if(longLettre == 6)
  {
    alert("nombre d'erreur : " + longLettre );
    //bras gauche
    ctx.beginPath();
    ctx.moveTo(110,70);
    ctx.lineTo(99,85.5);
    ctx.stroke();

  }

  if(longLettre == 7)
  {
    alert("nombre d'erreur : " + longLettre );
    alert("ATTENTION PLUS QU'UNE ERREUR ET VOUS AVEZ PERDU !!!");
    //jambe gauche
    ctx.beginPath();
    ctx.moveTo(110,95);
    ctx.lineTo(99,105);
    ctx.stroke();

  } 

   if(longLettre == 8)
  {
alert("nombre d'erreur : " + longLettre );
    //bras droite
    ctx.beginPath();
    ctx.moveTo(110,95);
    ctx.lineTo(120,105);
    ctx.stroke();
    alert("vous avez perdu !!")
    choisirMot();

  }

}