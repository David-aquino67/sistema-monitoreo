# Sistema de Monitoreo y Acciones Rápidas para SIMF
## Contexto:
La Oficina de Operación y Mesa de Servicios (OOMS) de la Coordinación de Informática tiene la responsabilidad de asegurar la disponibilidad del Sistema de Información de Medicina Familiar (SIMF) 
## Problematica:
Actualmente, la OOMS utiliza una interfaz de gestión local basada en HTML, desplegada en el servidor, que centraliza diversos scripts de restablecimiento para cada Unidad de Medicina Familiar (UMF).
### Objetivo general:
Transformar la interfaz estática de gestión de scripts de acciones del sistema SIMF en una aplicación web moderna y responsiva
## Caracteristicas Principales
* Framework:
    * React
    * React DOM
    *  Vite
* 
## Instalación
1. **Clonar el repositorio**

   ```bash
   git clone <https://github.com/imssci/smars_frontend.git>
   cd <sistema-monitoreo>
   ```
2. **Instalar dependencias**

   ```bash
   npm install
   ```
   ## Iniciar el proyecto

3. **Iniciar el servidor**

   ```bash
   npm run dev
   ```

   - El servidor se ejecutará en ` http://localhost:5173`.
## Estructura del proyecto

````
├── src/
│   ├── App.jsx/          # Endpoints
|   ├── main.jsx/         # Montaje
│   ├── const/            # Constantes de uso general del sistema
│   ├── public/           # Elementos publicos, normamelte solo el favicon
│   ├── assets/           # Imagenes/iconos/componentes graficos de uso general
|   ├── api/              # hooks que concentran llamadas a la api que se usen en toda la apliacion con async/await y axios
|   ├── helpers           # Funciones o clasesa de js puro que se usen a lo largo de todo el sistema
|   ├── components        # Componentes de usi general en el sistema
│   ├── contexts          # Conxtos de uso general en el sistema
|   ├── hooks             # hooks de usop general
|   ├── styles            # Estilos de uso general
├── .env                  # Variables de entorno (Crear)
├── .gitignore            # Archivos a ignorar
└── README.md             # Este archivo
```<>
