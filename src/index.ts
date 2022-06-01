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
let employee: {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
} = {
    id: 1,
    name: 'Mosh',
    retire: (date: Date) => {
        console.log(date);

    }
};
