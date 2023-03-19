//LOG IN USUARIO//

let passGuardado="vs1404"; 
let nombreUsuario= prompt("Ingrese su nombre de usuario");
let login = false;

    if (nombreUsuario !=""){

    for (let i =0; i<2; i++){   
    let passIngresado= prompt("Ingrese su pass");
    if (passIngresado==passGuardado){
    alert("Hola " + nombreUsuario + "! Ya podés empezar a armar tu ficha de perfumes personalizada");
    login = true;
    break;
    }else{
    alert("Pass incorrecto");
}
} 
}else{
    alert("Campos requeridos");
}

//3 PASOS CON OPCIONES PARA LA FICHA PERSONALIZADA//

if (login) {

    let marcaUsuario="";

    let opcionMarca=prompt(
        "Elegí la marca del perfume:\n1-Victoria's Secret\n2-Natura\n3-Jequiti\n4-Guerlain"
    );
    while(opcionMarca != "1" && opcionMarca != "2" && opcionMarca != "3" && opcionMarca != "4"){
        alert("Opción no válida");
        opcionMarca=prompt(
            "Elegí la marca del perfume:\n1-Victoria's Secret\n2-Natura\n3-Jequiti\n4-Guerlain"
        );
    }
    switch(opcionMarca){
    case "1":
        console.log(marcaUsuario="Marca: Victoria's Secret");
        break;
    case "2":
        console.log(marcaUsuario="Marca: Natura");
        break;
    case "3":
        console.log(marcaUsuario="Marca: Jequiti");
        break;
    case "4":
        console.log(marcaUsuario="Marca: Guerlain");
        break;       
}

let notasUsuario="";

let opcionNotas=prompt(
    "Elegí las notas preferidas:\n1-Almizcle\n2-Vainilla\n3-Jazmín\n4-Bergamota\n5-Cedro"
);
while(opcionNotas != "1" && opcionNotas != "2" && opcionNotas != "3" && opcionNotas != "4" && opcionNotas != "5"){
    alert("Opción no válida");
    opcionNotas=prompt(
        "Elegí las notas preferidas:\n1-Almizcle\n2-Vainilla\n3-Jazmín\n4-Bergamota\n5-Cedro"
    );
}
switch(opcionNotas){
case "1":
    console.log(notasUsuario="Notas: Almizcle");
    break;
case "2":
    console.log(notasUsuario="Notas: Vainilla");
    break;
case "3":
    console.log(notasUsuario="Notas: Jazmín");
    break;
case "4":
    console.log(notasUsuario="Notas: Bergamota");
    break;
case "5":
    console.log(notasUsuario="Notas: Cedro");
    break;
}

let fliaUsuario="";

let opcionFlia=prompt(
    "Elegí la familia olfativa:\n1-Floral\n2-Cítrica\n3-Amaderada"
);
while(opcionFlia != "1" && opcionFlia != "2" && opcionFlia != "3"){
    alert("Opción no válida");
    opcionFlia=prompt(
        "Elegí la familia olfativa:\n1-Floral\n2-Cítrica\n3-Amaderada"
    );
}
switch(opcionFlia){
case "1":
    console.log(fliaUsuario="Familia olfativa: Floral");
    break;
case "2":
    console.log(fliaUsuario="Familia olfativa: Cítrica");
    break;
case "3":
    console.log(fliaUsuario="Familia olfativa: Amaderada");
    break;
}

//MENSAJE CON LA FICHA LISTA SEGÚN PREFERENCIAS DEL USUARIO//

    function opcionesUsuario(marca,nota,familia){
    alert("Felicitaciones " + nombreUsuario +"."+ " Ya tienes tu ficha personalizada.\nTus opciones son:\n" + marca + "\n"+ nota +"\n"+  familia);
}
    opcionesUsuario(marcaUsuario,notasUsuario,fliaUsuario);

//MENSAJE EN CASO DE QUE SE INGRESE MAL LA CONTRASEÑA EN TODOS LOS INTENTOS//  

} else{
    alert("Escribinos a fragrantica@mail.es para recuperar tus datos de ingreso");
}



