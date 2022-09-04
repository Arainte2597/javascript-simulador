


    let nombre = prompt("Ingresa tu nombre");
   let apellido = prompt("Ingresa apellido");    
   let edad = prompt("Ingresa tu edad")
   
   while(edad < 18){
     alert("No podes comprar! volve cuando tengas 18!")
   }


 function saludar(){
     alert("Hola " + nombre +" " + apellido + " Bienvenido a la mejor vinoteca de Buenos Aires!");
 }

 saludar()
let ofertas = prompt("Nuestros vinos \n 1-Catena Malbec \n 2-Catena Zapata \n 3-El Enemigo \n 4-Luigi Bosca \n 5-Salentein \n 6-Partridge ");
switch (ofertas) {
    case "1":
        alert("seleccionaste Catena Malbec $2000")
        let comprar = prompt("Con cuanto vas a abonar?");
        while( comprar < 2000){
            alert("Dinero insuficiente!")
        }
        while(comprar > 2000){
            alert("Perfecto , Abonalos en cualquiera de nuestros locales!")
        }
        break;
    case "2":
        alert("Seleccionaste Catena Zapata $2500")
        while( comprar < 2500){
            alert("Dinero insuficiente!")
        }
        while(comprar > 2500){
            alert("Perfecto , Abonalos en cualquiera de nuestros locales!")
        }
        break;
    case "3":
        alert("Seleccionaste El Enemigo $1500")
        while( comprar < 1500){
            alert("Dinero insuficiente!")
        }
        while(comprar > 1500){
            alert("Perfecto , Abonalos en cualquiera de nuestros locales!")
        }
        break;
    case "4":
        alert("Seleccionaste Luigi Bosca $1800")
        while( comprar < 1800){
            alert("Dinero insuficiente!")
        }
        while(comprar > 1800){
            alert("Perfecto , Abonalos en cualquiera de nuestros locales!")
        }
        break;
    case "5":
        alert("Seleccionaste Salentein $6000")
        while( comprar < 6000){
            alert("Dinero insuficiente!")
        }
        while(comprar > 6000){
            alert("Perfecto , Abonalos en cualquiera de nuestros locales!")
        }
        break;
    case "6":
        alert("Seleccionaste Partridge $600")
        while( comprar < 600){
            alert("Dinero insuficiente!")
        }
        while(comprar > 600){
            alert("Perfecto , Abonalos en cualquiera de nuestros locales!")
        }
        break;

    default:
        alert("Opcion no valida")
        break;
}
let comprar = prompt("Con cuanto vas a abonar?");
