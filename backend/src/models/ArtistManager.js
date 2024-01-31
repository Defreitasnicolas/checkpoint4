const AbstractManager = require("./AbstractManager");

class ArtistManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "artist" as configuration
    super({ table: "artist" });
  }

  // The C of CRUD - Create operation

  // async create(artist) {
  //   const { name, speciality, biography, contact } = artist;
  //   // Execute the SQL INSERT query to add a new artist to the "artist" table
  //   const [result] = await this.database.query(
  //     `insert into ${this.table} (name, speciality, biography, contact) values (?, ?, ?, ?)`,
  //     [name, speciality, biography, contact]
  //   );

  //   // Return the ID of the newly inserted artist
  //   return result.insertId;
  // }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific artist by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the artist
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all artists from the "artist" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of artists
    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing artist

  // async update(artist, id) {
  //   // Execute the SQL INSERT query to update the row with tie id on the "artist" table
  //   const result = await this.database.query(
  //     `update ${this.table} set ? where id = ?`,
  //     [artist, id]
  //   );

  //   return result;
  // }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an artist by its ID
  // async delete(id) {
  //   const result = await this.database.query(
  //     `delete from ${this.table} where id = ?`,
  //     [id]
  //   );

  //   return result;
  // }
}

module.exports = ArtistManager;
