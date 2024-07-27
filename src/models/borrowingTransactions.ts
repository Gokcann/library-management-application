import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';
import User from './user';
import Book from './book';

class BorrowingTransactions extends Model {
  public userId!: number;
  public bookId!: number;
  public returned!: boolean;
  public score!: number;
}

BorrowingTransactions.init({
  userId: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    references: {
      model: User,
      key: 'id'
    }
  },
  bookId: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    references: {
      model: Book,
      key: 'id'
    }
  },
  returned: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  score: {
    type: DataTypes.FLOAT,
    allowNull: true
  }
}, {
  tableName: 'borrowed_books',
  sequelize,
});

User.belongsToMany(Book, { through: BorrowingTransactions, as: 'BorrowingTransactions' });
Book.belongsToMany(User, { through: BorrowingTransactions });

export default BorrowingTransactions;