"use sctrict";

const arr = ['a', 'b', 'c'];
arr[10] = 3456;
console.log(arr );

const arrObj = {
    'a':'a',
    '1':'b',
    2:'c'
};

const [b] = 'b';
arrObj[b] = '1234';

console.log(arrObj.b);


const obj = {
    'Anna':800,
    Alice:900
};

let storeName = 'AutoStore';
const storeDescription = {
    budget:10000,
    employees:['Alan', 'Douglas','Peter'],
    products:{
        broad:10,
        butter:20
    },
    open:true
    
};  