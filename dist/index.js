"use strict";
var _a;
let sales = 123456789;
let course = 'TypeScript';
let is_published = true;
let level;
let numbers = [1, 2, 3];
let numbers1 = [];
numbers1[0] = 1;
numbers1[1] = 2;
numbers.forEach(n => n.valueOf());
let user = [1, 'Mosh'];
;
let mySize = 2;
function calculateTax(income, taxYear = 2022) {
    if (taxYear < 2022) {
        return income * 1.2;
    }
    return income * 1.3;
}
calculateTax(123);
let employee = {
    id: 1,
    name: 'Mosh',
    retire: (date) => {
        console.log(date);
    }
};
function kgToLbs(weight) {
    if (typeof weight === 'number') {
        return weight * 2.2;
    }
    else {
        return parseInt(weight) * 2.2;
    }
}
kgToLbs(10);
kgToLbs('10kg');
let textBox = {
    drag: () => { },
    resize: () => { }
};
let quantity = 100;
function greet(name) {
    if (name) {
        console.log(name.toUpperCase);
    }
    else {
        console.log('Hello!');
    }
}
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(1);
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear());
let log = (message) => console.log(message);
log === null || log === void 0 ? void 0 : log('a');
//# sourceMappingURL=index.js.map