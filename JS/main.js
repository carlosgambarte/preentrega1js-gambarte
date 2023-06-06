

alert("BIENVENIDO AL TEST DE FUMADORES")

function agregarnombre() {
    let nombreingresado = prompt("ingrese su nombre ")
    let apellidoingresado = prompt("ingrese su apellido")
    let edadingresada = parseInt(prompt("ingrese su edad"))
    mostrardatos(nombreingresado, apellidoingresado, edadingresada)


}

function mostrardatos(nombre, apellido, edad) {
    console.log(`su nombre es  ${nombre} su apellido es  ${apellido} su edad es ${edad}`);



}

let salirMenu = false

do {

    
    let opcionIngresada = parseInt(prompt(`Ingrese la opción deseada
   1 - Agregar nombre, apellido , edad
   2 - cuantos cigarrillos fuma por dia y por semana
   0 - Salir del menu`))

    switch (opcionIngresada) {
        case 1:
            agregarnombre()
            break
        case 2:
           
           let pordia =parseInt (prompt("¿cuantos cigarrillos fuma por dia?"))
            console.log(`usted fuma ${pordia} por dia`);
        
            let diassemana = parseInt (prompt("¿cuantos dias fuma por semana?"))
            console.log(`usted fuma ${diassemana} dias por semana`);
            

            let total= (pordia*diassemana)
            alert(`usted fuma ${total}  cigarrillos por semana`);
            console.log( `usted fuma ${total}  cigarrillos por semana`);

            if (total  <= 5) {
                alert( "usted es un Fumador pasivo")
                console.log("usted es un fumador pasivo");
                
            } else if (total <=15) {
                alert ("usted es un Fumador moderado")
                console.log("usted es un fumador moderado");
                
            } else {
                alert ("usted es un Fumador severo")
                console.log("usted es un fumador severo");
            }
            
            break
            
        case 0:
            alert ("GRACIAS POR COMPLETAR NUESTRO TEST, NO OLVIDE VISITAR A SU MEDICO ")
            console.log(`Gracias por completar nuestro test. Saludos!`)
           
            salirMenu = true
            break
        default:
            console.log("Opción no válida, ingrese alguna presente en el menu")
            alert("Opción no válida, ingrese alguna presente en el menu")
            break


    }
} while (!salirMenu)
 
