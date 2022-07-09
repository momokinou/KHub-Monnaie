CREATE TABLE categorylist (
    id integer PRIMARY KEY,
    category VARCHAR(255) NOT NULL UNIQUE,
);

insert into categorylist (id, rank)
values
  (1, 'Alimentation'),
  (2, 'Loisirs'),
  (3, 'Hygiène'),
  (4, 'Logement'),
  (5, 'Transport'),
  (6, 'Vêtements'),
  (7, 'Revenues'),
  (8, 'Abonnements'),
  (9, 'Epargne'),
  (10, 'Banque');