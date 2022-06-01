"use strict";
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
//# sourceMappingURL=index.js.map