# Tienda online — proyecto en desarrollo

> Aplicación de e-commerce construida como proyecto de portfolio para practicar React, navegación con React Router y consumo de una API.

**Estado:** en desarrollo activo. Algunas secciones de navegación y las operaciones de administración todavía están planificadas.

## Sobre el proyecto

La aplicación permite explorar un catálogo de productos, aplicar búsqueda y filtros, y consultar el detalle de cada producto. La interfaz está organizada por funcionalidades y utiliza rutas para navegar entre las distintas vistas del producto.

## Funcionalidades implementadas

- Catálogo de productos obtenido desde DummyJSON.
- Búsqueda de productos con espera breve antes de aplicar el término ingresado.
- Filtro por categoría y ordenamiento.
- Paginación sincronizada con los parámetros de la URL.
- Vista de detalle con galería de imágenes, precio, descuento, calificación, stock y reseñas.
- Secciones del detalle para descripción, especificaciones, envíos y devoluciones, y garantía.
- Estados de carga y manejo de errores en las vistas que consumen productos.

## En desarrollo / próximo

- Crear, modificar y eliminar productos desde la interfaz.
- Reutilizar un formulario para crear un producto y editar uno existente.
- Actualizar el estado de la aplicación después de cada operación sobre productos.
- Crear un dashboard con un resumen del catálogo y accesos a las secciones de administración.
- Incorporar la sección de pedidos y su navegación.

## Tecnologías

- React 19
- React Router
- Vite
- JavaScript
- CSS
- [DummyJSON Products API](https://dummyjson.com/docs/products)

## Ejecutar localmente

Necesitás tener instalado Node.js y npm.

1. Cloná el repositorio y entrá en la carpeta del proyecto.
2. Instalá las dependencias:

   ```bash
   npm install
   ```

3. Creá un archivo `.env` en la raíz del proyecto con las URLs de la API:

   ``` env
   VITE_API_URL=https://dummyjson.com/products?limit=0
   VITE_API_URL_ID=https://dummyjson.com/products/
   ```

4. Iniciá el servidor de desarrollo:

   ```bash
   npm run dev
   ```

Vite mostrará en la terminal la dirección local para abrir la aplicación.

## Scripts disponibles

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Inicia el servidor de desarrollo. |
| `npm run build` | Genera la versión de producción en `dist`. |
| `npm run preview` | Sirve localmente la versión compilada. |
| `npm run lint` | Ejecuta ESLint. |

## Objetivo de aprendizaje

Este proyecto forma parte de mi portfolio y sigue evolucionando. Lo estoy usando para practicar composición de componentes, organización por funcionalidades, estado, rutas anidadas, parámetros de URL, formularios y manejo de operaciones asíncronas.
