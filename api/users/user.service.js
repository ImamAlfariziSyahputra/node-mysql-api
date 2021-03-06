const pool = require('../../config/database');

module.exports = {
  create: (data, callback) => {
    pool.query(
      `insert into registration(email, password, firstName, lastName, gender, number)
                  values(?,?,?,?,?,?)`,
      [
        data.email,
        data.password,
        data.first_name,
        data.last_name,
        data.gender,
        data.number,
      ],
      (err, results, fields) => {
        if(err) {
          return callback(err);
        }
        return callback(null, results);
      }
    );
  },
  getUsers: callback => {
    pool.query(
      `select id, email, firstname, lastname, gender, number from registration`,
      [],
      (err, results, fields) => {
        if(err) {
          return callback(err);
        }
        return callback(null, results);
      }
    );
  },
  getUserById: (id, callback) => {
    pool.query(
      `select id, email, firstName, lastName, gender, number from registration where id = ?`,
      [id],
      (err, results, fields) => {
        if(err) {
          return callback(err);
        }
        return callback(null, results[0]);
      }
    );
  },
  updateUser: (data, callback) => {
    pool.query(
      `update registration set email=?, password=?, firstName=?, lastName=?, gender=?, number=?
                          where id=?`,
      [
        data.email,
        data.password,
        data.first_name,
        data.last_name,
        data.gender,
        data.number,
        data.id,
      ],
      (err, results, fields) => {
        if(err) {
          return callback(err);
        }
        return callback(null, results);
      }
    );
  },
  deleteUser: (id, callback) => {
    pool.query(
      `delete from registration where id=?`,
      [id],
      (err, results, fields) => {
        if(err) {
          return callback(err);
        }
        return callback(null, results);
      }
    );
  },

  getUserByEmail: (email, callback) => {
    pool.query(
      `select * from registration where email = ?`,
      [email],
      (err, results, fields) => {
        if(err) {
          return callback(err);
        }
        return callback(null, results[0]);
      }
    )
  }
};
