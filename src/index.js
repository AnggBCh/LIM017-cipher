
import cipher from "./cipher.js";

const buttonCifrar = document.getElementById("cifrar");
//su buscara el id cifrar para asignarlo a la variable buttonCifrar
buttonCifrar.addEventListener("click", function(){
  //la variable boton cifrar detectara en evento que al hacer click realizara la funcion dada
  const mensaje=document.getElementById("mensaje").value;// la variable mensaje tomara el valor del id mensaje
  const desplazamiento = document.getElementById("desplazamiento").value;//la variable desplazamiento tomara el valor del id desplazamiento
  const offset=parseInt(desplazamiento);//luego lo que hara parseInt es convertir en numero entero la cifra del desplazamiento
  const string=mensaje.toUpperCase();//luego declaro una nueva variable string para convertir el mensaje a mayuscula
  const result=cipher.encode(offset, string);// la variable result sera asignada con la funcion cipher q traemos del cipher.js
  document.getElementById("resultado").innerHTML=result;
  //asi a la variable result le asignaremos el lugar de id=resultado que lo invocaremos del html
  });

  document.getElementById("mensaje").addEventListener("keyup", function() {
    this.value = this.value.toUpperCase();
    //al id=mensaje lo volveremos a mayusculas al momento del ingreso te texto (keyup) realizando la funcion anonima
  });

const buttonDescifrar = document.getElementById("descifrar");
buttonDescifrar.addEventListener("click", function(){
  const desplazamiento=document.getElementById("desplazamiento").value;
  const mensaje = document.getElementById("mensaje").value;
  const offset=parseInt(desplazamiento);
  const string=mensaje.toUpperCase();
  const result=cipher.decode(offset, string); //traeremos la funcion decode del cipher.js
  document.getElementById("resultado").innerHTML=result;
  });









