
create table artist (
  id int unsigned primary key auto_increment not null,
  name VARCHAR(255) NOT NULL,
  speciality VARCHAR(255) NOT NULL,
  biography VARCHAR(255) NOT NULL,
  contact VARCHAR(255) NOT NULL
);


create table tattoo (
  id int unsigned primary key auto_increment not null,
  style VARCHAR(255) NOT NULL,
  image VARCHAR(255) NOT NULL
);

