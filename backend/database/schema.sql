
create table artist (
  id int unsigned primary key auto_increment not null,
  name VARCHAR(255) NOT NULL,
  image VARCHAR(255) NOT NULL,
  speciality VARCHAR(255) NOT NULL,
  biography VARCHAR(500) NOT NULL,
  contact VARCHAR(255) NOT NULL
);

create table tattoo (
  id int unsigned primary key auto_increment not null,
  style VARCHAR(255) NOT NULL,
  image VARCHAR(255) NOT NULL,
  artist_id INT UNSIGNED,
  FOREIGN KEY (artist_id) REFERENCES artist(id)
);

INSERT INTO artist (name, image, speciality, biography, contact) 
VALUES 
  ('Charlie', 'https://media.istockphoto.com/id/1354192522/fr/photo/le-ma%C3%AEtre-de-tatouage-professionnel-masculin-barbu-caucasien-travaille-dans-un-studio.jpg?s=612x612&w=0&k=20&c=meIZLvvIjE_njl_-VlT0Bb3s_2_VJ8JlV1U3oQDhbwg=', 'Lettrage et calligraphie', "Charlie, virtuose du tatouage calligraphique, transforme les mots en art sur la peau. Sa maîtrise de l'encre fusionne l'écriture et l'émotion, créant des pièces uniques qui racontent des histoires avec une élégance indéniable.", 'Charlie.letters@gmail.com'),
  ('Pierre', 'https://media.istockphoto.com/id/926563694/fr/photo/tatouage-de-bras-pour-femme.jpg?s=612x612&w=0&k=20&c=pyluu0ErL9aRpzyLkV-TJKHdV7vu5mXbpZBvf35D7sA=', 'Dots', "Pierre,artiste du tatouage dotwork, crée des œuvres en pointillé uniques. À travers la précision de ses motifs, il transforme la peau en une toile éclatante d'élégance et de subtilité. Une fusion magistrale de technique et de vision artistique.", 'pierre.dots@gmail.com'),
  ('John', 'https://media.istockphoto.com/id/492258398/fr/photo/artiste-faisant-de-tatouage-sur-homme-client-la-main-dans-le-studio.jpg?s=612x612&w=0&k=20&c=f1thQDKMofk_J4nskLiCtdQ2kuC44HuGl59ST8QFRQg=', 'Réalisme', "John, maître du tatouage réaliste, capture l'essence de la vie à travers son encre. Chaque trait méticuleux donne vie à des portraits saisissants et des paysages émotionnels. Une immersion artistique où le réel devient une œuvre d'art éternelle.", 'john.real@gmail.com');

INSERT INTO tattoo (style, image, artist_id) 
VALUES 
  ('Lettering', 'https://t3.ftcdn.net/jpg/02/34/37/38/240_F_234373846_DSIU9m8q9wJeCvvbgnJagGWC6URzot4r.jpg', 1),
  ('Lettering', 'https://t4.ftcdn.net/jpg/04/85/10/35/240_F_485103505_HohxSWtqcZE1P9RKYVTZyx4XNgZvnRvv.jpg', 1),
  ('Dots', 'https://t3.ftcdn.net/jpg/01/30/64/32/240_F_130643216_Nr7X21pAlDh8EQ3FtbDhsvcVbhlRqRQ3.jpg', 2),
  ('Dots', 'https://t4.ftcdn.net/jpg/04/53/45/09/240_F_453450923_Lf9O35AT67J8x6Hd6bkeHg8TDmh2CHiV.jpg', 2),
  ('Realism', 'https://t3.ftcdn.net/jpg/06/09/41/66/240_F_609416670_VOHaOtn9eA6WTyK2RD9nkgBeRrZ0OpRZ.jpg', 3),
  ('Realism', 'https://t4.ftcdn.net/jpg/06/82/18/09/240_F_682180911_7UvtgBsslIgRuWcPxcMM86NKFSaI7uyF.jpg', 3);