let sales = 123_456_789;
let course = 'TypeScript';
let is_published = true;
let level;


let numbers = [1, 2, 3]

let numbers1: number[] = []
numbers1[0] = 1;
// numbers1[1] = '2';
numbers1[1] = 2;

numbers.forEach(n => n.valueOf()) // vsc displays method available for type number

let user: [number, string] = [1, 'Mosh'];


// Enums

// const small = 1;
// const medium = 2;
// const large = 3;

// PascalCase
const enum Size { Small = 1, Medium, Large };
let mySize: Size = Size.Medium;
// console.log(mySize);


// Functions
// function calculateTax(income: number, taxYear: number): number {
function calculateTax(income: number, taxYear: number = 2022): number {
    if (taxYear < 2022) {
        return income * 1.2
    }
    return income * 1.3
}

calculateTax(123)

// Objects
// let employee: {
//     readonly id: number,
//     name: string,
//     retire: (date: Date) => void
// } = {
//     id: 1,
//     name: 'Mosh',
//     retire: (date: Date) => {
//         console.log(date);

//     }
// };

// Type Aliases
type Employee = {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
}

let employee: Employee = {
    id: 1,
    name: 'Mosh',
    retire: (date: Date) => {
        console.log(date);
    }
};

// Union Types
function kgToLbs(weight: number | string): number {
    // Narrowing
    if (typeof weight === 'number') {
        return weight * 2.2;
    }
    else {
        return parseInt(weight) * 2.2;
    }
}

kgToLbs(10);
kgToLbs('10kg');

// Intersection Types
type Draggable = {
    drag: () => void;
};

type Resizable = {
    resize: () => void
};

type UIWidget = Draggable & Resizable;
let textBox: UIWidget = {
    drag: () => { },
    resize: () => { }
}

// Literal (exact, specific)
type Quantity = 50 | 100;
let quantity: Quantity = 100;

type Metric = 'cm' | 'inch';

// Nullable types
function greet(name: string | null | undefined) {
    if (name) {
        console.log(name.toUpperCase);
    } else {
        console.log('Hello!');
    }
}

// greet(null)

// Optional Chaining
type Customer = {
    birthday: Date
}

function getCustomer(id: number): Customer | null | undefined {
    return id === 0 ? null : { birthday: new Date() }
}

let customer = getCustomer(1);
// if (customer !== null && customer !== undefined) {
//     console.log(customer.birthday);

// }

// Optional property access operator
console.log(customer?.birthday?.getFullYear());

// Optional element access operator
// if (customers !== null && customers !== undefined)
// customers[0]
// customers?.[0]

// Optional call
let log: any = (message: string) => console.log(message);
log?.('a')
