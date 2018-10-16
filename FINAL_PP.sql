drop database db_pozoriste_promena;

create database db_pozoriste_promena;

use db_pozoriste_promena;

SET FOREIGN_KEY_CHECKS = 0;


insert into istorijat (tekst, slike_id) values ('Electronic', 1);

insert into istorijat (tekst, slike_id) values ('Blue sea', 2);

insert into istorijat (tekst, slike_id) values ('Yellow sun', 3);

insert into istorijat (tekst, slike_id) values ('Green grass', 4);


insert into osoba (broj_telefona, ime, mejl, opis, prezime, prioritet, slika1, slika2) values (064000000, 'Dejan', 'dejan.mitrovic@gmail.com', 'Dobar decko', 'Mitrovic', 1, 'prva slika 1', 'druga slika 1');

insert into osoba (broj_telefona, ime, mejl, opis, prezime, prioritet, slika1, slika2) values (062000000, 'Mladen', 'mladen.potrebic@gmail.com', 'Mnogo dobar decko', 'Potrebic', 2, 'prva slika 2', 'druga slika 2');

insert into osoba (broj_telefona, ime, mejl, opis, prezime, prioritet, slika1, slika2) values (063000000, 'Nikola', 'nikola.mitrovic@gmail.com', 'Kul decko', 'Mitrovic', 3, 'prva slika 3', 'druga slika 3');

insert into osoba (broj_telefona, ime, mejl, opis, prezime, prioritet, slika1, slika2) values (065000000, 'Bojan', 'bojan.zrnic@gmail.com', 'Los decko', 'Zrnic', 4, 'prva slika 4', 'druga slika 4');



insert into predstava (naslov, opis, slika, video, osoba_id, slike_id) values ('Hamlet', 'dobra predstava', 'slika1', 'trejler1', 1, 1);

insert into predstava (naslov, opis, slika, video, osoba_id, slike_id) values ('Rezim ljubavi', 'dobra predstava', 'slika2', 'trejler2', 2, 2);

insert into predstava (naslov, opis, slika, video, osoba_id, slike_id) values ('Kerovi', 'dobra predstava', 'slika3', 'trejler3', 3, 3);

insert into predstava (naslov, opis, slika, video, osoba_id, slike_id) values ('Zlatni lancic od bizuterije', 'dobra predstava', 'slika4', 'trejler4', 4, 4);


insert into predstava_osoba (uloga, osoba_id, predstava_id) values ('Direktor', 1, 1);

insert into predstava_osoba (uloga, osoba_id, predstava_id) values ('Glumac', 2, 2);

insert into predstava_osoba (uloga, osoba_id, predstava_id) values ('Reziser', 3, 3);

insert into predstava_osoba (uloga, osoba_id, predstava_id) values ('Cistacica', 4, 4);


insert into repertoar (datum, predstava_id) values ('02.12.2018', 1);

insert into repertoar (datum, predstava_id) values ('04.1.2018', 2);

insert into repertoar (datum, predstava_id) values ('08.10.2018', 3);

insert into repertoar (datum, predstava_id) values ('10.1.2019', 4);


insert into security_user (username, password, first_name, last_name, role) values ('admin', '$2a$04$7elx3PRQa10AC76ojfehH.5FVDPZSyx3CdcdQQfqNvi7X6TKcp6h2', 'Admin', 'Admin', 'ADMIN');



insert into slike (datum, namena, sadrzaj) values ('02.1.2018','Electronic', 'https://pbs.twimg.com/profile_images/893108438972063744/IWwbjH9X_400x400.jpg');

insert into slike (datum, namena, sadrzaj) values ('03.2.2018','Pozoriste', 'https://gagady.files.wordpress.com/2013/06/narodno.jpg');

insert into slike (datum, namena, sadrzaj) values ('05.8.2018','Enterijer', 'https://www.011info.com/firms/13900/5.jpg');

insert into slike (datum, namena, sadrzaj) values ('07.2.2018','Uloga', 'https://pbs.twimg.com/profile_images/893108438972063744/IWwbjH9X_400x400.jpg');

insert into slike (datum, namena, sadrzaj) values ('22.11.2018','Knjiga', 'https://static.kupindoslike.com/Sentimentalna-povest-srpskog-pozorista_slika_O_69050911.jpg');



insert into vesti (naslov, opis, slike_id) values ('Hamlet','dobra predstava', 1);

insert into vesti (naslov, opis, slike_id) values ('Rezim ljubavi','dobra predstava', 2);

insert into vesti (naslov, opis, slike_id) values ('Kerovi','dobra predstava', 3);

insert into vesti (naslov, opis, slike_id) values ('Zlatni lancic od bizuterije', 4);