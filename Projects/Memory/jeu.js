//on retient le nombre de div='box' dans la variable boxes, qui est une liste
let boxes = document.querySelectorAll('.box');
//tableau des valeurs des cartes en doubles
let tabValeur =[1,2,3,4,5,6,1,2,3,4,5,6]
//melange des valeurs dans le tableau
tabValeur =  tabValeur.sort(() => Math.random() - 0.5);
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

function disableClick() {
    document.body.style.pointerEvents = 'none';
    setTimeout(function() {
      document.body.style.pointerEvents = 'auto';
    }, 1400);
  }

  
    //Fonction qui m'est à jour le temps
    var time = 0;
    function timer() {
        time++;
        document.querySelector("t").innerHTML = `Timer: ${time}sec`;
    }
    //Relance la fonction toutes les 1sec
    setInterval(timer, 1000);

//pour chaque box, on lui affecte des actions en passant par toute les box de la liste boxes
boxes.forEach((box,key) => {           
    boxes.item(key).innerHTML = dos
    boxes.item(key).style.transition="800ms"
    boxes.item(key).style.transform="rotateY(+360deg)"
    console.log(time)
    box.addEventListener('click', (event)=>{

       

        if(key != click){
            console.log(nbclick)
                        


                        if(nbclick%2 != 0){
                            card1 = `<h1>${tabValeur[key]}</h1>`

                            event.target.style.transition="all 700ms ease-out";
                            event.target.style.transform="rotateX(-90deg)";
                            Object.assign(box.style, rotateAnim)

                            setTimeout(() => {
                            box.innerHTML = `<h1>${tabValeur[key]}</h1>`

                        }, "701")
             
                        nbclick+=1

                
                        }else if(nbclick%2 == 0){
                           
                            console.log("clique nb "+ nbclick)
                            document.querySelector("b").innerHTML = `<b>number of tries: ${nbclick/2}</b>`

                            card2 = `<h1>${tabValeur[key]}</h1>`

                            event.target.style.transition="all 700ms ease-out";
                            event.target.style.transform="rotateX(-90deg)";
                            Object.assign(box.style, rotateAnim)

                            setTimeout(() => {
                                box.innerHTML = `<h1>${tabValeur[key]}</h1>`
    
                            }, "701")

                        
                            disableClick()
                
    //                         //pendant la duré de setTimeout, js continue a compiler le code en arriere plan, 
    //                         //alor click n'est plus egale a l'ancien click mais au nouveau, c'est pourquoi 
    //                         //je sauvegarde la variable click dans une une autre variable appelé clic
                            clic = click 
                            
    //                         //laisse 2.5secondes au joueur pour voir les cartes
                            setTimeout(() => {
                                if(tabValeur[clic] == tabValeur[click]){
                      
               
                                                                    tabValeur[clic]=0
                 
                                                
                                                                    tabValeur[click]=0
                                                
               
                                                                    boxes.item(clic).innerHTML = face
                                                                    boxes.item(clic).style.transition="800ms"
                                                                    boxes.item(clic).style.transform="rotateY(+360deg)"
                                                                    boxes.item(clic).style.pointerEvents = 'none';

                                                                    boxes.item(click).innerHTML = face
                                                                    boxes.item(click).style.transition="800ms"
                                                                    boxes.item(click).style.transform="rotateY(+360deg)"
                                                                    boxes.item(click).style.pointerEvents = 'none';

                                                

                                                                }else{
                                                                    boxes.item(clic).innerHTML = dos
                                                                    boxes.item(clic).style.transition="800ms"
                                                                    boxes.item(clic).style.transform="rotateY(+360deg)"
                                                                    boxes.item(click).innerHTML = dos
                                                                    boxes.item(click).style.transition="800ms"
                                                                    boxes.item(click).style.transform="rotateY(+360deg)"
                                                                }
                                                                win = true
                                                                for (let i = 0; i < tabValeur.length; i++) {
                                                                    if (tabValeur[i] != 0) {
                                                                        win = false
                                                                    }
                                                                    
                                                                }
                                                                if(win){
                                                                    alert(`Gg 😏 SCORE : <hr> Time : ${time} <hr> Number fo tries : ${nbclick/2} `)
                                                                    window.location.href = "jeu.html";
                                                                }
                                                               
                      
                                                                nbclick+=1
                            
                            }, "1400")


                
                    
                            }

                            
                        }else if(key == click){
                                    alert("Veuilez selectionner deux cartes differentes !")
                                    // event.target.innerHTML = dos
                                    // card2 = null
                        }


        click = key


    })
    // win = true
    // for (let i = 0; i < tabValeur.length; i++) {
    //     if (tabValeur[i] != 0) {
    //         win = false
    //     }
        
    // }
    // if(win){
    //     alert("Gg ma petite  😏 ")
    //     window.location.href = "jeu.html";
    // }



    })
