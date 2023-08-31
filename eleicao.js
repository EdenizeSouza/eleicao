let votoX = 0;
let votoY = 0;
let votoZ = 0;
let votoB = 0;
let voto;
let fim;
let text = "";
let candidato_correto = false;
const candidato = {
    candidato_x: 889,
    candidato_y: 847,
    candidato_z: 515,
    branco: 0
}


while (candidato_correto == false){
    try{
        voto = parseInt(prompt("Digite: 889 para candidato X - 847 para candidato Y - 515 para candidato Z - 0 para voto branco."));
        if (isNaN(voto) == text) {
            if (voto == candidato.candidato_x){
                candidato_correto = true;
                votoX = votoX + 1;          
            } 
            else if (voto == candidato.candidato_y) {
                candidato_correto = true;
                votoY = votoY + 1;
            }
            else if (voto == candidato.candidato_z) {
                candidato_correto = true;
                votoZ = votoZ + 1;     
            }
            else if ((voto == candidato.branco) || (voto != candidato)){
                candidato_correto = true;
                votoB = votoB + 1;
                                 
            }else{
                candidato_correto = text;
                console.log("Você digitou um texto!")
            }
        }else{
            throw new Error ("Texto não é válido como voto.");
        }
    }catch(error){
        console.log(error);
        console.log("Vote novamente.")
    }
    if (candidato_correto == true){
        fim = parseInt(prompt("Dejesa finalizar a votação? Digite 1 para SIM ou 2 para NÃO"));
        if (fim == 2){
            candidato_correto = false;
        }
        else if (fim == 1){
            candidato_correto == true;
        }
    }
}
if ((votoX > votoY) && (votoX > votoZ)) {
    console.log("O vencedor foi: Candidato X com:",votoX,"votos");
}
else if ((votoY > votoX) && (votoY > votoZ)) {
    console.log("O vencedor foi: Candidato Y com:",votoY,"votos");
}else{
    console.log("O vencedor foi: Candidato Z com:",votoZ,"votos");
}
    console.log("A quantidade de votos do Candidato X foi de:",votoX,"votos");
    console.log("A quantidade de votos do Candidato Y foi de:",votoY,"votos");
    console.log("A quantidade de votos do Candidato Z foi de:",votoZ,"votos");
    console.log("A quantidade de votos Brancos ou Nulos foi de:",votoB,"votos");