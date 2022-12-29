const numbers = [1, 2, 3, 4];

let rta = false;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (element % 2 === 0) {
        rta = true;
        break;
    }
}
console.log(rta);
const rta1 = numbers.some(item => item % 2 === 0);
console.log('RTA1' , rta1);

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
        {
        customerName: "Nicolas",
        total: 2322,
        delivered: false,
        },
    ]; 

    const rta2 = orders.some(item => item.delivered);
    console.log('rta3',rta2);    

    const dates = [
            {
            startDate: new Date(2021, 1, 1, 10),
            endDate: new Date(2021, 1, 1, 11),
            title: "Cita de trabajo",
            },
            {
            startDate: new Date(2021, 1, 1, 15),
            endDate: new Date(2021, 1, 1, 15, 30),
            title: "Cita con mi jefe",
            },
            {
            startDate: new Date(2021, 1, 1, 20),
            endDate: new Date(2021, 1, 1, 21),
            title: "Cena",
            },
        ];