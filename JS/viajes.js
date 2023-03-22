//Elegir partida
let ezeiza = "ezeiza"
let antonioParodi = "antonio parodi"
let iguazu = "iguazu"

function elegirPartida(){

let partida = prompt("Eliga su punto de partida, poniendo su nombre tal cual: Ezeiza. Antonio Parodi. Iguazu")
console.log(partida)
if(partida.toLowerCase() == ezeiza){
    alert("Usted eligio el Aeropuerto Internacional de Ezeiza. Por favor elija su destino")
}
else if(partida.toLowerCase() == antonioParodi){
    alert("Usted eligio el Aeropuerto Internacional Brigadier General Antonio Parodi")
}else if(partida.toLowerCase() == iguazu){
    alert("Usted eligio el Aeropuerto Internacional de Puerto Iguazú")
}
else{
    alert("Por favor recargue la pagina y ponga un nombre de los que se indica al principio")
}
}

//Elegir destino
let miami = "miami"
let rioDeJaneiro = "rio de janeiro"
let puntaCana = "punta cana"
let nuevaYork = "nueva york"
let cancun = "cancun"
let bogota = "bogotá"
let asuncion = "asunción"
let montevideo = "montevideo"
let santiago = "santiago de chile"
let quito = "quito"
let lima = "lima"
let saoPaulo = "sao paulo"

function elegirDestino(){
    let destino = prompt("Por favor indique su destino") 
    if(destino.toLowerCase() == miami){
        alert("Usted ha elegido Miami, Estados Unidos ")
            let total = 500000
            let pasajes = parseInt(prompt("Tenemos solamente disponibles pasajes de clase turista. Por favor elija cuantos pasajes quiere comprar"))
            total = total * pasajes
            alert (`Sus pasajes son ${pasajes} y la totalidad de su precio es ${total}`)
    }
    else if(destino.toLowerCase() == rioDeJaneiro){
        alert("Usted ha elegido Rio de Janeiro, Brasil")
            let total = 170000
            let pasajes = parseInt(prompt("Tenemos solamente disponibles pasajes de clase turista. Por favor elija cuantos pasajes quiere comprar"))
            total = total * pasajes
            alert (`Sus pasajes son ${pasajes} y la totalidad de su precio es ${total}`)
    }
    else if(destino.toLowerCase() == puntaCana){
        alert("Usted ha elegido Punta Cana, Republica Dominicana")
            let total = 380000
            let pasajes = parseInt(prompt("Tenemos solamente disponibles pasajes de clase turista. Por favor elija cuantos pasajes quiere comprar"))
            total = total * pasajes
            alert (`Sus pasajes son ${pasajes} y la totalidad de su precio es ${total}`)
    }
    else if(destino.toLowerCase() == nuevaYork){
        alert("Usted ha elegido Nueva york, Estados Unidos")
            let total = 600000
            let pasajes = parseInt(prompt("Tenemos solamente disponibles pasajes de clase turista. Por favor elija cuantos pasajes quiere comprar"))
            total = total * pasajes
            alert (`Sus pasajes son ${pasajes} y la totalidad de su precio es ${total}`)
    }
    else if(destino.toLowerCase() == cancun){
        alert("Usted ha elegido Cancun, Mexico")
            let total = 450000
            let pasajes = parseInt(prompt("Tenemos solamente disponibles pasajes de clase turista. Por favor elija cuantos pasajes quiere comprar"))
            total = total * pasajes
            alert (`Sus pasajes son ${pasajes} y la totalidad de su precio es ${total}`)
    }
    else{
        alert("Lamentablemente no tenemos ese destino por el momento, sepa disculparnos.")
    }
    //Calcular 21%iva
}

//Informacion de los pasajeros
function informacionUsuario(){
    let cantidadPasajeros = parseInt(prompt("Por favor volver a ingresar la cantidad de pasajeros para corroborar la informacion"))
    prompt("Correo del encargado de comprar los pasajes")
    alert("Por favor completar la informacion del pasajero/a o todos/as los/as pasajeros/as")
    for(let i = 1; i <=cantidadPasajeros; i++){
    let info = parseInt(prompt(`Ingrese nombre y apellido, dni y edad, del pasajero N° ${i}`))
    }
    alert("Ahora le mandaremos un correo a su email para corroborar toda la informacion y el medio de pago")
}

//Infomracion de vuelos

class Vuelo {
    constructor(destino, precio){
        this.destino = destino,
        this.precio = precio
    }
}

const vuelo1 = new Vuelo("Miami", 120000)

const vuelo2 = new Vuelo("Rio de Janeiro", 68000)

const vuelo3 = new Vuelo("Nueva york", 150000)

const vuelo4 = new Vuelo("Punta cana", 119000)

const vuelo5 = new Vuelo("Sao paulo", 53000)

const vuelo6 = new Vuelo("Nueva York", 150000)

const vuelo7 = new Vuelo("Santiago de Chile", 23000)

const vuelo8 = new Vuelo("Quito", 144000)

const vuelo9 = new Vuelo("Bogotá", 105000)

const vuelo10 = new Vuelo("Asunción", 40000)

const vuelo11 = new Vuelo("Lima", 108000)

const vuelo12 = new Vuelo("Montevideo", 17000)

const aeropuerto = [vuelo1, vuelo2, vuelo3, vuelo4, vuelo5, vuelo6, vuelo7, vuelo8, vuelo9, vuelo10, vuelo11, vuelo12]

//Informacion de vuelos

function verVuelos(array){
    console.log("Bienvenido! Nuestros vuelos disponibles son:")
    array.forEach((vuelo)=>{
        console.log(vuelo.destino, vuelo.tiempo, vuelo.precio)
    })
}

//Buscar informacion de vuelos

function buscarVuelos(array){
    let vueloBuscado = prompt("Ingrese el lugar a donde desea viajar")
    let vueloEncontrado = array.find(
        (book)=> book.destino.toLowerCase() == vueloBuscado.toLowerCase())
    if(vueloEncontrado == undefined){
        alert(`El vuelo ${vueloBuscado} no esta disponible en estos momentos`)
    }
    else{
        console.log(vueloEncontrado)
    }
}

//Alojamiento

class Hotel{
    constructor(nombre, ubicacion, precio1){
        this.nombre = nombre,
        this.ubicacion = ubicacion,
        this.precio1 = precio1
    }
}

const hotel1 = new Hotel("Bahia Principe Grand Aquamarine", "Punta cana", "58.653$ por noche")

const hotel2 = new Hotel("Fortune House Hotel Suites", "Miami", "77.504$ por noche")

const hotel3 = new Hotel("The Washington", "Nueva york", "43.372$ por noche")

const hotel4 = new Hotel("Hilton Rio De Janeiro Copacabana", "Rio de Janeiro", "70.056$ por noche")

const hotel5 = new Hotel("Courtyard by Marriott Cancun Airport", "Cancun", "44.624 por noche")

const hoteles = [hotel1, hotel2, hotel3, hotel4, hotel5]

function alojamiento(array){
    console.log("Bienvenido! Nuestros hospedajes disponibles son:")
    array.forEach((hotel)=>{
        console.log(hotel.nombre, hotel.ubicacion, hotel.precio1)
    })
}

//Menu

function menu(){
    let salirMenu = false
    do{
        salirMenu = preguntarOpcion(salirMenu)
    }while(!salirMenu)
}

function preguntarOpcion(salir){
    let opcionIngresada = parseInt(prompt(`Ingrese la opcion deseada
            1 - Vuelos
            2 - Buscar vuelos
            3 - Alojamiento 
            4 - Compra tu pasaje!
            0 - Salir del menu`))
    
        switch(opcionIngresada){
            case 1:
                verVuelos(aeropuerto)
            break
            case 2: buscarVuelos(aeropuerto)
            break
            case 3: alojamiento(hoteles)
            break
            case 4: 
                elegirPartida()
                elegirDestino()
                informacionUsuario()
            case 0:
                console.log("Gracias por confiar en nosotros!")
                salir = true
                return salir
            break
            default:
                console.log("Por favor ingrese una opcion correcta")
            break
        }
        
}

menu()