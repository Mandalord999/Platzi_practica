//Codigo del cuadrado
const ladoCuadrado = 5;
console.log("Lados del cuadrado miden: " + ladoCuadrado+" cm");

function perimetroCuadrado(lado){
    return lado * 4
}
//console.log("El perimetro del cuadrado es: " + perimetroCuadrado+" cm");

function areaCuadrado(lado){
    return lado * lado;
}
//console.log("El area del cuadrado es: " + areaCuadrado+" cm^2");

//Codigo triagulo
/* const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5; */

/* console.log(
    "Los lado del triangulo miden: " 
    + ladoTriangulo1 +"cm,"
    + ladoTriangulo2 +"cm,"
    + baseTriangulo +"cm"); */

//console.log("La altura del triangulo es:" + alturaTriangulo);

function perimetroTriangulo (lado1, lado2, lado3){
    return lado1 + lado2 + lado3;
} 
//console.log("El perimtro del triangulo es:" + perimetroTriangulo);

function areaTriangulo (base, altura){
    return (base * altura)/2;
} 
//console.log("El area del triangulo es:" + areaTriangulo + "^2");

//Codigo del circulo
//const radioCirculo = 4;
//console.log("El radio del circulo es: " + radioCirculo);
function diametroCirculo (radio){
    return radio * 2;
} 
//console.log("El diametro del circulo es: " + diametroCirculo);
const PI = Math.PI;
function perimetroCirculo (radio){
    const diametro = perimetroCirculo (radio);
    return diametro * PI;
}
//console.log("El perimetro del circulo es: " + perimetroCirculo);
const areaCirculo = (radioCirculo * radioCirculo) * PI;
function areaCirculo(radio){
    return (radio * radio) * PI;
}

//console.log("El area del circulo es: " + areaCirculo);














