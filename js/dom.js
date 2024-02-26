//DOM 20/2 
//modelo de objetos del documento 
/* 
document  es objeto global, es un metodo, con el cual podemos acceder a las etiquetas HTML 
document.body    <body> las etiquetas son NODOS TIPO ELEMENTO es la raíz// NODO TEXTO es el texto que contiene la etiqueta 
dom node tree viewer  chrome 
//console.dir(document.body) para acceder a los documentos del body 
*/
//metodos de acceso 
//siempre llamamos a document

document.getElementById("")//elementos que contengan ID en las etiquetas html 
//cuando accedemos a los nodos los guardamos en constantes 
const tituloPrincipal = document.getElementById (""); // metodo by id en singular, el primero siempre trae si se llama igual 

console.log(tituloPrincipal);
//acceso por className

document.getElementsByClassName ()//metodo para clases, es plural   se comporta como un array 

//ejemplo 
const listado = document.getElementsByClassName ("lista"); 
//recorre el listado el for of
for (const lista of listado) {
    console.log(lista.innerHTML);
};

//acceso tagName
const parrafo = document.getElementsByTagName("div")
console.log(div);//tambien se puede hacer un for of para recorrer 
