function countOccur(obj: Object, str: string) {
    let x = 0;
    for (const [key, value] of Object.entries(obj)) {
        if (key==str) {
            x++;
        } else if (typeof(value) === "object"){
            for (const ke in obj) {
                if (ke==str) {
                 x++;
                }
            }
        }
    } 
    return x;
}

console.log(countOccur({model: 'Bugatti', steer: {model: 'HANKOOK', size: 30}, model: "Tesla"}, 'model'));

let ob = {model: 'Bugatti', steer: {model: 'HANKOOK', size: 30}};
console.log(typeof(ob))