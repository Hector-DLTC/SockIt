create database sockit;

CREATE TABLE productos (
id INT,
nombre VARCHAR(100),
precio FLOAT,
descripcion VARCHAR(500),
imagen blob,
cantegoria varchar(100)
);

CREATE TABLE USUARIOS(
id INT,
usuario varchar(100),
Correo varchar(100),
contraseña varchar(100),
direccion varchar(200)
);

create table direcciones(
id INT,
pais varchar(100),
estado varchar (100),
municipio varchar(100),
cpostal varchar(100),
calle varchar(100),
numeroext varchar(100)
);

create table pedidos(
id int,
fecha datetime,
idusuario int,
idproducto int,
nombreproducto varchar(100),
precioproducto float
);

create table provedores(
id INT,
tel int,
ine blob,
rfc varchar(100),
dirpago varchar(100),
idprovedor int
);
