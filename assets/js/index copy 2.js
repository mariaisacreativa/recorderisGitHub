/*Crear un objeto de tipo automovil en javascript*/
/*
Carro:
Atributos--> modelo, color, numeroDePuertas, numeroDeEjes, tipoDireccion(hidraulica,asistidaElectronicamente)
Acciones---> acelerar, frenar, pitar.
*/

class Carro {
    constructor(modelo, color, numPuertas, numEjes, capacidaMotor, tipoDir){
       this.modelo = modelo
       this.color = color
       this.numeroPuertas = numPuertas
       this.numeroEjes = numEjes
       this.capacidadMotor = capacidaMotor
       this.tipoDireccion=tipoDir
       this.estado = "Parado"
    }

    encender(){
        this.estado = "Encendido"
        console.log("encendiendo vehiculo!!!")
    }
    acelar() {
        this.estado = "Acelerando"
        console.log("Acelerando!!!!")
    }
    frenar(){
        this.estado = "Frenando"
        console.log("Frenando!!!")
    }
    pitar(duracion){
        console.log("voy a pitar por "+duracion+" segundos")
    }
}

var corvette = new Carro("chevrolet","rojo","2","2","2","Electronica")
console.log(corvette.modelo)

var _4runner = new Carro("toyota","blanco","4","2","4","electronica")
console.log(_4runner.modelo)


_4runner.acelar()

console.log(_4runner.estado)
console.log(corvette.estado)
corvette.acelar()
console.log(corvette.estado)