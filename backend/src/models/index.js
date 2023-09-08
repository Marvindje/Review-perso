require("./user.model");
require("./category.model");
require("./post.model");
require("./like.model");
require("./comment.model");
require("./commentLike.model");

const { sequelize } = require('../../config/db');

sequelize.sync({ force: true }).then(() => {
  console.log("Tables created successfully!");
}).catch((error) => {
  console.error("Unable to create tables:", error);
});
