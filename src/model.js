import { DataTypes, Model } from "sequelize"
import connectToDB from "./db.js"
import url from 'url'
import util from 'util' 

const db = await connectToDB("postgresql:///employee")

class Department extends Model {
    [util.inspect.custom]() {
        return this.toJSON();
      }
}
Department.init(
    {
        deptCode: {
            type: DataTypes.STRING(),
            primaryKey: true
        },
        deptName: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        phone: {
            type: DataTypes.STRING
            // allowNull defaults to true
        }
    },
    {
        modelName: "department", // table name will be 'departments'
        sequelize: db // need to pass connection instance
    }
)


class Employee extends Model {
    [util.inspect.custom]() {
        return this.toJSON();
      }
}
Employee.init(
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    state: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: 'CA',
    },
    salary: {
      type: DataTypes.INTEGER,
      // allowNull defaults to true
    },
    // deptCode: {
    //   type: DataTypes.STRING(5),
    //   allowNull: true,
    // },
  },
  {
    modelName: 'employee', // table name will be 'employees'
    sequelize: db,
  },
);

Department.hasMany(Employee, {foreignKey: 'deptCode'})
Employee.belongsTo(Department, {foreignKey: 'deptCode'})


if(process.argv[1] === url.fileURLToPath(import.meta.url)) {
    console.log('Syncing database...');
    await db.sync({force: true});
    console.log('Finished syncing database!');
}

export default db
export {Department, Employee}