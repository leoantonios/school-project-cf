# School Project

School Project, es el proyecto final para el Bootcamp de React⚛️ de Codigo Facilito 🐊

Para este projecto utilice react como frontend, y supabase como backend

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![React](https://img.shields.io/badge/react%20zustand-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![React Hook Form](https://img.shields.io/badge/React%20Hook%20Form-%23EC5990.svg?style=for-the-badge&logo=reacthookform&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![DaisyUI](https://img.shields.io/badge/daisyui-5A0EF8?style=for-the-badge&logo=daisyui&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)

## Configuracion

- Clonar el repositorio
- Para poder usar el proyecto localmente o poder desplegarlo por su cuenta, es necesario crear un proyecto en "Supabase" y obtener unas credenciales:
- Despues de crear el proyecto, se debe contar con 2 tablas dentro de este, una llamada "students" y otra "grades"
- La tabla students con los siguientes campos:

|            |                          |         |             |   |
|------------|--------------------------|---------|-------------|---|
| Name       | Format                   | Type    | Description |   |
| id         | bigint                   | number  |             |   |
| created_at | timestamp with time zone | string  |             |   |
| name       | text                     | string  |             |   |
| degree     | text                     | string  |             |   |
| userId     | uuid                     | string  |             |   |
| level      | text                     | string  |             |   |
| status     | boolean                  | boolean |             |   |

- Y la tabla grades con los siguientes campos:

| Name       | Format                   | Type    | Description |
|------------|--------------------------|---------|-------------|
| id         | bigint                   | number  |             |
| created_at | timestamp with time zone | string  |             |
| grade1     | smallint                 | number  |             |
| grade2     | smallint                 | number  |             |
| grade3     | smallint                 | number  |             |
| grade4     | smallint                 | number  |             |
| grade5     | smallint                 | number  |             |
| userId     | uuid                     | string  |             |
| studentId  | bigint                   | number  |             |
| course     | text                     | string  |             |
| status     | boolean                  | boolean |             |
| name       | text                     | string  |             |
| level      | text                     | string  |             |

- Adicional: Desactivar las policies para no obtener un error a la creacion de recursos(Debe ser corregido el codigo para usar Policies)
- Una vez creado y obtenido las credenciales, copia el documento .env.example, lo renombra con .env.local y pega las credenciales

```js

VITE_SUPABASE_URL=//URL_DEL_PROJECTO_SUPABASE
VITE_SUPABASE_ANON_KEY=//LLAVE_DEL_PROJECTO_SUPABASE

```
- Al final ejecutar lo siguiente si desea probar el proyecto localmente

```js
npm run dev
```
- O hacer el dist, para desplegarlo

```js
npm run build
```

## Proyecto Ejemplo

Pueden registrarse con una cuenta de 10 minutos, y se les enviara un correo de confirmacion.
- https://school-project-cf.netlify.app/

---
Gracias por leer, Atte. Leo