const target = '22a11b00c';
const pattern = /(\d\d)(\w)/g;

while (result = pattern.exec(target)) {
    console.log(result);
    console.log(result[1], result[2]);
    console.log(pattern.lastIndex)
}

console.log(target.match(pattern));