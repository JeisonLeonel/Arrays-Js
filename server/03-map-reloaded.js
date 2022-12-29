const orders = [
    {
        customerName: "Nicolas",
        total: 60,
        delivered: true,
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
    },
    {
        customerName: "Santiago",
        total: 180,
        delivered: true,
    },
    {
        customerName: "Valentina",
        total: 240,
        delivered: true,
    },
];
const result = orders.map(item => item.total)
//console.log('Origin',orders)
//console.log('New',result)

/*const result1 = orders.map(item => {
    item.tex = .19;
    return item;
})
console.log('New1',result1)
console.log('Origin',orders)*/

const result2 = orders.map(item => {
    return {
        ...item,
        tax: .19
    }
})
console.log('New3',result2)
console.log('Origin',orders)