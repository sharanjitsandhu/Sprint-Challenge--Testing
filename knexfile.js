// module.exports = {
//   development: {
//     client: "sqlite3",
//     useNullAsDefault: true,
//     connection: {
//       filename: "./data/games.db3" // the folder will be automatically created when we run the migrations
//     },
//     migrations: {
//       directory: "./data/migrations"
//     },
//     seeds: {
//       directory: "./data/seeds"
//     },

//     // gotcha: SQLite dos not enforce FKs by default!!
//     pool: {
//       afterCreate: (connection, done) => {
//         connection.run("PRAGMA foreign_keys = ON", done);
//       }
//     }
//   }
// };

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./data/games.db3"
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    }
  },
  testing: {
    client: "sqlite3",
    connection: {
      filename: "./data/testing.db3"
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    }
  },
  production: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    }
  }
};
