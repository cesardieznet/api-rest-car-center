CREATE DATABASE IF NOT EXISTS carcenter;

USE carcenter;

CREATE TABLE cliente (
  id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  primernombre VARCHAR(50) NOT NULL,
  segundonombre VARCHAR(100) NOT NULL,
  primerapellido VARCHAR(100) NOT NULL,
  segundoapellido VARCHAR(100) NOT NULL,
  tipodedocumento VARCHAR(50) NOT NULL,
  documento VARCHAR(12) NOT NULL,
  celular VARCHAR(12) NOT NULL,
  direccion VARCHAR(200) NOT NULL,
  correo VARCHAR(100) NOT NULL,
  estado VARCHAR(100) NOT NULL 
);

INSERT INTO cliente values 
  (1, 'cesar', 'augusto', 'diez', 'malagon', 'cc', '1121838795', '3187066736','avenidasiempreviva','correo@homail.com', 'soltero'),
  (2, 'carlos', 'andres', 'rojas', 'quintero', 'cc', '1121635214', '314320080','avenidasiempreviva2','correo2@homail.com', 'soltero'),
  (3, 'indgrid', 'sofia', 'echavarria', 'florez', 'cc', '1122332156', '311150321','avenidasiempreviva3','correo3@homail.com', 'casada');


CREATE TABLE mecanico (
  id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  primernombre VARCHAR(50) NOT NULL,
  segundonombre VARCHAR(100) NOT NULL,
  primerapellido VARCHAR(100) NOT NULL,
  segundoapellido VARCHAR(100) NOT NULL,
  tipodedocumento VARCHAR(50) NOT NULL,
  documento VARCHAR(12) NOT NULL,
  celular VARCHAR(12) NOT NULL,
  direccion VARCHAR(200) NOT NULL,
  correo VARCHAR(100) NOT NULL,
  estado VARCHAR(100) NOT NULL 
);

INSERT INTO mecanico values 
  (1, 'ruben', 'alejandro', 'diez', 'malagon', 'cc', '1121357895', '3187066736','avenidasiempreviva','correo@homail.com', 'soltero'),
  (2, 'edgar', 'andres', 'rojas', 'quintero', 'cc', '11212323234', '314320080','avenidasiempreviva2','correo2@homail.com', 'soltero'),
  (3, 'maria', 'antonieta', 'nieves', 'cortez', 'cc', '1123265987', '311150321','avenidasiempreviva3','correo3@homail.com', 'casada');

CREATE TABLE repuestos (
  id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(50) NOT NULL,
  precio int(20) NOT NULL,
  cantidad int(20) NOT NULL 
);

INSERT INTO repuestos values 
  (1, 'anillos', 1000, 20),
  (2, 'bujias', 5000, 15),
  (3, 'exosto', 300000, 12);

CREATE TABLE servicios (
  id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(50) NOT NULL,
  precio int(20) NOT NULL,
  cantidad int(20) NOT NULL
);

INSERT INTO servicios values 
  (1, 'aliniacion', 50000, 1),
  (2, 'balanceo', 40000, 1),
  (3, 'revision de motor', 15000, 1);