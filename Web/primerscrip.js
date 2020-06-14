//variables
/*var gato="gatoooooo"; // var se usa en el ambito global
let cat="miauuuu"; // let se usa en bloques de codigos(recomendado)
console.log("ggggg",cat);
{
    cat="gatito";
}
console.log("ggggg",cat);*/

//constantes
/*const pi=3.1416;
const objeto={
    nombre: "daniel",
    edad: 21
};
const colores=["blanco","verde","rojo"];
console.log(objeto);
console.log(colores);
objeto.correo="ontanedaeduardo@gmail.com"
colores.push("violeta");
console.log(objeto);
console.log(colores);*/

//Cadenas(String)
/*let nombre="daniel";
let apellido="pereyra";
let lorem="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa similique iure corrupti, fuga numquam suscipit ipsam adipisci cupiditate! Totam quidem unde molestiae error tempora quos alias? Beatae officiis eligendi dolorem!"
console.log(nombre,apellido)
console.log(
    nombre.length,
    apellido.length,
    nombre.toUpperCase(),
    apellido.toLowerCase(),
    lorem.includes("amet"),
    lorem.trim(),
    lorem.split(" "),
    lorem.split(",")
);
let saludo="Usuario:"+nombre+" "+apellido;
console.log(saludo);
//interpolacion de variables
let saludo2=`Hola mi nombre es ${nombre} ${apellido}`;
console.log(saludo2);*/

//Numeros
/*let a=2;
let b=7.19;
let c="5.4"
console.log(a,b);
console.log(b.toFixed(1));//tofixed() es para indiar cuantos decimales tendra un numero
console.log(parseInt(c));//devuelve la parte entera de un numero
console.log(typeof(b),typeof(c));//devuelve el tipo de dato
console.log(b+parseFloat(c));*/

//Boolean
/*let ver=true;
let falso=false;*/

//Funionciones
/*function hola() {
    console.log("UNO");
    console.log("DOS");
    console.log("TRES");
    return(20);
};
hola(); 
function prueba(nombre="Desconocido",edad=0) {
    console.log(`Hola, Soy ${nombre} y tengo ${edad} años`);
};
prueba("daniel",21);
prueba();

const funcionExpresada=function(){
    console.log("sabeeeee");
};
funcionExpresada();*/

//Arreglos
const a=[];
const b=[1,true,["A","B","C",[1,2,3]]];
console.log(a);
console.log(b);
console.log(b.length);
console.log(b[1]);
console.log(b[2][2]);
console.log(b[2][3][0])
