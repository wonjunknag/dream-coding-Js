// 1. Use strict
// added in ES 5
// use this for Valina Javascript.
"use strict";

// 2. Variable, rw(read/write)
// let (added in ES6)

let name = "ellie";
console.log(name);
name = "hello";
console.log(name);

// Block scope
// {  } 안에 정의된 변수는 {} 밖에서 사용 할 수 없다.

// Global scope
// {} 밖에 정의된 변수는 어디에서든 사용 가능하다.
// appliction 이 실행되고, 끝날때까지 메모리에 할당되기 때문에 최소한으로 사용해야 한다.

//2. var (don't ever use this!)
// var hoisting (move declaration from bottom to top)
//              (has no block scope)
//      : 어디에 선언했는지 상관없이 항상 제일위로 선언을 끌어올려주는 것.

// 3. Contant (한번 값을 할당하면 절대 변하지 않는 변수), r(read only)
// use const whenever possible.
// only use let if variable needs to changes.
const daysInWeek = 7;
const maxNumber = 5;

// Note!
// Immutable data types: premitive types, frozen objects (i.e. object.freeze())
// Mutable data types: all objects by default are mutable in JS
// favor immutable data type always for a few reasons:
//      - security
//      - thread safety
//      - reduce human mistakes

// Mutable 타입의 let, Immutable 타입의 const
// 값이 계속 변경되는 데이터 타입을  Mutable 데이터 타입이라고 한다.

// 4. Variable types
// primitive, single item : number, string, boolean, null, undefiendn, symbol
// object, box container
// function, first-class function

const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value:${count}, type: ${typeof count}`);
console.log(`value:${size}, type: ${typeof size}`);

// number - speicla numeric values: infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = "not a number" / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt (fairly new, dont't use it yet)
const bigInt = 1234567890123456789012345678901234567890n; // over (-2**53) ~ (2*53)
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);
Number.MAX_SAFE_INTEGER;

// string
const char = "c";
const brendan = "brendan";
const greeting = "heelo" + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; // template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

// boolean
// false: 0, null, undefined, NaN, ''
// true : any other value
const canRead = true;
const test = 3 < 1; //false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`valueL ${test}, type: ${typeof test}`);

// null(아무겂도 없는 empty값이다 라고 지정해주는 것)
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined(선언은 되었지만 아무것도 없다.)
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects(고유한 식별자가 필요할 때 사용)
const symbol1 = Symbol("id");
const symbol2 = Symbol("id");
console.log(symbol1 === symbol2); // false
const gSymbol1 = Symbol.for("id");
const gSymbol2 = Symbol.for("id");
console.log(gSymbol1 === gSymbol2); // true
// console.log(`value: ${symbol1}, type: ${typeof Symbol1}`);  에러 발생
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

// object, real-life object, data structure
const ellie = { name: "ellie", age: 20 };
ellie.age = 21;
console.log(`name: ${ellie.name}, age: ${ellie.age}`);

// 5. Dynamic typing: dynamically typed language
let text = "heelo";
console.log(text.charAt(0)); // h
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = "7" + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = "8" / "2";
console.log(`value: ${text}, type: ${typeof text}`);
// console.log(text.charAt(0)); // error
