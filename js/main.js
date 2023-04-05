//LOG IN USUARIO//

let passGuardado="vs1404"; 
let nombreUsuario= prompt("Ingrese su nombre de usuario");
let login = false; 

    if (nombreUsuario !=""){
    
    for (let i =2; i>=0; i--){
        let passIngresado= prompt("Ingrese su pass. Tienes " + (i+1) + " intentos");
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


//PREFERENCIAS USUARIO//

if (login) {

function Perfume (marca, anio, notas, flia , pais){
    this.marca=marca;
    this.anio=anio;
    this.notas=notas;
    this.flia=flia;
    this.pais=pais;
    this.fichausuario = function (){
        alert("Felicitaciones " + nombreUsuario + ". Ya tienes tu ficha de perfume personalizada\n" +  "Marca: " + this.marca + "\nAño: " + this.anio + "\nNotas: " + this.notas + "\nFamilia: " + this.flia + "\nPaís: " +this.pais)}    
}

let marca=prompt("Elegí la marca: \n1-Victoria's Secret\n2-Natura\n3-Jequiti\n4-Guerlain");

while(marca != "1" && marca != "2" && marca != "3" && marca != "4"){
    alert("Opción no válida");
    marca=prompt(
        "Elegí la marca: \n1-Victoria's Secret\n2-Natura\n3-Jequiti\n4-Guerlain"
    );
}
switch(marca){
    case "1":
        marca="Victoria's Secret";
        break;
    case "2":
        marca="Natura";
        break;
    case "3":
        marca="Jequiti";
        break;
    case "4":
        marca="Guerlain";
        break;        
}

let anio=prompt("Elegí el año: \n1-1998\n2-2003\n3-2015\n4-2022");

while(anio != "1" && anio != "2" && anio != "3" && anio != "4"){
    alert("Opción no válida");
    anio=prompt(
        "Elegí el año: \n1-1998\n2-2003\n3-2015\n4-2022"
    );
}
switch(anio){
    case "1":
        anio="1998";
        break;
    case "2":
        anio="2003";
        break;
    case "3":
        anio="2015";
        break;
    case "4":
        anio="2022";
        break;        
}


let notas=prompt("Elegí las notas: \n1-Almizcle\n2-Vainilla\n3-Jazmín\n4-Bergamota\n5-Cedro");

while(notas != "1" && notas != "2" && notas != "3" && notas != "4" && notas != "5"){
    alert("Opción no válida");
    notas=prompt(
        "Elegí las notas: \n1-Almizcle\n2-Vainilla\n3-Jazmín\n4-Bergamota\n5-Cedro"
    );
}
switch(notas){
    case "1":
        notas="Almizcle";
        break;
    case "2":
        notas="Vainilla";
        break;
    case "3":
        notas="Jazmín";
        break;
    case "4":
        notas="Bergamota";
        break;
    case "5":
        notas="Cedro";
        break;          
}


let flia=prompt("Elegí la familia olfativa: \n1-Floral\n2-Cítrica\n3-Amaderada");

while(flia != "1" && flia != "2" && flia != "3"){
    alert("Opción no válida");
    flia=prompt(
        "Elegí la familia olfativa: \n1-Floral\n2-Cítrica\n3-Amaderada"
    );
}
switch(flia){
    case "1":
        flia="Floral";
        break;
    case "2":
        flia="Cítrica";
        break;
    case "3":
        flia="Amaderada";
        break;
}


let pais=prompt("Elegí el origen: \n1-Francia\n2-Italia\n3-Estados Unidos\n4-Brasil");

while(pais != "1" && pais != "2" && pais != "3" && pais != "4"){
    alert("Opción no válida");
    pais=prompt(
        "Elegí el origen: \n1-Francia\n2-Italia\n3-Estados Unidos\n4-Brasil"
    );
}
switch(pais){
    case "1":
        pais="Francia";
        break;
    case "2":
        pais="Italia";
        break;
    case "3":
        pais="Estados Unidos";
        break;
    case "4":
        pais="Brasil";
        break;        
}


const perfumeUsuario= new Perfume (marca, anio, notas, flia , pais);
console.table(perfumeUsuario);
perfumeUsuario.fichausuario()


//ARRAY DE OBJETOS PERFUMES//

const perfumes =[
    {nombre: "Miss Dior Blooming", marca: "Dior", familia: "Floral", notas:"Jazmín", estrellas:3},
    {nombre: "Mefisto", marca: "Xerjoff", familia: "Cítrico", notas:"Bergamota", estrellas:2},
    {nombre: "Gucci Guilty", marca: "Gucci", familia: "Amaderado", notas:"Cuero", estrellas:4},
    {nombre: "5th Avenue", marca: "Elizabeth Arden", familia: "Floral", notas:"Lila", estrellas:5},
    {nombre: "Light Blue", marca: "Dolce&Gabbana", familia: "Cítrico", notas:"Mandarina", estrellas:5},
]


//FILTRO POR MAS VOTADOS//

const masVotados = perfumes.filter((elem) => elem.estrellas >= 4);
console.log(masVotados);

//FILTRO POR NOMBRE DE PERFUME//

let ingresaNombre=prompt("Ingresa el nombre del perfume");
const busquedaUsuario=perfumes.filter(elem =>{
    return elem.nombre.includes(ingresaNombre)
})
console.log(busquedaUsuario);


//AGREGAR A FAVORITOS//

const favoritos=[];
favoritos.push(busquedaUsuario);
console.log(favoritos);

} else{
    alert("Escribinos a fragrantica@mail.es para recuperar tus datos de ingreso");
}