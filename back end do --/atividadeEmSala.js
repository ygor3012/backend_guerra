let classe = document.getElementById('classe').value;
let arma = document.getElementById('arma').value.trim();
let dado = Math.floor(Math.random() * 20)+1;
let resultado = document.getElementById('resultado');

let lutar = document.getElementById('luta').addEventListener('click', function(){
    let classe = document.getElementById('classe').value;
    let arma = document.getElementById('arma').value.trim();

    switch(classe){
        case 'guerreiro':
            if(arma === 'espada' || arma === 'Espada' || arma === 'ESPADA'){
            if(dado > 5 && dado <20){
                resultado.innerText = `O resultado do dado foi ${dado}, VITÓRIA!`
            }else if(dado=20){
                resultado.innerText = `VOCÊ VENCEU COM UM ATAQUE CRÍTICO! PARABÉNS`
            } 
             else{
                resultado.innerText = `O resultado do dado foi ${dado}, DERROTA!`
            }
        } else{
            if(dado >= 15){
                resultado.innerText = `Você não usou a arma ideal, mas deu sorte e seu dado caiu no número ${dado}, VITÓRIA!`
            } else{
                resultado.innerText = `Você não usou a arma ideal, e seu dado caiu no número ${dado}, DERROTA!`
            }
        } break;
        
        
        case 'mago':
          if(arma === 'cajado' || arma === 'Cajado' || arma === 'CAJADO'){
            if(dado > 8 && dado <20){
                resultado.innerText = `O resultado do dado foi ${dado}, VITÓRIA!`
            } else{
                resultado.innerText = `O resultado do dado foi ${dado}, DERROTA!`
            }
        } else{
            if(dado === 20){
                resultado.innerText = `VOCE DEU UM ATAQUE CRÍTICO, VITÓRIA!!`
            } else{
                resultado.innerText = `Você não usou a arma ideal, e seu dado caiu no número ${dado}, DERROTA!`
            }
        } break;
        

        case 'arqueiro':
                if(arma === 'arco' || arma === 'Arco' || arma === 'ARCO'){
            if(dado > 10){
                resultado.innerText = `Você usou a única arma que o arqueiro sabe usar e deu sorte do dado cair em ${dado}, VITÓRIA!!`
            } else{
                resultado.innerText = `Você usou a arma certa, mas o dado caiu em ${dado}, DERROTA!!!`
            }
        } else{
            resultado.innerText = `Você não escolheu a arma certa, DERROTA!!!`
        } break;
        default:
            resultado.innerText = 'Você adicionou informações inválidas!'

    }
});