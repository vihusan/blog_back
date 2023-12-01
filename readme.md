API REST BASE NodeJs prueba tecnica

1. Codigo para crear la base de datos llamada blog
-> CREATE SCHEMA `blog` DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ;

2. Importar respaldo de base de datos esta en
->    ./db/DumpBlog.sql
dentro de estr proyecto.

3. Renombrar .env.example a .env y colocar el usuario y contraeña a la conexion de base de datos en la linea
-> DATABASE_URL="mysql://usuario:password@localhost:3306/blog"

4. instalar las dependencias 
-> npm install

5. correr el servicio 
-> npm run start


