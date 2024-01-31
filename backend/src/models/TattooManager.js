const AbstractManager = require("./AbstractManager");

class TattooManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "tattoo" as configuration
    super({ table: "tattoo" });
  }

  // The C of CRUD - Create operation

  // async create(tattoo) {
  //   const { style, image } = tattoo;
  //   // Execute the SQL INSERT query to add a new tattoo to the "tattoo" table
  //   const [result] = await this.database.query(
  //     `insert into ${this.table} (style, image) values (?, ?)`,
  //     [style, image]
  //   );

  //   // Return the ID of the newly inserted tattoo
  //   return result.insertId;
  // }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific tattoo by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the tattoo
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all tattoos from the "tattoo" table
    const [rows] = await this.database.query(
      `select tattoo.style, tattoo.image, artist.name as artist from ${this.table} join artist on tattoo.artist_id = artist.id`
    );

    // Return the array of tattoos
    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing tattoo

  // async update(tattoo, id) {
  //   // Execute the SQL INSERT query to update the row with tie id on the "tattoo" table
  //   const result = await this.database.query(
  //     `update ${this.table} set ? where id = ?`,
  //     [tattoo, id]
  //   );

  //   return result;
  // }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an tattoo by its ID
  // async delete(id) {
  //   const result = await this.database.query(
  //     `delete from ${this.table} where id = ?`,
  //     [id]
  //   );

  //   return result;
  // }
}

module.exports = TattooManager;
