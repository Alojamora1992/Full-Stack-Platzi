var opcion_tijera = "Tijera";
var opcion_piedra = "Piedra";
var opcion_papel = "Papel";

var Player = opcion_papel;
var CPU = opcion_tijera;

function game(){
    if(Player === "Tijera" && CPU === "Papel"){
        return console.log("Winner-Player 1.")
    }else if(Player === "Tijera" && CPU === "Piedra" ){
        return console.log("Winner CPU.")
    }else if(Player === "Tijera" && CPU === "Tijera" ){
        return console.log("Deuce.")
    }else if(Player === "Papel" && CPU === "Piedra" ){
        return console.log("Winner player 1.")
    }else if(Player === "Papel" && CPU === "Tijera" ){
        return console.log("Winner CPU.")
    }else if(Player === "Papel" && CPU === "Papel" ){
        return console.log("Deuce.")
    }else if(Player === "Piedra" && CPU === "Tijera" ){
        return console.log("Winner Player 1.")
    }else if(Player === "Piedra" && CPU === "Papel" ){
        return console.log("Winner CPU")
    }else{
        return console.log("Deuce.")
    }
}
game()
