//ARRAY []  
//son objetos los arrays, son dinamicos y puede ir aumentando su tamaño 
const numeros = [3, 1, 5, 6, 8, 7]; 
console.log(numeros.length);//la longitud 

console.log(numeros[0]);//acceder al elemento, por el indice 
console.log(numeros[2] + numeros[4]);

//agregar un valor al array 
numeros[6] = 9;

// metodo que agrega elementos al final 

numeros.push("holis","soy", "gaston"); //empuja los elementos al final  

console.log(numeros);

//metodo que quita elementos del final 

numeros.pop()//no pasamos paramentros, quita el ultimo
//console.log(numeros);

// recorremos el array con un for 

for (let i = 0; i < numeros.length; i++){ //recorre la longitud del array 
    console.log(numeros[i]);
}

//agrega elementos al inicio (unshift)

numeros.unshift(20)
console.log(numeros);

//quitar elementos al inicio 

numeros.shift()
console.log(numeros);

//metodo para eliminar 1 o varios, con la particularidad que lo hace de una determinada posicion 
numeros.splice(1,2)//recibe 2 parametros

//join lo convierte en string, y agrega separadores
console.log(numeros.join("/"));



let gaston = "el mejor"
const alacena = ["fideos", "harina", "arroz", gaston];

//metodo concat, recibe un array 

const granAlacena = alacena.concat(gaston)
console.log(granAlacena);

//metodo indexOF
console.log(granAlacena.indexOf("Harina"));

//metodo includes 

console.log(granAlacena.includes("arroz"));

//crear una funcion que me permita instanciar libros y agregarlos a la lista 

function Producto (nombre, precio, stock) {
    this.nombre = nombre; 
    this.precio = parseFloat(precio);
    this.stock = parseInt(stock);
    this.mostrarInformacion = function () {
        return `Nombre: ${this.nombre}, Precio: ${this.precio}, Stock:${this.stock}`;
    };
    this.mostrarStock = () => {
        return this.stock;
    };

}
const listaProductos = []

const nuevoProd = new Producto ("harina", 800, 5)
listaProductos.push(nuevoProd)

console.log(listaProductos);
console.log(nuevoProd.mostrarInformacion());
console.log(nuevoProd.mostrarStock());

