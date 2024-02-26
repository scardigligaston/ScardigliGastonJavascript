//todos los objetos los declaramos como constantes 
const contacto1 = {
 nombre: "Gaston",
 apellido: "Scardigli",
 edad: 25, 
 domicilio:"calle falsa",
 email: "scardigli@.com",
}; // las constantes de objetos no hace falta mayusculas 

const contacto2 = {
    nombre: "pedro",
    apellido: "tutankamon",
    edad: 26, 
    domicilio:"calle falsa",
    email: "tutankamon@.com",
    telefono: "341555669",
   };


console.log(contacto1);
console.table(contacto2);


//metodo para acceder a valores de los objetos con notacion de .  

console.log(contacto1.domicilio);
console.log(contacto2.email);
//Notacion de punto 

let nombreCompletoC1 = contacto1.nombre + " " + contacto1.apellido; 
console.log(nombreCompletoC1);

// Notacion corchetes 
console.log(contacto1["apellido"]);//si o si ""

//cambiar valor de objeto    
contacto1.apellido = "espinoza" // actualizar/cambiar
console.log(contacto1.apellido);
// agregar valores a los objetos 
contacto1.telefono = "348548155";
console.log(contacto1);

// FUNCION CONSTRUCTORA LA PRIMER LETRA MAYUSCULA PARA DIFERENCIAR 
// es un molde para crear objetos  
function Contacto (nombre, apellido, direccion, tel){
    this.nombre = nombre;//claves y valor 
    this.apellido = apellido;
    this.direccion = direccion;
    this.tel = tel;
    this.hablar = function () { 
       console.log("Soy un objeto de tipo contacto y me llamo " + this.nombre); 
    }
}
 


// operador new, crea una nueva instancia de un objeto de tipo contacto 

const contacto3 = new Contacto("pablo", "salamunich", "francia 111", "6546511"); 
console.log(contacto3);

const contacto4 = new Contacto("Silvia", "pieda", "lolo 444", "65465132");
console.log(contacto4);
console.log(contacto4.apellido);

// Un string es un objeto 
let mensaje = "hola tarola"; 

// la propiedad length recorre e indica la cantidad de caracteres/ hay mas propiedades 
console.log(mensaje.length);
//tambien tenemos metodos 
console.log(mensaje.toLowerCase());// ()asi se diferencian los metodos, si no hay una instancia de un objeto no se puede utilizar  
console.log(mensaje.toUpperCase());// los metodos son funciones // no se puede usar si primero no se instancio/creo un objeto 

// El alert y prompt son metodos de la ventana window que esta implicito, no hace falta instanciar el objeto como console.log 
// los metodos son acciones 

contacto4.hablar()
contacto3.hablar()
console.log("nombre" in contacto4);//operador in, devuelve boolean // lo mismo que for in pero por cada valor 

//operador forin bucle para recorrer todo el objeto, te lo trae todo completo 

for (const key in contacto1 ) {
    console.log(key);// key son las claves del objeto que recorremos 
}
// forin notacion de corchete 
for (const key in contacto2) {
    console.log(key + ":" + contacto2[key]);
   
}
/*
// clase constructora // misma manera de crear un objeto  
class libro {
    constructor (nombre, apellido, direccion, tel) {
        this.nombre = nombre;//claves y valor 
        this.apellido = apellido;
        this.direccion = direccion;
        this.tel = tel;
        
    }
    hablar = function () { 
        console.log("Soy un objeto de tipo contacto y me llamo " + this.nombre); 
     }
}
*/