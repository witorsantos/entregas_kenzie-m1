function cashMachine(valorSaque, salarioFixo, vendas){
    let saque = valorSaque;
        
    let saldoRestante = calculateSalary(salarioFixo, vendas) - valorSaque;
    //let cedulasDisponiveis = [200, 100, 50, 20, 10, 5, 2];
    let cedulasDisponiveis = [0, 0 , 0, 0, 0, 0, 0]
    if(valorSaque > calculateSalary(salarioFixo, vendas)){
        return `Valor insuficiente para saque.`
    }
    while(saque > 0){
        if(saque >= 200){
            cedulasDisponiveis[0]++;
            saque -= 200;
        }
        else if(saque >= 100){
            cedulasDisponiveis[1]++;
            saque -= 100;
        }
        else if(saque >= 50){
            cedulasDisponiveis[2]++;
            saque -= 50;
        }
        else if(saque >= 20){
            cedulasDisponiveis[3]++;
            saque -= 20;
        }
        else if(saque >= 10){
            cedulasDisponiveis[4]++;
            saque -= 10;
        }
        else if(saque >= 5){
            cedulasDisponiveis[5]++;
            saque -= 5;
        }
        else if(saque >= 2){
            cedulasDisponiveis[6]++;
            saque -= 2;
        }
    }
    return `Foram sacadas ${cedulasDisponiveis[0]} notas de R$ 200, ${cedulasDisponiveis[1]} notas de R$ 100, ${cedulasDisponiveis[2]} notas de R$ 50, ${cedulasDisponiveis[3]} notas de R$ 20, ${cedulasDisponiveis[4]} notas de R$ 10, ${cedulasDisponiveis[5]} notas de R$ 5 e ${cedulasDisponiveis[6]} notas de R$ 2. Saldo restante é ${saldoRestante}`
}
console.log(cashMachine(2500, 15000, 6785))




function getDiagonal(matriz){
    
    let diagonal = [];
    for(let i = 0; i < matriz.length; i++){
        
        //console.log(i);
        
        for (let j = 0; j < matriz[i].length; j++){
            
            //console.log(j);
            
            if((i) == (j)){
                diagonal.push(matriz[i][j]);
            }
        }
    }
    return diagonal;
}

console.log(getDiagonal([ [8, 9, 0], [0, 1, 5], [27, 56, 1]]))