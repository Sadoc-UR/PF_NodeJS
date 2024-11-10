# Proyecto Final: Sistema de Administración de Empleados

Este es un proyecto final que consiste en la creación de un sistema para la gestión de empleados para el departamento de Recursos Humanos de la empresa **Taller de Node.js S.A. de C.V.**. Este sistema sustituye el uso de documentos Excel para la administración de los datos de los empleados, implementando un sistema seguro basado en autenticación y autorización de usuarios.

## Requerimientos

El sistema cuenta con los siguientes requerimientos.

1. **Autenticación y autorización**:  
   El sistema contará con un apartado de inicio de sesión que solo permitirá el ingreso a usuarios dados de alta en la base de datos.

2. **Framework**:  
   Será implementado utilizando **Express.js** para la creación de la API.

3. **Autenticación JWT**:  
   La autenticación se gestionará mediante **JSON Web Tokens (JWT)**.

4. **Acceso restringido**:  
   El sistema garantizará que solo los usuarios autenticados podrán acceder a la información.

5. **Usuarios administradores**:  
   Los usuarios dados de alta en la base de datos serán administradores y podrán realizar las siguientes acciones:
   - **Agregar empleados**: Los administradores podrán agregar nuevos registros de empleados a la base de datos.
   - **Modificar empleados**: Los administradores podrán editar los datos de los empleados.
   - **Eliminar empleados**: Los administradores podrán eliminar registros de empleados de la base de datos.
   - **Buscar empleados**: Los administradores podrán buscar empleados por su nombre.

## Funcionalidades

- **Inicio de sesión seguro**: Los usuarios administradores podrán acceder al sistema mediante su correo y contraseña.
- **Gestión de empleados**: Los administradores podrán gestionar empleados a través de un CRUD (Crear, Leer, Actualizar y Eliminar).
- **Seguridad**: El sistema usará JWT para asegurar que solo los usuarios autenticados tengan acceso a las funcionalidades.

## Instalación

1. Clonar el repositorio:

   ```bash
   git clone https://github.com/Sadoc-UR/PF_NodeJS.git
   cd PF_NodeJS
2. Instalacion de dependencias
   ```bash
   npm install

3. 
