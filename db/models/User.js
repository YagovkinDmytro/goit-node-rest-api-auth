import { DataTypes } from "sequelize";
import sequelize from "../sequelize.js";
import {
  emailRegExp,
  passwordRegExp,
} from "../../authConstants.js/authConstants.js";

const User = sequelize.define("user", {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      is: emailRegExp,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      is: passwordRegExp,
    },
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
