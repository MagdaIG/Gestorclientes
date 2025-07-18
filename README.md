# Sistema de Gestión de Clientes

Aplicación web que permite gestionar clientes de una empresa utilizando HTML, CSS, JavaScript y Bootstrap. El sistema permite **agregar, editar, eliminar, consultar y unir clientes**, haciendo uso de **arreglos, objetos, ciclos, condicionales y buenas prácticas de programación**. Incluye una interfaz moderna con modales para todas las operaciones.

Este proyecto fue desarrollado como parte de una actividad para aplicar estructuras de datos y lógica en JavaScript.

##  Funcionalidades implementadas

 Crear un cliente con los campos: `id`, `nombre`, `apellido`, `email`, `teléfono`, `activo`  
 Almacenar todos los clientes en un arreglo de objetos  
 Mostrar lista completa de clientes  
 Filtrar y mostrar solo clientes activos o inactivos  
 Contar cuántos clientes están activos  
 Buscar cliente por ID usando un formulario con validación  
 Eliminar cliente por ID utilizando `splice()`  
 Modificar datos de un cliente (teléfono y estado) desde un formulario dinámico  
 Unir arreglos de clientes y eliminar duplicados por `id`  
 Simular búsqueda repetitiva usando `while` hasta ingresar un ID válido  
 Utilizar `for`, `forEach`, `filter`, `find`, `splice`, `Set` y `while`  
 Mostrar resultados mediante modales personalizados con Bootstrap  
 Código organizado, reutilizable y documentado con comentarios

## Tecnologías Utilizadas

El proyecto fue desarrollado utilizando tecnologías del lado del cliente, sin frameworks externos más allá de Bootstrap.

- **HTML5**: Para la estructura de la interfaz y los formularios
- **CSS3**: Estilos personalizados, organización visual y responsividad básica
- **Bootstrap 5**: Sistema de diseño, modales y botones con estilos predeterminados
- **JavaScript (ES6+)**: Lógica principal, manejo de datos con arreglos y objetos, ciclos, condiciones y eventos
- **DOM API**: Manipulación del DOM para mostrar dinámicamente los resultados
- **Modales Bootstrap**: Para una experiencia de usuario moderna y sin alertas invasivas

##  Estructura del Proyecto

El proyecto está organizado en carpetas siguiendo una estructura simple y clara:

gestor-clientes/
├── index.html  
# Página principal con formularios, botones y modales
├── assets/

│   ├── css/

│   │   └── styles.css
# Estilos personalizados (complemento a Bootstrap)
│   └── js/

│       └── script.js        
# Lógica completa de gestión de clientes en JavaScript

Todos los modales, formularios y componentes se encuentran integrados en `index.html`, y toda la lógica de interacción se separa dentro de `script.js` para mantener el código modular y limpio.

##  Instalación y uso

Sigue estos pasos para clonar y ejecutar el proyecto localmente:

1. **Clona este repositorio**
  - Desde GitHub, haz clic en el botón "Code" y luego en "Download ZIP" o copia el enlace y clónalo con Git en tu editor.

2. **Abre el proyecto**
  - Usa cualquier editor de código como Visual Studio Code, WebStorm o simplemente haz doble clic en el archivo `index.html` para abrirlo en tu navegador.

3. **Visualiza la interfaz**
  - Al abrir `index.html`, verás un formulario para agregar nuevos clientes, botones para ejecutar operaciones, y los resultados se mostrarán dinámicamente en pantalla.

4. **Cómo usar el sistema**
  - Agregar cliente: completa el formulario y haz clic en "Agregar Cliente"
  - Buscar cliente: utiliza los botones "Buscar por ID" o "Validar ID (while)"
  - Editar cliente: cambia teléfono o estado activo/inactivo desde el botón "Editar Cliente"
  - Eliminar cliente: ingresa el ID del cliente y elimínalo fácilmente
  - Filtrar activos/inactivos: muestra solo los clientes según su estado
  - Unir nuevos clientes: agrega un lote predefinido de clientes nuevos y elimina duplicados automáticamente

## Créditos

Este proyecto fue desarrollado como parte de una actividad individual para aplicar estructuras de datos, ciclos, condicionales, y manipulación del DOM en JavaScript, con buenas prácticas de programación.

**Desarrollado por:**  
Magdalena Inalaf G.  
[LinkedIn](https://www.linkedin.com/in/minalaf/) | [GitHub](https://github.com/MagdaIG) | [Portafolio](https://inalaf.ca)

**Profesor:**  
César Osses

**Curso / Asignatura:**  
(Ejemplo: Fundamentos de Programación con JavaScript — puedes modificar esto si sabes el nombre exacto)

