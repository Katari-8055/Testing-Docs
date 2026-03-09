```javascript
const mongoose = require("mongoose");

/**
 * Connects the application to the MongoDB database.
 *
 * @param {string} uri - The MongoDB connection URI.
 * @returns {Promise<object>} The MongoDB connection object.
 *
 * @example
 * connectDatabase("mongodb://localhost:27017/mydb");
 */
async function connectDatabase(uri) {
  const connection = await mongoose.connect(uri);
  return connection;
}

/**
 * Closes the MongoDB database connection.
 *
 * @returns {Promise<void>} Resolves when the connection is closed.
 *
 * @example
 * closeDatabase();
 */
async function closeDatabase() {
  await mongoose.connection.close();
}

module.exports = {
  connectDatabase,
  closeDatabase,
};
```
