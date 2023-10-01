const Clase =  require ("./Clase");
class Control_de_horarios{
    constructor(mes){
        this.mes = mes;
        this.clases = []
    }
    addClaseForParameter(materia,dia_de_la_semana,hora_de_inicio){
        if(materia != null && dia_de_la_semana != null && hora_de_inicio != null){
            const newClase = new Clase(materia,dia_de_la_semana,hora_de_inicio);
            this.clases.push(newClase);
            console.log("Se ha insertado una nueva clase al horario");
        }
    }
    addClase(clase){
        if(clase != null){
            if(clase instanceof Clase){
                this.clases.push(clase);
                console.log("Se ha insertado");
            }else{
                throw new Error({message:"ha introducido un dato vacio"});
            }
        }else{
            throw new Error({message:"ha introducido un dato vacio"});
        }
    }

    update = (materia,dia_de_la_semana,hora_de_inicio) =>{
        if(materia != null && dia_de_la_semana != null && hora_de_inicio != null){
            const materia_encontrada = this.clases.find(clase => clase.materia === materia);
            if(materia_encontrada){
                materia_encontrada.dia_de_la_semana = dia_de_la_semana;
                materia_encontrada.hora_de_inicio = hora_de_inicio;
                console.log("El horario fue actualizado con exito");
            }else{
                console.log("No se encontro la materia por lo que se agregara una nueva clase al horario");
                this.addClaseForParameter(materia,dia_de_la_semana,hora_de_inicio);
            }
        }else{
            console.log("Parametros incorrectos");
        }
    }

    delete = function(clase){
        if(clase != null){
            if(clase instanceof Clase){
                const indice = this.clases.findIndex(classe => classe === clase);
                if(indice !== -1){
                    this.clases.splice(indice,1);
                    console.log(`La ${clase.materia} ha sido eliminada`);
                }
            }
        }
    }

    seeAll(){
        this.clases.forEach((clase) =>{
            console.log(`Es ${clase.materia} el ${clase.dia_de_la_semana} y empieza ${clase.hora_de_inicio}`);
        })
    }
    see(materia){
        this.clases.forEach((clase) =>{
            if(clase.materia === materia){
                console.log(`Es ${clase.materia} el ${clase.dia_de_la_semana} y empieza ${clase.hora_de_inicio}`);
            }
        })

    }
}
module.exports = Control_de_horarios;