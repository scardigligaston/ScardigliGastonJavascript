/*function calcularCuotaGimnasio(mensualidad, duracionMeses) {
    return mensualidad * duracionMeses;
}

function mostrarMenu() {
    return "Bienvenido al Gimnasio Cubic\n\n" +
        "1. Oferta Especial: Abono por 6 meses (precio mensual: $6000)\n" +
        "2. Musculación + Actividad Complementaria (precio mensual: $14000)\n" +
        "3. Musculación Individual (precio mensual: $12000)\n" +
        "4. No me interesa ninguna opción";
}

const opcion = parseInt(prompt(mostrarMenu()));
let costoTotalGimnasio;

let mensualidadOferta = 6000; // Precio mensual de la oferta
let mensualidadMusculacion = 14000; // Precio mensual de Musculación + Actividad Complementaria
let mensualidadIndividual = 12000; // Precio mensual del mes individual

switch (opcion) {
    case 1:
        let duracionOferta = 6;
        costoTotalGimnasio = calcularCuotaGimnasio(mensualidadOferta, duracionOferta);
        
        break;
    case 2:
        let mesesMusculacion = parseInt(prompt("Ingrese la cantidad de meses para Musculación + Actividad Complementaria (hasta 12 meses):"));
        if (mesesMusculacion > 0 && mesesMusculacion <= 12) {
            costoTotalGimnasio = calcularCuotaGimnasio(mensualidadMusculacion, mesesMusculacion);
        } else {
            alert("Por favor, ingrese un número válido de meses (entre 1 y 12).");
        }
        break;
    case 3:
        costoTotalGimnasio = calcularCuotaGimnasio(mensualidadIndividual, 1);
        break;
    default:
        alert("Gracias por visitarnos. ¡Hasta luego!");
}

if (costoTotalGimnasio) {
    alert("El costo total es de $" + costoTotalGimnasio + " Gracias por elegirnos! te esperamos!");
}*/






//practica 


/*for( let i=0; i <= 10; i++ ){
  console.log ("la variable i vale:" + i)
}*/
/*
let ingreso = parseInt( prompt ("ingresa un numero")) ;

for( let i =0; i<=10; i++){
    let resultado = ingreso * i; 
    console.log ("el producto de " + ingreso + " x " + i + " es igual a " + resultado); 
}
*/
/*if (si esto es true ){ esto se ejecuta, es un bloque

}*/
/*
if ( 10 < 15 ) { 
    alert ("hola" + " pedro")
}

// si la anterior condicion no se cumple. 
else if ( 22 > 13 ){ 
    alert ( "tu mama")
}
// si nada de las anteriores se cumple, ejecutamos el else 
else {
   alert ("tu segunda mama")   
}*/

//arrays son objetos/ guardamos muchos datos 
//let nombre = ["pepe" , "gonzalez", 24]; 
//alert  (nombre);// metodos
//document.write (nombre) //son metodos

//document.write (nombre[0])// para acceder a un elemento en especifico

/*
let ingreso; 
do {
    ingreso = prompt ( "ingresa un producto, para salir presiona x");
    if(ingreso != "x"){
       console.log ("producto ingresado "+ ingreso);
       
       
} 

}while(ingreso != "x")

console.log ( "Muy bien, haz salido")
*/


//funciones///////////////////////////////////////////

//declaracion 
/*function saludar () {
    console.log ("Hola tarola");
}*/
//llamado 

//saludar ();
/* for (let i = 0; i < 3; i++) {
    saludar();
}*/
// funcion con parametros (aqui va el parametro)
/*function saludarConParametros(nombre="extraño"//valor por defecto){  //"juan"
    console.log ("Hola "+ nombre); //hola juan 
}
let nombre = prompt ("Ingresa tu nombre"); //a travez de un prompt guardamos en la variable el dato ingresado //declaracion de variable 
saludarConParametros("juan");
saludarConParametros("Pedro"); //pasamos un valor como parametro 
saludarConParametros(nombre); //como parametro pasamos la variable 
*/


/*
function sumar (num1, num2){
    console.log(num1 + num2);
}
sumar (4, 5);
*/



/*
let resultado; 
function sumar (num1, num2){ //buena practica de la función es que realice una sola tarea 
    resultado = num1 + num2;
    return resultado // el return devuelve afuera de la función
}
let num1 = parseFloat(prompt("ingresa un numero"))
let num2 = parseFloat(prompt("ingresa un numero"))

let resultSuma = sumar (num1, num2)
console.log(resultSuma);
console.log(resultado);


*/
// funcion flecha 
/*
const funcionFlecha = (parametro)=> { 
   console.log ("Esto es una " + parametro)
}; 

funcionFlecha("funcion flecha"); 
*/

