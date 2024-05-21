import { Op } from "sequelize"
import db, { Department, Employee } from "./src/model.js"

// const legal = await Department.create({
//     deptCode: "legal",
//     deptName: "Legal",
//     phone: "555-2222"
// })

// const leonard = await Employee.create({
//     name: "Leonard",
//     deptCode: "legal",
//     salary: 90000
// })

// console.log(legal.deptCode)
// console.log(leonard.name)
// console.log(leonard)
// console.log(leonard.toJSON())

// leonard.salary = 100000;
// await leonard.save();

// await leonard.destroy();

// const emps = await Employee.findAll()
// console.log(emps)

// const leo = a/

// const mktgEmps = await Employee.findAll({
//     where: { state: 'CA' }
// });
// console.log(mktgEmps)

// const legalEmps = await Employee.findAll({
//     where: { deptCode: 'legal', salary: 100000 }
//   });
// console.log(legalEmps)

// ----------Ops---------

// const overSixFigs = await Employee.findAll({
//     where: {
//       [Op.or]: [
//         { salary: { [Op.gte]: 100000 }},
//         { deptCode: { [Op.is]: null }}
//       ]
//     }
//   });

// console.log(overSixFigs)

// const mktg = await Department.create({
//     deptCode: "mktg",
//     deptName: "Marketing",
//     phone: "555-9999"
// })
// const fin = await Department.create({
//     deptCode: "fin",
//     deptName: "Finance",
//     phone: "555-1000"
// })

// const liz = await Employee.create({ name: 'Liz', deptCode: 'legal', salary: 100000 });
// const maggie = await Employee.create({
//   name: 'Maggie',
//   deptCode: 'mktg',
//   salary: 70000,
//   state: 'UT',
// });
// const nadine = await Employee.create({ name: 'Nadine', state: 'AZ' });

// const firstEmp = await Employee.findOne();
// console.log(await firstEmp.getDepartment());

// const mktg = await Department.findByPk('mktg');
// console.log(await mktg.getEmployees());


