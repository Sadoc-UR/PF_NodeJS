# Proyecto Final: Sistema de Gestión de Empleados

## Descripción
Este es un sistema desarrollado con **Node.js** y **Express.js**, que permite gestionar los empleados de la empresa **Taller de Node.js S.A. de C.V.**. El sistema proporciona una API para realizar operaciones CRUD sobre los empleados, y está protegido con **autenticación JWT** para asegurar que solo los usuarios autenticados puedan acceder y realizar operaciones sobre los datos.

## Requerimientos

Para ejecutar este proyecto, es necesario tener instalados los siguientes programas:

1. **Node.js**: El servidor está construido sobre Node.js, utilizando el framework **Express.js** para crear la API.
2. **MySQL**: La base de datos utilizada es MySQL, que se gestiona localmente a través de **XAMPP**.
3. **JWT (JSON Web Token)**: Utilizado para la autenticación de los usuarios, garantizando que solo los administradores puedan acceder a la información y realizar acciones sobre los empleados.

## Características del Sistema

1. **Inicio de sesión seguro**:
   - Los usuarios administradores pueden iniciar sesión utilizando su nombre de usuario y contraseña, que son verificadas a través de la base de datos.
   - El inicio de sesión genera un **JWT** que se utiliza para autenticar las solicitudes subsecuentes.

2. **Autenticación mediante JWT**:
   - El sistema utiliza **JSON Web Tokens (JWT)** para autenticar a los usuarios. El token se almacena en el cliente (por ejemplo, en un encabezado HTTP) y se utiliza en cada solicitud para acceder a las rutas protegidas.
   - **JWT expira** después de un periodo determinado para mejorar la seguridad.

3. **Operaciones CRUD**:
   - Los usuarios administradores pueden realizar las siguientes operaciones:
     - **Agregar** empleados a la base de datos.
     - **Modificar** la información de los empleados.
     - **Eliminar** empleados de la base de datos.
     - **Buscar** empleados por su nombre, id o cualquier otro criterio.
   
4. **Protección de rutas**:
   - Las rutas que permiten modificar, agregar o eliminar empleados están protegidas y solo accesibles para los usuarios autenticados mediante el uso de JWT.
   - **Middleware de autenticación**: Asegura que solo los usuarios con un token válido puedan acceder a las rutas protegidas.

## Instalación

Sigue estos pasos para instalar y ejecutar el proyecto en tu máquina local:

1. **Clona este repositorio en tu máquina local**
   ```bash
   git clone https://github.com/Sadoc-UR/PF_NodeJS.git

2. **Instalación de dependencias** 
    - Navega al directorio del proyecto y ejecuta el siguiente comando para instalar las dependencias necesarias:

    ```bash
    npm install

3. **Configuración de la base de datos** 
    - Asegúrate de tener MySQL instalado y en funcionamiento. Utiliza XAMPP para iniciar el servidor de bases de datos si es necesario. 

4. **Inicio del servidor**
    ```bash
    npm start

5. **Inicio de sesion**
    - Abre la carpeta del proyecto y dirigete a la carpeta que dice **UI** y abre el archivo que dice login.html

## Dependencias

Este proyecto utiliza las siguientes dependencias:

- **express**: Framework web para Node.js.
- **jsonwebtoken**: Para crear y verificar tokens JWT.
- **morgan**: Middleware para registrar las solicitudes HTTP.
- **mysql**: Cliente MySQL para interactuar con la base de datos.
- **nodemon**: Herramienta para reiniciar el servidor automáticamente durante el desarrollo.

## Autor

**Sadoc UR**  
[GitHub](https://github.com/Sadoc-UR)  

## Licencia

Este proyecto está licenciado bajo la **ISC License**.  