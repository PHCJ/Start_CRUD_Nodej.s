drop database web2;
create database web2;
USE web2;
CREATE TABLE produto (
	 id int(11) NOT NULL AUTO_INCREMENT,
     descricao VARCHAR(50) NULL DEFAULT NULL,
     estoque_minimo int(11) NULL DEFAULT NULL,
	 estoque_maximo int(11) NULL DEFAULT NULL,
     PRIMARY KEY(id)
);
     
CREATE TABLE usuario (
id int(11) NOT NULL AUTO_INCREMENT,
nome VARCHAR(50) NULL DEFAULT NULL,
email VARCHAR(100) NULL DEFAULT NULL,
senha VARCHAR(50) NULL DEFAULT NULL,
PRIMARY KEY(id)
);

INSERT INTO usuario (nome, senha,email) values('admin', 'admin','admin@admin'); 

