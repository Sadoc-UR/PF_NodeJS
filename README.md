# Proyecto Final: Sistema de Gestión de Empleados

## Descripción

Este es un sistema desarrollado con **Node.js** y **Express.js**, que permite gestionar los empleados de la empresa **Taller de Node.js S.A. de C.V.**. El sistema proporciona un API para realizar operaciones CRUD sobre los empleados, y está protegido con **autenticación JWT** para asegurar que solo los usuarios autenticados tengan acceso.

## Requerimientos

1. **Node.js**: El servidor está construido sobre Node.js, utilizando el framework **Express.js** para crear la API.
2. **MySQL**: La base de datos utilizada es MySQL, que se gestiona localmente a través de **XAMPP**.
3. **JWT (JSON Web Token)**: Utilizado para la autenticación de los usuarios, garantizando que solo los administradores puedan acceder a la información y realizar acciones sobre los empleados.

## Características del Sistema

1. **Inicio de sesión seguro**:
   - Los usuarios administradores pueden iniciar sesión utilizando su nombre de usuario y contraseña, que son verificadas a través de la base de datos.
   
2. **Autenticación mediante JWT**:
   - El sistema utiliza **JSON Web Tokens (JWT)** para autenticar a los usuarios. Solo los usuarios autenticados pueden realizar acciones en el sistema.

3. **Operaciones CRUD**:
   - Los usuarios administradores pueden:
     - **Agregar** empleados a la base de datos.
     - **Modificar** la información de los empleados.
     - **Eliminar** empleados de la base de datos.
     - **Buscar** empleados por su nombre.

4. **Protección de rutas**:
   - Las rutas que permiten modificar, agregar o eliminar empleados están protegidas y solo accesibles para los usuarios autenticados.

## Instalación

1. Clona este repositorio en tu máquina local:

   ```bash
   git clone https://github.com/Sadoc-UR/PF_NodeJS.git

2. Instalacion de dependencias
   ```bash
   npm install

3. Inicio del servidor
   ```bash
   npm start
## Dependencias
   
- express: Framework web para Node.js.
- jsonwebtoken: Para crear y verificar tokens JWT.
- morgan: Middleware para registrar las solicitudes HTTP.
- mysql: Cliente MySQL para interactuar con la base de datos.
- nodemon: Herramienta para reiniciar el servidor automáticamente en el desarrollo.

## Autor
Sadoc UR

## Licencia
Este proyecto está licenciado bajo la ISC License.

