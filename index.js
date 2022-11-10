// let variable = "Hola mundo";
// alert (variable);
// console.log(variable);

// function saludo(){
// let nombre = "Luis";
// let variable = "Hi " +nombre;
// alert(variable);
// }
//  function suma(dato1,dato2){
//     let resultado=dato1+dato2;
//     alert ("El resultado es "+resultado);

//  }
//  prompt("Dame un numero");
//  suma(20,1);
//  suma(56,45);
//  suma(23,89);
// let numero = parseFloat (prompt("Dame un numero"));
// let numero2 = parseFloat (prompt("Dame un numero"));

// console.log( typeof (numero+numero2));

// document.write(numero+numero2);

let numeros =[3 ,"Gwen " ,true ,false ,"Hi "] 


// los arrays son variables combinadas que tienen un indice y comienza en 0

//el ciclo for es un bucle
//el scope es el alcance
for  (let index = 0; index < numeros.length; index++) { 
   
   console.log(numeros[index]);
document.write(numeros[index]+"<br>");
   
};
let variable = true;
if (variable) {
   document.write(variable);
}
if (variable) {
   document.write("Mi variable es true");
} else {
   document.write("Mi variable es false");
}
if (condition) {
   
} else {
   if (condition) {
      
   }else{

   }
}
switch (dia) {
   case "lunes":
      console.log("El dia es lunes");
      break;
   case "martes":
         console.log("El dia es martes");
         break;

      default:
      console.log("Es otro dia de la semana");
      break;
}