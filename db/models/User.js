import { DataTypes } from "sequelize";
import sequelize from "../sequelize.js";
import { emailRegexp } from "../../authConstants.js/authConstants.js";

const User = sequelize.define("user", {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      is: emailRegexp,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  subscription: {
    type: DataTypes.ENUM,
    values: ["starter", "pro", "business"],
    defaultValue: "starter",
  },
  token: {
    type: DataTypes.STRING,
    defaultValue: null,
  },
});

// await User.sync();
// await User.drop();

export default User;
