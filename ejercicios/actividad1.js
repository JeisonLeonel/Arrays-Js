const number = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

const NewNumber = number.map(item => item * 2)

console.log(NewNumber);

const filterNum = number.filter(item => item >= 10);

console.log(filterNum);


const NewFilter = number.filter(item => item >=10).map(item => item * 2)

console.log(NewFilter);

const product = [
    {name:'Manzana',
    precie: 2000,
    cantidad: 100
    },
    {name: 'Banano',
    precie: 3000,
    cantidad: 50
    },
    {name:'Manzana',
    precie: 2000,
    cantidad: 100
    },
    {name:'Banano',
    precie: 2000,
    cantidad: 50
    }
];
const newProduct = product.map(item => {
    if(item.cantidad <= 100){
        item.precie += + 500
    } 
    return item
})


//const newProduct1 = product.reduce((obj, item) => obj + item.name,0)
//console.log('reduce',newProduct1);

const newProduct0 = product.map(item => item).
    reduce((obj, item) =>{
        if (!obj[item.name],!obj[item.cantidad]){
            obj[item.name] = 1
            obj[item.cantidad] = 1
        }
        else{
            obj[item.name] += 1
            obj[item.cantidad] += 1
        }
    return obj;
},{})
console.log('reduce',newProduct0);