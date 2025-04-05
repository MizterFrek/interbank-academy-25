# Resumen del Proyecto

Este programa tiene un único script cuya funcionalidad es la de procesar un archivo con transacciones financieras en formato CSV y genera un resumen en consola de dicho archivo con información importante como el balance final, el conteo de transacciones por tipo (Crédito/Débito) y la transacción de mayor monto.

## Instalación del Proyecto

1. Clonar el repositorio

```sh
   git clone https://github.com/MizterFrek/interbank-academy-25.git
   cd interbank-academy-25
```

2. Instalacion de dependencias

```sh
    npm install
```

## Instrucciones de Ejecución

Una vez dentro del proyecto `interbank-academy-25` ejecutar los siguientes comandos. (Hacen exactamente lo mismo)

```sh
    npm start <path_file> 
    
    # Ejemplo: npm start /examples/example1.csv 
```

```sh
    node src/index.js <path_file> 
    
    # Ejemplo: node src/index.js /examples/example1.csv 
```

> [!NOTE]
> Si no se envía el argumento `path_file` por defecto el programa utilizará el archivo `data.csv` ubicado en la raíz del proyecto.


### Ejemplo de salida

```sh
    Reporte de Transacciones
    ---------------------------------------------
    Balance Final: 325.00
    Transacción de Mayor Monto: ID 3 - 200.00
    Conteo de Transacciones: Crédito: 3 Débito: 2
```

## 📂 Estructura del Proyecto

```
interbank-academy-25/
├── /examples                   # Ejemplos de archivos CSV
└── /src                        # Directorio principal de proyecto
    ├── index.js                # Script que ejecuta el proyecto
    └── /services               # Utilidades del Script
        ├── Transacciones.js    # Casos de uso de las Transacciones
        └── Consola.js          # Casos de uso de la Consola

```


## Consideraciones Adicionales

- El proyecto da por hecho de que el archivo CSV contiene unicamente las columnas `id`, `tipo` y `monto`.

## Autor

Desarrollado por Jesus Llica (jllicagarcia9506@gmail.com) | [Github](https://github.com/MizterFrek) | [Linkedin](https://www.linkedin.com/in/jllicagarcia/)

