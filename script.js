hamburguesas = [
    {
        nombre : "doble carne doble queso",
        carne : "10",
        pan : "regular",
        cebolla : true,
        lechuga : false,
        quesos: 2,
        carnes : 2,
        precio : 6900
    },
    {
        nombre : "cuarto de libra",
        carne : "4",
        pan : "cuarto",
        cebolla : true,
        lechuga : false,
        quesos : 2,
        carnes : 1,
        precio : 7300
    },
    {
        nombre : "big mac",
        carne : "10",
        pan : "big mac",
        cebolla : true,
        lechuga : true,
        quesos : 1,
        carnes : 2,
        precio : 7200
    },
    {
        nombre : "mcnifica",
        carne : "4",
        pan : "cuarto",
        cebolla : true,
        lechuga : true,
        quesos : 1,
        carnes : 1,
        precio : 7700
    }
]

let respuesta = 1

do {
    respuesta = parseInt(prompt("Ingrese una opcion\n1 - Ordenar por precio de menor a mayor\n2 - Ordenar por precio de mayor a menor\n0, "))

    if (respuesta === 1){
        let hamburguesasMenorMayor = hamburguesas.sort((a, b) => {
            if (a.precio > b.precio){
                return 1
            }
            else if (a.precio < b.precio){
                return -1
            }
            else{
                return 0
            }
        })
        console.log(hamburguesasMenorMayor)
    }else if(respuesta ===2){
        let hamburguesasMayorMenor = hamburguesas.sort((a, b) => {
            if (a.precio > b.precio){
                return 1
            }
            else if (a.precio < b.precio){
                return -1
            }
            else{
                return 0
            }
        })
        console.log(hamburguesasMayorMenor)
    }
    else if (respuesta === 0){
        alert("Hasta pronto")
    }
    else if(isNaN(respuesta) || respuesta < 0 || respuesta > 3){
        alert("opccion no valida")
    }
    
} while (respuesta !== 0);