import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';

class Book extends Model {
  public id!: number;
  public name!: string;
  public rating!: number;
}

Book.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: new DataTypes.STRING(128),
    allowNull: false,
  },
  rating: {
    type: DataTypes.FLOAT,
    defaultValue: 0,
  }
}, {
  tableName: 'books',
  sequelize,
});

export default Book;