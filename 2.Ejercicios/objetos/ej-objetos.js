/* Ejercicios con Objetos en JS */

//ej1(); // Obj alumno y método que promedia notas
//ej2(); // Obj para calcular el precio neto de un producto
//ej3(); // Obj para calcular la densidad de una piedra en kg/m3 y en g/cc
//ej4(); // Obj que representa a una cuenta bancaria
//ej5(); // Obj ficha de entrenamiento
ej6();
//ej7();

// Ej 1 - Obj para guardar notas de alumno y método que promedia notas
    // Propiedades: nombre, apellido, ingles, prog, html (asignaturas)
    // Método: calcular media de las tres asignaturas
function ej1(){
    let alumno = {
        "nombre": "Pepe",
        "apellido": "Valiente",
        "ingles": 7.5,
        "prog": 6.75,
        "html": 8,
        "promediarNotas": function(){
            let ingles = this.ingles; 
            let prog = this.prog;
            let html = this.html;
            let res = (ingles + prog + html) / 3 
            return res.toFixed(2);

            // Alternativa del return sin variables adicionales:
            //return ( (this.ingles + this.prog + this.html) / 3 ).toFixed(2); 
        }
    }
    escribirResultado("Promedio de notas", alumno.promediarNotas())
}

// Ej 2 - Cálculo del precio neto de un producto aplicando descuento
function ej2(){
    let producto = {
        "precio": 200,      // €
        "descuento": 30,    // Esto es un % -> tanto por ciento
        "calcularPrecioNeto": function(){
            let valorDescontado = (this.descuento / 100) * this.precio; // €
            return this.precio - valorDescontado;
        }
    }
    escribirResultado("Calculamos precio neto", producto.calcularPrecioNeto() + " €")
}

// Ej 3 - Objeto piedra que tiene masa y volumen a partir de lo cual de calcula densidad
function ej3(){
    let piedra = {
        "color": "grisáceo",
        "origen": "Islas volcánicas",
        "materiales": ["silicio", "calcio"],
        "masaKg": 1.5,          // kg   
        "masaGr": 1.5 * 1000,
        "volumenCc": 100,
        "volumenM3": 0.001,
        "calcDensidadKgM3": function(){
            // densidad = masa (kg) / volumen (m3)
            return (this.masaKg / this.volumenM3).toFixed(5); // kg/m3
        },
        "calcDensidadGrCc": function(){
            // densidad = masa (gr) / volumen (cc)
            return (this.masaGr / this.volumenCc).toFixed(5); // gr/cc
        }
    }
    // escribirResultado("Densidad en kg/m3:", piedra.calcDensidadKgM3() + " kg/m3");
    escribirResultado("Densidad en gr/cc:", piedra.calcDensidadGrCc() + " g/cc")
}

// Ej 4 - Objeto que emula una cuenta de banco con ingresar() y retirar()
    // consultarSaldo() escribe el saldo actual
function ej4(){
    let cuenta = {
        "balance": 100.00,     // €
        "ingresar": function(cantidad){
            this.balance += cantidad;    // limitamos los decimales a 2
            console.log("Balance actual: " + this.balance)
            return this.balance.toFixed(2) + " €";
        },
        "retirar": function(cantidad){
            if(cantidad > this.balance){
                alert("No se puede retirar esa cantidad");
                return 0;
            } else if(cantidad < 0){
                alert("No se admiten cantidades negativas");
                return 0;
            }
            this.balance -= cantidad;    // limitamos los decimales a 2
            return cantidad.toFixed(2);
        },
        "consultarBalance": function(){
            return this.balance + " €";
        }
    }
    // escribirResultado("Retirar 200 €: ", cuenta.retirar(200));
    // escribirResultado("Retirar -1 €: ", cuenta.retirar(-1));
    // escribirResultado("Retirar 50 €: ", "Balance retirado: " + cuenta.retirar(50) + " €");
    escribirResultado("Ingresamos una cantidad con decimales €: ", cuenta.ingresar(10.12345));
    
}

// Ej 5 - Ficha de entrenamiento
function ej5(){
    let ficha = {
        "nombre": "Pepe",
        "apellido": "Grande",
        "sesiones": 0,      // float de km -> 1.56
        "numSesiones": 0,   // int
        "anotarSesion": function(kms){
            // Deberíamos validar que kms no sea negativo
            if( kms < 0 ){
                let msj = "No se pueden registrar valores negativos";
                alert(msj);
                return msj;
            }
            this.sesiones += kms;   // Guardamos los km de todas sesiones
            this.numSesiones += 1;  // Incrementamos el contador de sesiones
            return this.sesiones + " km"
        },
        "calcMedia": function(){
            // Hay que evitar división por cero
            if( this.sesiones == 0 ){ 
                alert("¡Aún no hay realizado una sesión!"); 
                return "No hay sesiones registradas"
            }
            return (this.sesiones / this.numSesiones).toFixed(2) + " km por sesión";
        }
    }
    // escribirResultado("Anotar -1 km: ", ficha.anotarSesion(-1));    // Debe arrojar alert
    // escribirResultado("Media con 0 sesiones: ", ficha.calcMedia())  // Debe arrojar alert
    escribirResultado("Anotar +10 km: ", ficha.anotarSesion(10));   // Debe retornar '10 km'
    ficha.anotarSesion(20);
    ficha.anotarSesion(70);
    escribirResultado("Calculamos media en ficha de " + ficha.nombre, ficha.calcMedia());     // Debe retornar '10 km por sesión'
}

// Ej 6∫
function ej6(){
    //
    /*
    let bus = {
        "linea": "Línea 1",
        "empresa": "Empresa 123",
        "capacidad": 40,
        "pasajeros": 0,
        "conductor": {
            "nombre": "José",
            "licencia": 1234
        },
        "subir": function(pasajerosQueSuben){
            // Comprobamos capacidad
            if(this.pasajeros + pasajerosQueSuben >= this.capacidad){
                this.pasajeros = this.capacidad; // 39 + 39 = 78 -> NO
                return this.pasajeros;
            }else{
                // 10 + 11 = 21 -> SI
                this.pasajeros += pasajerosQueSuben;
                return this.pasajeros;
            }
        },
        "bajar": function(pasajerosQueBajan){
            // Las restas negativas son 0
            if(pasajerosQueBajan >= this.capacidad){ 
                this.pasajeros = 0; // 100 -> 0
                return this.pasajeros;
            } 
            else if(pasajerosQueBajan > this.pasajeros){ 
                this.pasajeros = 0; // Hay 21 y bajan 50 -> 0
                console.log(this.pasajeros)
                return this.pasajeros;
            } 
            this.pasajeros -= pasajerosQueBajan;
            return this.pasajeros;
        }
    }*/

    class Bus{
        constructor(capacidad){
            this.capacidad = capacidad;
            this.pasajeros = 0;
            this.conductor = new Conductor();
        }
        subir(pasajeros){
            if(this.capacidad >= this.pasajeros + pasajeros) this.pasajeros += pasajeros;
            else this.pasajeros = this.capacidad;
            
            return this.pasajeros;
        }
        bajar(pasajeros){
            if(pasajeros > this.pasajeros) this.pasajeros = 0;
            else this.pasajeros -=pasajeros;
            return this.pasajeros;
        }
    }
    class Conductor{
        constructor(nombre, licencia){
            this.nombre = nombre;
            this.licencia = licencia;
        }
    }

    let bus = new Bus(40);
    bus.conductor = new Conductor("Jose", 1234);
    /* En consola podemos ver el valor de this.pasajeros antes de cada return */
    escribirResultado("Suben 25 pasajeros: ", bus.subir(25)); // 25
    escribirResultado("Suben 35 pasajeros: ", bus.subir(35)); // 25 + 35 -> capacidad -> 40
    escribirResultado("Bajan 45 pasajeros: ", bus.bajar(45)); // 0
}
function ej7(){
    //
    let articulo = {
        "proveedor": {
            "nombre":"TecnoShop", 
            "email":"tcn@tecno.com", 
             "telefono":1234567
        },
        "nombre":"monitor",
        "precio":"precio",
        "telefono": function(){
            return  {"nombre": this.proveedor.nombre, "telefono": this.proveedor.telefono}; 
        }
    }
    
    let obj = articulo.telefono();

    escribirResultado("Telefono ", "Proveedor: " + obj.nombre + " Tlf:" + obj.telefono);     // Debe retornar '10 km por sesión'

    
    //let a = new Articulo(new Proveedor("TecnoShop", "tcn@tecno.com", 1234567), "monitor", 200);
    //a.telefono();
}
/*
class Proveedor{
    constructor(nombre, email, telefono){
        this.nombre = nombre;
        this.email = email;
        this.telefono = telefono;
    }
}
class Articulo{
    constructor(proveedor, nombre, precio){
        this.proveedor = proveedor;
        this.nombre = nombre;
        this.precio = precio;
    }
    telefono(){
        return this.proveedor.telefono;
    }
}*/

function ej8(){

    class Alumno {
        constructor(nombre, numMatricula){
            this.nombre = nombre;
            this.numMatricula = numMatricula;
            this.calificacion = 0;
        }
        calificar(nota){
            this.calificacion = nota;
        }
    }
    //
    let a1 = new Alumno("Jorge", 123)
    let a2 = new Alumno("Jorge", 123)
    let a3 = new Alumno("Jorge", 123)
    let a4 = new Alumno("Jorge", 123)
    let a5 = new Alumno("Jorge", 123)
    a1.calificar(10);
    escribirResultado("Nota", a1.calificacion);
}


function ej9(){
    class Cliente{
        constructor(nombre, email, telefono){
            this.nombre = nombre;
            this.email = email;
            this.telefono = telefono;
        }
    }
    
    class Factura{
        constructor(idCliente, total){
            this.idCliente = idCliente;
            this.total =total;
            this.estado = "pendiente";
        }
        cobrar(){
            this.estado = "pagada"
        }
        imprimir(){
            return "Id Cliente "+ this.idCliente + " Total: "+ this.total + " Estado: "+ this.estado;
        }
    }

    //
    let c1, c2, c3, arr, f1, txt;
    c1 = new Cliente("Manolo", "m@gmail.com", "123456");
    c2 = new Cliente("Manolo", "m@gmail.com", "123456");
    c3 = new Cliente("Manolo", "m@gmail.com", "123456");
    arr = [c1, c2, c3]
    f1 = new Factura(0, 300);

    txt = f1.imprimir() + "\n";
    f1.cobrar();
    txt += f1.imprimir();
    escribirResultado("Factura", txt);
}



// Funciones auxiliares
function escribirResultado(op, res){
    let div = document.getElementById("resultado");
    let descripcion = "";
    let resultado = "";
    // Lo que hemos calculado
    descripcion += "Operación realizada: " + op + "\n\n";
    // Resultado
    resultado += "Resultado:\n\n" + res;
    // Escribimos en el div
    div.innerText = descripcion;
    div.innerText += resultado;
}