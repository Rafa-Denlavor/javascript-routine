/* --- 1.Tratando variável que pode em algum momento receber:

- string vazia
- null
- undefined
- false
- NaN
- 0

*/

const data = 'false';

if(!data) {
    console.log('ERRO')
} else {
    console.log('DEU BOM ')
}

/* --- 4.Tratando variável que pode ser um array vazio --- */

const names = [];

if(names.length === 0) {
    console.log("Array sem nadaaa!");
} else {
    console.log("Array com valores")
}

/* --- 5.Tratando variável que pode armazenar tipos de dados diferentes  --- */

const algumaCoisa = 123;

if(typeof algumaCoisa === "number") {
    console.log('É númerooo');
} else {
    console.log('É stringggg');
}

/* --- --- */

/*  */

