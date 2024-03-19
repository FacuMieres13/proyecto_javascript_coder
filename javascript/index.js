//Creacion de clase auto
class Auto {
    constructor(id, marca, modelo, ano, precio) {
        this.id = id;
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.precio = precio;
    }
}

// Creacion de opciones de autos a alquilar
const auto1 = new Auto(1,"Ford", "Mustang Bullit", 2019, 10000);
const auto2 = new Auto(2,"Chevrolet", "Camaro", 2020, 12000);
const auto3 = new Auto(3,"Mitsubish", "Lancer", 2023, 9000);
const auto4 = new Auto(4,"Dodge", "Challenger", 2023, 11000);

// Almacenar los tipos de autos en un array
const autos = [auto1, auto2, auto3, auto4];
let stringPrompt = "Ingrese el número del auto que desee alquilar:\n";
for (let i = 0; i < autos.length; i++) {
    stringPrompt += `${autos[i].id}: ${autos[i].marca} ${autos[i].modelo} año ${autos[i].ano} $${autos[i].precio} semanales\n`;
}
const autoSolicitado = Number(prompt(stringPrompt))
if (autoSolicitado >= 1 && autoSolicitado <= autos.length) {
    alert(`Ha seleccionado el auto ${autos[autoSolicitado - 1].marca} ${autos[autoSolicitado - 1].modelo}`);
} else {
    alert("Número de auto no válido.");
}
