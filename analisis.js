
//Funciones Helpers
function esPar(a){
    return (a % 2 === 0)
}

function calcularMediaAritmetica(lista){
    
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}

//Calculando medianas
function medianaSalariosChi(lista){
    const mitad = parseInt(lista.length / 2);

    if(esPar(lista.length)){
        
        const personaMitad1 = lista[mitad - 1];
        
        const personaMitad2 = lista[mitad];
        
        const mediana = calcularMediaAritmetica([personaMitad1 , personaMitad2]);
        
        return mediana;

    } else {
        const personaMitad = lista[mitad];
        return personaMitad
    }
}

//Calculado Mediana General
const salariosChi = chile.map(
    function (persona){
        return persona.salario
    }
);

const salariosChiSorted = salariosChi.sort(
    function (salarioA , salarioB){
        return salarioA - salarioB;
    }
);

const medianaGeneralChi = medianaSalariosChi(salariosChiSorted);

//Mediana del Top 10%
const spliceStart = (salariosChiSorted.length * 90) / 100;

const spliceCaunt = (salariosChiSorted.length - spliceStart);

const salariosTop10Chi = salariosChiSorted.splice(
    spliceStart,
    spliceCaunt,
); 

const medianaTop10Chi = medianaSalariosChi(salariosTop10Chi);


console.log({
    medianaGeneralChi,
    medianaTop10Chi,
});