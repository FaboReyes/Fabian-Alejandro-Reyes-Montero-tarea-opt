const Clase =  require ("./Clase");
const Control_de_horarios = require("./Control_de_horarios");
const main = ()=>{
const Mate = new Clase("Matematica","martes","2:00 - 4:00");
const Esp = new Clase("Espanol","martes","2:00 - 4:00");
const Hist = new Clase("Historia Antigua y Medieval","martes","2:00 - 4:00");
const Biol = new Clase("Biologia","martes","2:00 - 4:00");
const Ra = new Clase("Razonamiento","martes","2:00 - 4:00");


const horario = new Control_de_horarios("March");

horario.addClase(Mate);
horario.addClase(Ra);
horario.addClase(Esp);

horario.seeAll();
horario.update("Espanol",'miercoles',"3:00");
horario.see("Espanol")
console.log("Aca eliminamos");
horario.delete(Ra);
horario.seeAll();
}

main();