//on retient le nombre de div='box' dans la variable boxes, qui est une liste
let boxes = document.querySelectorAll('.box');
//tableau des valeurs des cartes en doubles
let tabValeur =[1,2,3,4,5,6,1,2,3,4,5,6]
//melange des valeurs dans le tableau
tabValeur =  tabValeur.sort(() => Math.random() - 0.5);;

const face = "<img src='success.png' alt='success.png'></img>"
const dos = "<img src='dos.png' alt='dos.png'></img>"

let boxContainer = document.querySelectorAll('.box-container');
var rotateAnim = { "transition-duration": "700ms", "transform":"rotateX(+0deg)"}

let click = null;
let nbclick =1;
let card1 = null;
let card2 = null;

function disableClick() {
    document.body.style.pointerEvents = 'none';
    setTimeout(function() {
      document.body.style.pointerEvents = 'auto';
    }, 3000);
  }

  function timer(){
    var elapsedTime = 0;
  
    // Fonction pour mettre à jour le temps affiché dans la div
    function updateTimer() {
        elapsedTime++;
        document.querySelector("t").innerHTML = `Timer: ${elapsedTime}sec`;
    }
  
    // Démarrer le chronomètre
    setInterval(updateTimer, 1000);
  }


//pour chaque box, on lui affecte des actions en passant par toute les box de la liste boxes
boxes.forEach((box,key) => {           
    boxes.item(key).innerHTML = dos
    boxes.item(key).style.transition="800ms"
    boxes.item(key).style.transform="rotateY(+360deg)"
    timer()
    box.addEventListener('click', (event)=>{
        // tabValeur = [0,0,3,4,5,6,0,0,4,5,4,0]

    //     //si le clic actuel differnet de l'ancien
        if(key != click){
            console.log(nbclick)
                        
    //                     //   console.log(nbclick)

                        if(nbclick%2 != 0){
                            card1 = `<h1>${tabValeur[key]}</h1>`

                            event.target.style.transition="all 700ms ease-out";
                            event.target.style.transform="rotateX(-90deg)";
                            Object.assign(box.style, rotateAnim)

                            setTimeout(() => {
                            box.innerHTML = `<h1>${tabValeur[key]}</h1>`

                        }, "701")
            
                        nbclick+=1
    //                         // console.log(`CARTE 1 = ${card1}`)
                
                        }else if(nbclick%2 == 0){

                            document.querySelector("b").innerHTML = `<b>number of tries: ${nbclick/2}</b>`

                            card2 = `<h1>${tabValeur[key]}</h1>`

                            event.target.style.transition="all 700ms ease-out";
                            event.target.style.transform="rotateX(-90deg)";
                            Object.assign(box.style, rotateAnim)

                            setTimeout(() => {
                                box.innerHTML = `<h1>${tabValeur[key]}</h1>`
    
                            }, "701")
                            nbclick+=1

                        
                            disableClick()
                
    //                         //pendant la duré de setTimeout, js continue a compiler le code en arriere plan, 
    //                         //alor click n'est plus egale a l'ancien click mais au nouveau, c'est pourquoi 
    //                         //je sauvegarde la variable click dans une une autre variable appelé clic
                            clic = click 
                            
    //                         //laisse 2.5secondes au joueur pour voir les cartes
                            setTimeout(() => {
                                if(tabValeur[clic] == tabValeur[click]){
                            
        
                                                                
                                //                                 for(i=0; i<tabValeur.length; i++){
                                                        
                                //                                     if(tabValeur[i] == tabValeur[clic]){
                                                  
                                                                    tabValeur[clic]=0
                                                
                                                                
                                //                                     }else if(tabValeur[i] == tabValeur[key]){
                                                          
                                                
                                                                    tabValeur[click]=0
                                                
                                                                              
                                //                                     }
                                //                                     if(tabValeur[i] == 0) {
                                //                                         console.log("pd")
                                
                                //                                         boxes.item(i).innerHTML = face
                                
                                //                                     }
                                                   
                                //                                 }     
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
                                for (let i = 0; i < tabValeur.length; i++) {
                                                                    if (tabValeur[i] != 0) {
                                                                        win = false
                                                                    }else if(win){
                                                                        alert("Gg ma petite Emouna 😏 ")
                                                                        window.location.href = "jeu.html";
                                                                    }
                                                                }
                            //     for(i=0; i<tabValeur.length; i++){
                            //             if(tabValeur[i] != 0) {
                            //                 console.log("different de 0 "+i)
                            //         boxes.item(clic).innerHTML = dos
                            //         boxes.item(clic).style.transition="800ms"
                            //         boxes.item(clic).style.transform="rotateY(+360deg)"
                            //         boxes.item(click).innerHTML = dos
                            //         boxes.item(click).style.transition="800ms"
                            //         boxes.item(click).style.transform="rotateY(+360deg)"
                            //             }else{
                            //                 console.log(" pas different de 0 "+i)

                            //                 boxes.item(clic).innerHTML = face
                            //                 boxes.item(clic).style.transition="800ms"
                            //                 boxes.item(clic).style.transform="rotateY(+360deg)"
                            //                 boxes.item(click).innerHTML = face
                            //                 boxes.item(click).style.transition="800ms"
                            //                 boxes.item(click).style.transform="rotateY(+360deg)"
                            //             }
                                        
                            //     }

                            
                            }, "2000")

    //                         //si les deux cartes selectionnées à la suite
    //                         if(card1 == card2){
                            
    //                         //timer de 1.3 seconde pour laisser l'animation     
    //                         setTimeout(() => {
                
    //                             alert(`Bravo ! 1 = ${tabValeur[clic]} 2 = ${tabValeur[key]}`)
                                
    //                             for(i=0; i<tabValeur.length; i++){
                        
    //                                 if(tabValeur[i] == tabValeur[clic]){
                  
    //                                 tabValeur[i]=0
                
                                
    //                                 }else if(tabValeur[i] == tabValeur[key]){
                          
                
    //                                 tabValeur[i]=0
                
                                              
    //                                 }
    //                                 if(tabValeur[i] == 0) {
    //                                     console.log("pd")

    //                                     boxes.item(i).innerHTML = face

    //                                 }
                   
    //                             }     
                
                   
                
    //                             }, "1300")
                
                    
                            }

                            
                        }else if(key == click){
                                    alert("Veuilez selectionner deux cartes differentes !")
                                    // event.target.innerHTML = dos
                                    // card2 = null
                        }
 
    //     }else{
            

        // }
          
        

    //     // verifier qu'il ne reclique pas sur la meme carte
    //     if(key == click){
    //         alert("Veuilez selectionner deux cartes differentes !")
    //         event.target.innerHTML = dos
    //         card1 = null
    //         card2 = null

    //     }else 

        click = key


    })




    })
