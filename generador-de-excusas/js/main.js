
const columnaA = [
    "En cuanto arreglemos el goteo de recursos",
    "En cuanto completemos las pruebas",
    "En cuanto hayamos optimizado el código",
    "Apenas nos arreglen el bug",
    "Cuando se solvente el problema de instalación",
    "Cuando averiguemos por qué se cae el proceso",
    "Cuando hayamos mejorado el rendimiento",
    "En cuanto completemos la restauración",
    "Apenas instalemos el último parche",
    "En cuanto terminemos la implementación"
    ];

    const columnaB = [
        "del interfaz XML",
        "del sistema de colas",
        "del buffer de entrada",
        "del gestor de peticiones",
        "de las clases de abstracción",
        "del recolector de basura",
        "de la nueva versión",
        "del caché",
        "de la versión customizada",
        "del conversor del protocolo"
        ]

        const columnaC = [
            "del directorio LDAP",
            "de la máquina virtual de Java",
            "del proxy inverso",
            "del gestor de clúster",
            "del broker de objetos distribuidos",
            "de la capa de presentación",
            "del despachador de certificados",
            "de la base de datos",
            "del servidor seguro",
            "del acelerador de transacciones"
            ]

            function generaExcusa () {
                const posicionA = Math.floor(Math.random()*columnaA.length);
                const posicionB = Math.floor(Math.random()*columnaB.length);
                const posicionC = Math.floor(Math.random()*columnaC.length);

                const excusa = columnaA[posicionA] + "" + columnaB[posicionB] + "" + columnaC[columnaC];

                return excusa;

            }

        

            function colocaExcusa() {
                document.getElementById("excusa").innerHTML = generaExcusa();
            }

            colocaExcusa(); 







