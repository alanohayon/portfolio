//on selectionne la div 'box-container'
const container = document.querySelectorAll(".box-container");
//on retient le nombre de div='box' dans la variable boxes, qui est une liste
var boxes = document.querySelectorAll('.box');
//initialise le timer à 0
let time = 60;
//variable qui va ensuite servire à redemarer le timer
let interval;

//Fonction qui diminue, enleve 1 toutes les 1 seconde
function timer() {
    console.log(time)
    time--;
    //si le temps est depassé, donc egale à 0
    if( time == 0 ){
        alert("T'es vraiment nul, t'as depassé le temps sale naze !")
        window.location.href = "jeu.html";

    }
    //on affiche le timer
    document.querySelector("t").innerHTML = `Timer: ${time}sec`;
}
interval = setInterval(timer, 1000);

//creation du tableau qui va contenir les chiffres cachés
var tabValeur = [];
//permet de savoir si il y a deja des cartes affiché
var changeLevel = false;

function lvl(nbBoxes){

    boxes = document.querySelectorAll('.box');
    //redemare le timer
    clearInterval(interval);
    interval = setInterval(timer, 1000);

    //si une NodeList existe, alors on supprime tous ces elements afin de pas rajouter des cartes
    if (changeLevel) {
        boxes.forEach(element => element.remove());
        for (var i = 0; i < nbBoxes; i++) {
            //on creer le nombre de div en fonction de level
            var div = document.createElement("div");
            div.className = "box";
            //on ajoute ses element dans la div box-container
            container[0].appendChild(div);
        }
    }else{
        for (var i = 0; i < nbBoxes; i++) {

            var div = document.createElement("div");
            div.className = "box";
            container[0].appendChild(div);
        }
    }

    if(nbBoxes == 12){
        time = 60;

        container[0].style.gridTemplateColumns="auto auto auto auto";
        //tableau des valeurs des cartes en doubles
        let petit =[1,2,3,4,5,6,1,2,3,4,5,6]
        //tab valeur prend la taille et les valeurs du tableau petit
        tabValeur = petit

    }else if(nbBoxes == 20){
        time = 100;

        container[0].style.gridTemplateColumns="auto auto auto auto auto";
        let moyen =[1,2,3,4,5,7,8,9,10,1,2,3,4,5,7,8,9,10]
        tabValeur = moyen

    }else if(nbBoxes == 24){
        time = 160;

        container[0].style.gridTemplateColumns="auto auto auto auto auto auto";
        let grand =[1,2,3,4,5,7,8,9,10,11,12,6,1,2,3,4,5,6,7,8,9,10,11,12]
        tabValeur = grand

    }
    document.querySelector("t").innerHTML = `Timer: ${time} sec`;


    boxes = document.querySelectorAll('.box');

    //on lance le jeu avec le nombre de carte qui correspond au level
    play()
    //comme il a changé de level alors on met true a la variable changeLevel
    changeLevel = true
}

//on aurait pu passe par la fonciton onload, sinon moi jai prefere creer un tableau si aucun level a été selectionné(soit un tableau vide)
if(tabValeur.length === 0){
    tabValeur =[1,2,3,4,5,6,1,2,3,4,5,6]
    for (var i = 0; i < 12; i++) {
        var div = document.createElement("div");
        div.className = "box";
        container[0].appendChild(div);
    }
    changeLevel = true
    play()
}

function play(){

    boxes = document.querySelectorAll('.box');

    //melange des valeurs dans le tableau
    tabValeur =  tabValeur.sort(() => Math.random() - 0.5);
    // console.log(boxes)
    //Variables qui memore l'insertion d'une image en html
    const face = "<img src='success.png' alt='success.png'></img>"
    const dos = "<img src='dos.png' alt='dos.png'></img>"
    //On retient l'animation lors du cloc sur la carte
    var rotateAnim = { "transition-duration": "700ms", "transform":"rotateX(+0deg)"}
    //Variable utiles pour le focntionnement de toutes la partie
    let click = null; //
    let nbclick =1;
    let card1 = null;
    let card2 = null;
    
    //Fonction qui desactive le clic
    function disableClick() {
        document.body.style.pointerEvents = 'none';
        setTimeout(function () {
            document.body.style.pointerEvents = 'auto';
        }, 1400);
    }
    
    //pour chaque box, on lui affecte des actions en passant par toute les box de la liste boxes
    boxes.forEach((box, key) => {
        //Affichage de chaque cartes avec leurs animations
        boxes.item(key).innerHTML = dos
        boxes.item(key).style.transition = "800ms"
        boxes.item(key).style.transform = "rotateY(+360deg)"
    
        //Fonction qui affiche la face de carte
        function goodChoice(index){
            boxes.item(index).innerHTML = face
            boxes.item(index).style.transition = "800ms"
            boxes.item(index).style.transform = "rotateY(+360deg)"
            boxes.item(index).style.pointerEvents = 'none';
        }
        function badChoice(index){
            boxes.item(index).innerHTML = dos
            boxes.item(index).style.transition = "800ms"
            boxes.item(index).style.transform = "rotateY(+360deg)"
        }
        
        box.addEventListener('click', (event) => {
            //Animation lors du clic sur la box
            function animBox() {
                event.target.style.transition = "all 700ms ease-out";
                event.target.style.transform = "rotateX(-90deg)";
                //Applliquer le style a la box
                Object.assign(box.style, rotateAnim)
            }
    
            //Fonction qui verifie si toutes les valeurs du tableau sont egale 0, ce qui signifie qu'il a trouvé toutes les cartes
            function winPlay(){
                win = true
                for (i = 0; i < tabValeur.length; i++) {
                    if (tabValeur[i] != 0) {
                        win = false
                    }
                }
                if (win) {
                    //message alert qui felicite le joueur et lui affiche son score(le temps et le nombre d'essais)
                    alert(`Gg 😏 SCORE :
    Time : ${time}
    Number fo tries : ${nbclick / 2} `)
                    //la page et rafraichi pour la prochaine partie
                    window.location.href = "jeu.html";
                }
            }
    
            //Verifier que le clic est different de l'ancien
            if (key != click) {
    
                //Si le clic est impaire(premiere carte retourné)
                if (nbclick % 2 != 0) {
                    card1 = `<h1>${tabValeur[key]}</h1>`
    
                    animBox()
                    //Apres 701ms(pour laisser le temps à l'animation), affichage du chiffre caché par la box
                    setTimeout(() => {
                        box.innerHTML = card1
                    }, "701")
              
                    nbclick += 1
    
                //Si le clic est pair(deuxieme carte retourné)
                } else if (nbclick % 2 == 0) {
    
                    //Afficher le nombre d'essai, un essai egale à deux cartes retourner
                    document.querySelector("b").innerHTML = `<b>Number of tries: ${nbclick / 2}</b>`
    
                    card2 = `<h1>${tabValeur[key]}</h1>`
                    animBox()
    
                    setTimeout(() => {
                        box.innerHTML = card2
                    }, "701")
    
                    disableClick()
    
                    //pendant la duré de setTimeout, js continue a compiler le code en arriere plan, 
                    //alor click n'est plus egale a l'ancien click mais au nouveau, c'est pourquoi 
                    //je sauvegarde la variable click dans une une autre variable appelé clic
                    clic = click    
    
                    //laisse 1.4sec au joueur pour voir les cartes
                    setTimeout(() => {
                        //Si les deux cartes selectionné sont les memes
                        if (tabValeur[clic] == tabValeur[click]) {
    
                            //j'ai decide de remplacer le chiffre cache par un 0 dans le tableau des valeurs
                            tabValeur[clic] = 0
                            tabValeur[click] = 0
                            
                            //Appel de la fonction pour modifier les deux cartes
                            goodChoice(clic)
                            goodChoice(click)
    
                        } else {
    
                            badChoice(clic)
                            badChoice(click)
                            
                        }
                        
                        //Verifier si il a trouvé toutes les cartes
                        winPlay()
                            
                        nbclick += 1
    
                    }, "1400")
    
                }
    
            //Si le clic est egal au precedent
            } else if (key == click) {
                alert("Veuilez selectionner deux cartes differentes !")
            }
    
            //La variable click retiens la variable key qui changera au prochain clic
            click = key
    
        })
    })
}

