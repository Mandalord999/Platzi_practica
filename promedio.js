const lista1 = [
    100,
    200,
    300,
    500,
];

let sumaLista1 = 0;

//Recorrer lista1

for(let i = 0; i < lista1.length; i++){

    sumaLista1 = sumaLista1 + lista1[i];

}

function calcularMediaAritmetica(lista){
    
    //let sumaLista = 0;

    //Recorrer lista1
    
    /* for(let i = 0; i < lista1.length; i++){

        sumaLista = sumaLista + lista1[i];
    } */

    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista1 / lista.length;

    return promedioLista;
}
