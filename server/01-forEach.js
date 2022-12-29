const letter = ['a', 'b', 'c'];

for (let i = 0; i < letter.length; i++) {
    const element = letter[i];
    console.log('For' , element);
}

letter.forEach(item => console.log('ForEach' , item));