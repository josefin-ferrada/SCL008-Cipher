window.cipher = {
    
    encode:(offset,frase)=>{

        if ( offset === "" || frase === "" || isNaN(offset) ) {

            return false;

        }

        else {
            let result ="";
            let cadaAscii= 0;
            let asciiNuevo =0;
            let numero = parseInt(offset);
            
            
            for (let i = 0; i< frase.length ; i++){

                cadaAscii = frase.charCodeAt(i);

                if(cadaAscii >= 32 && cadaAscii <= 64){
                    asciiNuevo =(cadaAscii - 32 + (numero))%33 + 32;
                    result += String.fromCharCode(asciiNuevo);
                }
                else if (cadaAscii >= 97 && cadaAscii<= 122) {

                    asciiNuevo = (cadaAscii- 97 + (numero))%26 + 97
                    result += String.fromCharCode(asciiNuevo);
                }
                else if (cadaAscii >= 65 && cadaAscii <= 90){

                    asciiNuevo = (cadaAscii- 65 + (numero)) % 26 + 65;
                    result += String.fromCharCode(asciiNuevo);
                }
                
            }
            return result;
        }
    }
    

    ,decode: (offset,frase) => {
        if ( offset === "" || frase === "" || isNaN(offset) ) {

            return false;

        }

    
        else {
            let result ="";
            let cadaAscii= 0;
            let asciiNuevo =0;
            let numero = parseInt(offset);
            
            
            for (let i = 0; i< frase.length ; i++){

                cadaAscii = frase.charCodeAt(i);

                if(cadaAscii >= 32 && cadaAscii <= 64){ 
                    asciiNuevo =(cadaAscii - 64 - (numero))%33 + 64;
                    result += String.fromCharCode(asciiNuevo);
                }
                else if (cadaAscii >= 97 && cadaAscii<= 122) {

                    asciiNuevo = (cadaAscii- 122 - (numero))%26 + 122;
                    result += String.fromCharCode(asciiNuevo);
                }
                else if (cadaAscii >= 65 && cadaAscii <= 90){

                    asciiNuevo = (cadaAscii- 90 - (offset)) % 26 + 90;
                    result += String.fromCharCode(asciiNuevo);
                }
                
            }
        return result;
        }
    }

}