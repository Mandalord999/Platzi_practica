//Codigo del cuadrado
const ladoCuadrado = 5;
console.log("Lados del cuadrado miden: " + ladoCuadrado+" cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado es: " + perimetroCuadrado+" cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El area del cuadrado es: " + areaCuadrado+" cm^2");

//Codigo triagulo
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

console.log(
    "Los lado del triangulo miden: " 
    + ladoTriangulo1 +"cm,"
    + ladoTriangulo2 +"cm,"
    + baseTriangulo +"cm");

console.log("La altura del triangulo es:" + alturaTriangulo);

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perimtro del triangulo es:" + perimetroTriangulo);

const areaTriangulo = (baseTriangulo * alturaTriangulo)/2;
console.log("El area del triangulo es:" + areaTriangulo + "^2");

//Codigo del circulo
const radioCirculo = 4;
console.log("El radio del circulo es: " + radioCirculo);
const diametroCirculo = radioCirculo * 2;
console.log("El diametro del circulo es: " + diametroCirculo);
const PI = Math.PI;
const perimetroCirculo = diametroCirculo * PI;
console.log("El perimetro del circulo es: " + perimetroCirculo);
const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log("El area del circulo es: " + areaCirculo);














