CREATE TABLE product (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  pname VARCHAR(255),
  montant FLOAT(24),
  useless BOOLEAN DEFAULT FALSE,
  category NOT NULL DEFAULT 1,
  buyDate DATETIMEOFFSET,
  constraint fk_categorylist foreign key (category) references categorylist (id)
);