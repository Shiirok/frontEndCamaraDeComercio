//------------------------
/* var url_string = "http://www.example.com/t.html?a=1&b=3&c=m2-m3-m4-m5"; //window.location.href
var url = new URL(url_string);
var a = url.searchParams.get("a");
console.log(a); */

//------------------------------

/* let url_destino = "https://example.com/?name=Jonathan%20Smith&age=18";
let url2 = new URL(url_destino);
let nombre = url2.searchParams.get('name');
console.log(nombre);
 */

/* ${temperatura} */
///---------------------------------------------





/* let gender; */
//cogemos datos del local storage
/* function obtenerLocalStorage() {
    if (localStorage.getItem('gender')) {
        gender = localStorage.getItem('gender');
        console.log(gender);
    } else {
        console.log("no hay nada almacenado");
    }
}
obtenerLocalStorage();
 */

const user = JSON.parse(localStorage.getItem('loguedUser'));
let gender = user.gender;

/* function obtenerLocalStorage() {
    if (localStorage.getItem('gender')) {
        gender = userGender;


        console.log(gender);
    } else {
        console.log("no hay nada almacenado");
    }
}
obtenerLocalStorage(); */




//cogemos clima de la url


function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}


let temperaturaURL = getParameterByName('temperatura');
console.log(temperaturaURL);


/* let url_tipomaleta = `http://127.0.0.1:5500/appLook.html?temperatura=${temperatura}window.location.href`;
let url = new URL(url_tipomaleta);
let temperatura = url.searchParams.get('temperatura');


 */


















//Funcion que cambia el json
/* function cambiarJSON(temperatura, sexo) {
    document.querySelector('#mostradorMaletas').src = `{..json/${tipoLook}/${clima2}/img/1.jpg`;;


} */

// Leer el JSON Y sacar las imagenes





///----------------------------------------------------------

//Función para traer el JSON DE LOS LOOKS ----------------------------------
var hombreCalor = [];
var hombreFrio = [];
var mujerCalor = [];
var mujerFrio = [];





var response;
var xhttp = new XMLHttpRequest(); //Pedimos una nueva request 

xhttp.onreadystatechange = function () {//cuando el servidor este listo
    if (this.readyState == 4 && this.status == 200) {//si el servidor es el estado 4 y estatus 200 , si todo es ok
        //Transformamos
        response = JSON.parse(xhttp.response); // Response es el JSON, luego lo parseo a objeto para que JS lo entienda, y lo meto en variable


        /*for (i = 0; i < response.lenght; i++); {
            var posicion = 0;
            var output = '';
            output = `${response[i]}`;
        }*/

        ///Pintamos  el primer modelo
        document.getElementById('mostradorMaletas').src = response[0].name;
    }



    ///-----------------btn que trae más modelos del mismo sexo y clima
    document.querySelector('.btn-roll').addEventListener('click', function otroModelo() {
        // numero ramdom
        var dado = Math.floor(Math.random() * response.length); //se pone así y no 7 , po que si no daca el indice 0, y en las img no lo tenemos asi

        //Muestro el numero radom con la img, haciendo el truco de 0 y 1
        var contenedorCaja = document.querySelector('#mostradorMaletas');
        document.getElementById('mostradorMaletas').src = `${response[dado].name}`

    });

};

/*  El metodo open: estpecifica la solicitud , y especificamos si 
-Por GET o POST
-Archivo Text, ph, xml, json, etc... 
-true/ false: metodo de envio / es true = asincrono/*/

xhttp.open("GET", `json/${gender}/${temperaturaURL}/prendas.json`, true);
xhttp.send();






//Funcion para traer cualquier JSON
/* function traer() {

    fetch(`json/${genero}/${temperatura2}/prendas.json`)
        .then(data => data.text()) //Hacemos una promesa de que lo haga y con data text, lo convertimos a txt
        .then(data => {
            var maleta = JSON.parse(`${data}`);

            for (i = 0; i < maleta.lenght; i++); {

                var output = '';
                output = `< img src = "${genero[i].name}" alt = "" > `
            }

            ///Pintamos  el primer modelo
            document.getElementById('mostradorMaletas').innerHTML = output;
        })
}

traer();
 */


