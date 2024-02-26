// ARRAY Y OBJETOS LITERALES 
const clasesDisponibles = [
    { nombre: "Yoga", horario: "Lunes y Miércoles 18:00 - 19:00", instructor: "Ana" },
    { nombre: "Spinning", horario: "Martes y Jueves 17:30 - 18:30", instructor: "Stich" },
    { nombre: "CrossFit", horario: "Lunes, Miércoles y Viernes 19:30 - 20:30", instructor: "Jordan" }
];

// Función recorre las clases 
function mostrarClasesDisponibles() {
    let mensaje = "Clases disponibles:\n";
    for (let i = 0; i < clasesDisponibles.length; i++) {
        mensaje += `${i + 1}. ${clasesDisponibles[i].nombre} - Horario: ${clasesDisponibles[i].horario} - Instructor: ${clasesDisponibles[i].instructor}\n`;
    }
    return mensaje; // con retorno 
}

// Función para calcular la cuota 
function calcularCuotaGimnasio(mensualidad, duracionMeses) {
    return mensualidad * duracionMeses;
}

// Menú principal
function mostrarMenu() {
    return "Bienvenido al Gimnasio CUBIC\n\n" +
        "1. Oferta Especial: Abono por 6 meses (precio mensual: $6000)\n" +
        "2. Musculación + Actividad Complementaria (precio mensual: $14000)\n" +
        "3. Musculación Individual (precio mensual: $12000)\n" +
        "4. No me interesa ninguna opción";
}

const opcion = parseInt(prompt(mostrarMenu()));
let costoTotalGimnasio;

const mensualidadOferta = 6000; // Precio mensual 
const mensualidadMusculacion = 14000; // Precio mensual de Musculación + Actividad Complementaria
const mensualidadIndividual = 12000; // Precio


// CONDICIONALES 
switch (opcion) {
    case 1:
        const duracionOferta = 6;
        costoTotalGimnasio = calcularCuotaGimnasio(mensualidadOferta, duracionOferta);
        
        break;
    case 2:
        const mesesMusculacion = parseInt(prompt("Ingrese la cantidad de meses (hasta 12 meses):"));
        if (mesesMusculacion > 0 && mesesMusculacion <= 12) {
            costoTotalGimnasio = calcularCuotaGimnasio(mensualidadMusculacion, mesesMusculacion);
            alert(mostrarClasesDisponibles());
           
        } else {
            alert("Por favor, ingrese un número válido de meses (entre 1 y 12).");
        }
        break;
    case 3:
        costoTotalGimnasio = calcularCuotaGimnasio(mensualidadIndividual, 1);
        
        break;
   
    default:
        alert("Paga la cuota amarrete.Gracias :D¡Hasta luego!");
}

if (costoTotalGimnasio) {
    alert("El costo total es de $" + costoTotalGimnasio);
    alert("Gracias por elegirnos. ¡Te esperamos!");
}


