const letter = ['a', 'b', 'c', 'd', 'e'];

const newArray = letter.map(item => item + '++')

/*const newArray = [];

for (let i = 0; i < letter.length; i++) {
    const element = letter[i];
    newArray.push(element + '++');
}*/
console.log('Original ', letter);
console.log('New',newArray);