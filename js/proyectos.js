//1. Creamos el arreglo que contendra los objetos card
const proyectos = [
    {
        titulo:'Encriptador Texto',
        imagen:'./asset/img/encriptador.jpg',
        descripcion:'Desarrollado con HTML5, CCS, JavaScript',
        enlace:'https://jhontrujillo.github.io/encriptador/',
    },
    {
        titulo:'Batalla Mascotas',
        imagen:'./asset/img/batalla mascotas.jpg',
        descripcion:'Desarrollado con HTML5, CCS, JavaScript',
        enlace:'https://batalla-mascotas-v2-0.vercel.app/',
    }
        
];

//2. Seleccionamos por id el contenedor que tendra las card.
let card = document.getElementById("portafolio")

//3. con el interador for recorremos los objetos del arreglo y creamos los elemento de cada objeto.
// for(inicializacion, condicion, incremento).  escolaridad es el arreglo y .length cuenta los objetos del arreglo.
for(let i = 0; i < proyectos.length; i++) {

    let creatarjeta = document.createElement("div"); //creamos variable que almacena la creacion de un div.
    creatarjeta.className = "creartarjeta"; // Se le asigna una Class al div creado en la linea anterior.

        let titulo = document.createElement("h3"); //Creamos variable que almacena creacion de una etiqueta h3.
        let imagen = document.createElement("img"); //creamos variable que almacena creacion de una etiqueta img.
        let descripcion = document.createElement("p"); //creamos variable que almacena creacion de una etiqueta p.
        let enlace = document.createElement("a"); //creamos variable que almacena la creacion de etiqueta a.
        
        //se llama la variable titulo y con .textContent asignamos el titulo = escolaridad[objeto].titulo.
        titulo.textContent = proyectos[i].titulo; 
        imagen.setAttribute('src', proyectos[i].imagen);
        descripcion.textContent = proyectos[i].descripcion; 
        enlace.setAttribute('href', proyectos[i].enlace);
        enlace.textContent = ("Visitar");

        //llamamos el div creartarjeta y con .appendChild agregamos cada uno de sus hijos.            
        creatarjeta.appendChild(titulo);
        creatarjeta.appendChild(imagen);
        creatarjeta.appendChild(descripcion);
        creatarjeta.appendChild(enlace);

        // llamamos variable card el cual contiene el elemento que sera el contenedor global y con .appendChild agregamos la tarjeta
        card.appendChild(creatarjeta); 
        
}

 