const cipher = {
  encode: (offset, string) => {
    //se ingresa la funcion encode con sus parametros offset, que es el numero de desplazamiento
    // y string que es el texto a codificar
    if (typeof offset != "number"){throw new TypeError("No es un número");
    }
    if (typeof string != "string"){throw new TypeError("No es un texto");
    }
    //se usan dos if para saber mediante typeof el tipo de valor que ingresa en los parametros
    //y devuelva o arroje (throw) una nueva construccion (new) denominada("...")
    let resultado="";
    //declaramos la variable resultado inicializandola con un string
      for (let i=0; i<(string.length);i++){
      //ingresamos un bucle en el cual cuando la variable i sera igual a 0, i sera menor a la longitud del string y aumentara en 1
      let codeAsx = string.charCodeAt(i);
      //la variable codeAsk sera igual al codigo ascii (ej alt+65 es A) del ultimo en la cadena
        if(codeAsx >=65 && codeAsx <=90){
        //si la variable codeAsx sera mayor o igual a 65 y (&& para q se cumplan 2 a mas condiciones) menor o igual a 90 q ue seria el alfabeto
          resultado += String.fromCharCode(((codeAsx-65+offset)%26)+65);
          //entonces la variable resultado va a (+= aumentar en 1) convirtiendo el valor ascii en caracteres mediante la formula
          //la cual indica el codeAsx menos 65 que es su posicion mas la cantidad de posiciones a desplazar por el residuo de 26 (vueltas) mas 65
        }
        else{
          resultado += string[i];
          //si no se cumple lo indicado en el if entonces la variable resultado sera lo mismo ingresado en el string
        }
      }
	return resultado;
  },


  decode: (offset, string) => {
    if (typeof offset != "number"){throw new TypeError("No es un número");
    }
    if (typeof string != "string"){throw new TypeError("No es un texto");
    }
    let rEsultado="";
      for (let i=0; i<(string.length);i++){
      let codeAsx = string.charCodeAt(i);
        if(codeAsx >=65 && codeAsx <=90){
          rEsultado += String.fromCharCode(((codeAsx+65-offset)%26)+65);
          //cambia la operacion de menos a mas para que se dirija hacia la izquierda
        }
        else{
          rEsultado += string[i];
        }
      }
   return rEsultado;
    }
  };
  export default cipher;


























