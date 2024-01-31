
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
  image VARCHAR(255) NOT NULL,
  artist_id INT UNSIGNED,
  FOREIGN KEY (artist_id) REFERENCES artist(id)
);

INSERT INTO artist (name, speciality, biography, contact) 
VALUES 
  ('Charlie', 'Lettrage et calligraphie', 'Experienced tattoo artist specializing in various styles.', 'john.doe@example.com'),
  ('Pierre', 'Dots', 'Experienced tattoo artist specializing in various styles.', 'john.doe@example.com'),
  ('John', 'Réalisme', 'Experienced tattoo artist specializing in various styles.', 'john.doe@example.com');

INSERT INTO tattoo (style, image, artist_id) 
VALUES 
  ('Traditional', 'traditional_tattoo_1.jpg', 1),
  ('Realism', 'realism_tattoo_1.jpg', 2),
  ('Neo-Traditional', 'neo_traditional_tattoo_1.jpg', 3);


