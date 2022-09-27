let precio = 0;
let iva = 1.21;


const edad = prompt("ingrese su edad")

if (edad >= 18){
    while(precio === 0) {

        let viaje = prompt("Ingrese el destino de su viaje entre ellos estan (Canada, España, Rusia, Francia) (Recuerda que se le cobrara el IVA al viaje)");
    
    
    
        switch(viaje) {
    
            case "CANADA":
            case "canada":
            case "Canada":
                precio = 350;
                break;
    
            case "FRANCIA":
            case "francia":
            case "Francia":
                precio = 500;
                break;
    
            case "ESPAÑA":
            case "españa":
            case "España":
                precio = 900;
                break;
    
            case "RUSIA":
            case "rusia":
            case "Rusia":
                precio = 700;
                break;
    
            default:
                alert("Ingresó un lugar que no se encuentra en la lista");
                break;
        }
        
    }

    const resultado = parseInt(precio / iva);

alert("El precio de su viaje es: $" + resultado);

} else if (edad <=18) {
    alert ("usted no tiene la edad suficiente para poder comprar un pasaje")
}



