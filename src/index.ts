export {};

// Property does not exist on type 'never' in TypeScript

// EXAMPLE 1 - Use square brackets instead of dot notation to access the property

type Employee = {
  salary: number;
};

let employee: Employee | null = null;

function setEmployee() {
  employee = { salary: 100 };
}

setEmployee();

// 👉️ employee.salary is equal to 100 here
// but TypeScript doesn't know

if (employee == null) {
  console.log('employee is nullish');
} else {
  // ✅ Works fine now (Use bracket notation)
  console.log(employee['salary']);
}

// ---------------------------------------------------

// // EXAMPLE 2 - Using a type assertion to solve the error

// type Employee = {
//   salary: number;
// };

// let employee: Employee | null = null;

// function setEmployee() {
//   employee = { salary: 100 };
// }

// setEmployee();

// // 👉️ employee.salary is equal to 100 here
// // but TypeScript doesn't know

// if (employee == null) {
//   console.log('employee is nullish');
// } else {
//   // ✅ using a type assertion
//   console.log((employee as Employee).salary);
// }

// ---------------------------------------------------

// // EXAMPLE 3 - Don't declare empty arrays without typing them

// const obj = {
//   years: [],
// };

// // 👇️ never[]
// console.log(obj.years);
