//Realmente não achei necessidade alguma de usar laços de repetição, não consigo nem imaginar
//onde posso colocar laços de repetição sem complicar muito e passar do que eu aprendi até agora.


let nivelHeroi = 50000
let heroi = "Felipão"

if(nivelHeroi <= 1000){
   nivelHeroi = "Ferro"
console.log("O herói de nome " + heroi + " está no nível: " + nivelHeroi)
}

if(nivelHeroi >=1001 && nivelHeroi <=2000){
   nivelHeroi = "Bronze"
console.log("O herói de nome " + heroi + " está no nível: " + nivelHeroi)
}

if(nivelHeroi >= 2001 && nivelHeroi <=5000){
   nivelHeroi = "Prata"
console.log("O herói de nome " + heroi + " está no nível: " + nivelHeroi)
}

if(nivelHeroi >= 5001 && nivelHeroi <= 7000){
    nivelHeroi = "Ouro"
console.log("O herói de nome " + heroi + " está no nível: " + nivelHeroi)    
}
if(nivelHeroi >= 7001 && nivelHeroi <=8000){
   nivelHeroi = "Platina"
console.log("O herói de nome " + heroi + " está no nível: " + nivelHeroi)   
}
if(nivelHeroi >= 8001 && nivelHeroi <=9000){
   nivelHeroi = "Ascendente"
console.log("O herói de nome " + heroi + " está no nível: " + nivelHeroi)   
}
if(nivelHeroi >= 9001 && nivelHeroi <=10000){
    nivelHeroi = "Imortal"
console.log("O herói de nome " + heroi + " está no nível: " + nivelHeroi)   
}
if(nivelHeroi >= 10001){
    nivelHeroi = "Radiante"
console.log("-> O herói de nome " + heroi + " está no nível: " + nivelHeroi)   
}


